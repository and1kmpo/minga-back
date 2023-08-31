import Company from "../../models/Company.js";

export default async (req, res) => {
  try {
    let all_active = await Company.find({ active: true });
    let all_inactive = await Company.find({ active: false });
    if (all_active || all_inactive) {
      return res.status(200).json({
        response: { all_active, all_inactive },
        message: "Company found successfully!",
      });
    } else {
      return res.status(404).json({
        response: null,
        message: "Company not found!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      response: null,
      message: "Failed to find Company ",
    });
  }
};
