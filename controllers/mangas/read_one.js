import Manga from '../../models/Manga.js'

export default async (req, res, next) => {
    try {
        let id = req.params.id

        let one = await Manga
            .findById(id, "-_id -createdAt -updatedAt")
            .populate("author_id", "-_id name last_name photo")
            .populate("company_id", "-_id name website photo")
            .populate("category_id", "-_id name color hover")

        if (one) {
            return res.status(200).json({
                success: true,
                response: one,
                message: "Manga is Found! ",
            })
        } else {
            return res.status(404).json({
                response: null,
                message: 'Manga not found'
            })
        }

    }
    catch (error) {
        next(error)
    }
}