import Manga from '../../models/Manga.js'



export default async (req, res, next) => {
    try {
        let id = req.params.id
       
        let one = await Manga.findById(id)
        return res.status(200).json({
            success: true,
            response: one,
            message: "Manga is Found! ",
        })

    }
    catch (error) {
        next(error)
    }
}