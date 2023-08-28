import Comments from '../../models/Comments.js';

export default async (req, res, next) => {
    try {
        let one = await Comments.findByIdAndDelete(req.params.id)
        if(one){
            return res.status(200).json({
                success : true,
                messages : "Deleted!",
                response : one._id
            })
        } else {
            return res.status(404).json({
                success : false,
                messages : "Comment is not found",
                response : null
            })
        }
    } catch (error) {
        next(error)
    }
}