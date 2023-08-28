import Comments from "../models/Comments.js";

export default async (req,res, next) => {
    if (req.user){
        const comment = await Comments.findOne({
            _id:req.params.id,
            user_id: req.user._id
        })
        if (comment){
            return next()
        }
    }
    return res.status(403).json({
		success: false,
		response: null,
		messages: ['To comment you must login!']
    })
}