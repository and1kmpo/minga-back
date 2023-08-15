import User from "../../models/User.js";
import Company from "../../models/Company.js";
import Author from "../../models/Author.js";

export default async (req, res, next) => {
  try {
    let one = await User.findByIdAndUpdate(
      req.params.id,
      { role: 2 },
      { new: true }
    );
    let company = await Company.findOneAndUpdate(
      { user_id: req.params.id },
      { active: true },
      { new: true }
    );
    let author = await Author.findOneAndUpdate(
      { user_id: req.params.id },
      { active: false },
      { new: true }
    );
    if (one) {
      return res.status(200).json({
        success: true,
        response: { one, company },
        message: "Role changed successfully!",
      });
    } else {
      return res.status(404).json({
        success: false,
        response: null,
        message: "Not found!",
      });
    }
  } catch (error) {
    next(error);
  }
};
