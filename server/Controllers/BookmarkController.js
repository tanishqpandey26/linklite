const Bookmark = require('../Models/Bookmark');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const allowedTags = ['AI', 'ML', 'Software Development', 'Job'];

const getJinaSummary = async (url) => {
  try {
    const parsedUrl = new URL(url);
    const encoded = encodeURIComponent(parsedUrl.href);
    const jinaUrl = `https://r.jina.ai/${encoded}`;
    console.log(`[Jina API] Fetching: ${jinaUrl}`);

    const res = await fetch(jinaUrl);

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`[Jina API] Failed (${res.status}): ${errorText}`);
      return { title: null, favicon: null };
    }

    const text = await res.text();

    //  title
    const titleMatch = text.match(/Title:\s*(.+)/i);
    const title = titleMatch ? titleMatch[1].trim() : null;

    //  favicon
    const favicon = `${parsedUrl.origin}/favicon.ico`;

    return { title, favicon };
  } catch (err) {
    console.error('[Jina API] Error:', err.message);
    return { title: null, favicon: null };
  }
};

/*  create bm */
exports.createBookmark = async (req, res, next) => {
  try {
    const { url, tag } = req.body;

    //  tag validity 
    if (!allowedTags.includes(tag)) {
      return res.status(400).json({
        error: `Invalid tag: ${tag}. Allowed: ${allowedTags.join(', ')}`,
      });
    }

    const { title, favicon } = await getJinaSummary(url);

    const bookmark = new Bookmark({
      userId: req.user._id,
      url,
      title: title || 'Untitled',
      favicon: favicon || '',
      tag, 
    });

    await bookmark.save();

    res.status(201).json({
      message: 'Bookmark created successfully',
      bookmark,
    });
  } catch (err) {
    next(err);
  }
};

/*   all bm */
exports.getBookmarks = async (req, res, next) => {
  try {
    const bookmarks = await Bookmark.find({ userId: req.user._id })
      .sort({ createdAt: -1 });

    res.json({
      count: bookmarks.length,
      bookmarks,
    });
  } catch (err) {
    next(err);
  }
};

/*  delete bm */
exports.deleteBookmark = async (req, res, next) => {
  try {
    const bookmark = await Bookmark.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!bookmark) {
      return res.status(404).json({ error: 'Bookmark not found' });
    }

    res.json({
      message: 'Bookmark deleted successfully',
      deletedId: bookmark._id,
    });
  } catch (err) {
    next(err);
  }
};
