import Comments from '../../models/Comments.js';
export default async (req, res, next) => {
    try {
        let one = await Comments.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new : true}
        )
        if(one){
            return res.status(200).json({
                success : true,
                messages : "Updated!",
                response : one
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