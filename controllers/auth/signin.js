import User from "../../models/User.js"

export default async(req,res,next)=> {
    try {
        await User.findByIdAndUpdate(req.user._id,{ online:true })
        return res.status(200).json({
            response: req.token,
            message: 'User signin'
        })
    } catch (error) {
        next(error)
    }
}