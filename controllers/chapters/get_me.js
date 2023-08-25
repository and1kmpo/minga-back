import Chapter from "../../models/Chapter.js"
// para ver todos los capitulos de un manga del autor logueado

export default async function get_me(req, res, next) {
    try {
        let all = await Chapter.find(
            { manga_id: req.query.manga_id },
            "_id title order cover_photo pages"
        )

        if (all.length > 0) {
            return res.status(200).json({
                success: true,
                response: all,
                message: 'Chapters founded',
            })
        } else {
            return res.status(404).json({
                success: false,
                response: null,
                message: 'Chapters not founded',
            })
        }

    } catch (error) {
        next(error)
    }
}
