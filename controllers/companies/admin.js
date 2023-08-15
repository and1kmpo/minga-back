import Company from "../../models/Company.js";

export default async (req, res, next) => {
  try {
    let all_active = await Company.find({ active: true });
    let all_inactive = await Company.find({ active: false });
    return res.status(200).json({
      response: { all_active, all_inactive },
      success: true,
      message: "Found active and inactive companies!",
    });
  } catch (error) {
    next(error);
  }
};
