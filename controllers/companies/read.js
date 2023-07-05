import Company from "../../models/Company.js";


export default async (req, res) => {
    try {
        let all = await Company.find()
        if (all) {
            return res.status(200).json({ 
                response: all,
                message: 'Company found successfully!'
        })
    }else{
        return res.status(404).json({
            response: null,
            message: 'Company not found!'
        })
    }
    } catch (error) {
        return res.status(500).json({
            response: null,
            message: "Failed to find Company "
        })
    }
}