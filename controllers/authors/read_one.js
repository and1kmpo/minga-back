import Author from "../../models/Author.js";

export default async (req, res, next) => {
    try {
        let id = req.params.id
        console.log(req.params.id)
        let one = await Author.findById(id)
        return res.status(200).json({
            success: true,
            response: one,
            message: "Author  Found! ",
        })

    }
    catch (error) {
        next(error)
    }
}


