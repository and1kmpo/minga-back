import Chapter from "../../models/Chapter.js";



export default async (req, res, next) => {
    try {
        let chapter_id = req.params.chapter_id
        console.log(req.params.id)
        let one = await Chapter.findById(chapter_id, "-createdAt -updatedAt")
        let next= await Chapter.findOne(
            {_id: { $gt: chapter_id } }
        )
        return res.status(200).json({
            success: true,
            response: one,
            next: next ? next._id : null,
            message: "Chapter is Found! "
            
        })

    }
    catch (error) {
        next(error)
    }
}
