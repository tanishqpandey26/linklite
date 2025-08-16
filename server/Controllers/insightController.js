const Bookmark = require('../Models/Bookmark');

exports.getAccountInsights = async (req, res, next) => {
  try {
    const userId = req.user._id;

    //total bookmarks
    const totalBookmarks = await Bookmark.countDocuments({ userId });

    // most recent bookmark
const recentBookmark = await Bookmark.findOne({ userId })
  .sort({ createdAt: -1 })
  .select("title url tag")   // include tag here
  .lean();

// tag of last bookmark
const lastTag = recentBookmark ? recentBookmark.tag : null;


    res.json({
      totalBookmarks,
      lastTag,
      recentBookmark
    });
  } catch (err) {
    next(err);
  }
};
