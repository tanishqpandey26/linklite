const Bookmark = require('../Models/Bookmark');
const Joi = require('joi');

const allowedTags = ['AI', 'ML', 'Software Development', 'Job'];

const bookmarkSchema = Joi.object({
  url: Joi.string()
    .uri({ scheme: ['http', 'https'] })
    .required()
    .messages({
      'string.uri': 'Invalid URL format',
      'any.required': 'URL is required',
    }),

  tag: Joi.string()
    .valid(...allowedTags)
    .required()
    .messages({
      'any.only': `Tag must be one of: ${allowedTags.join(', ')}`,
      'any.required': 'Tag is required',
    }),
});

module.exports = async (req, res, next) => {
  try {
    // validate structure
    const { error, value } = bookmarkSchema.validate(req.body, { abortEarly: false });

    if (error) {
      return res.status(400).json({
        error: error.details.map((detail) => detail.message),
      });
    }

    // normalize tag (capitalize exactly like allowedTags)
    const normalizedTag = allowedTags.find(
      (t) => t.toLowerCase() === value.tag.toLowerCase()
    );

    req.body.url = value.url;
    req.body.tag = normalizedTag;

    //duplicate check
    const exists = await Bookmark.findOne({
      userId: req.user._id,
      url: value.url,
    });

    if (exists) {
      return res.status(409).json({ error: 'Bookmark with this URL already exists' });
    }

    next();
  } catch (err) {
    next(err);
  }
};
