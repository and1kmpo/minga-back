import Author from "../models/Author.js";
import Company from "../models/Company.js";

export default async (req, res, next) => {
  if (req.user.role === 1 || req.user.role === 2) {
    let author = await Author.findOne({ user_id: req.user._id });
    if (author) {
      req.body.author_id = author._id;
      req.author = author;
      return next();
    }
    let company = await Company.findOne({ user_id: req.user._id });
    if (company) {
      req.body.company_id = company._id;
      req.company = company;
      return next();
    }
  }
  return res.status(403).status({
    success: false,
    response: null,
    messages: ["not allow"],
  });
};
