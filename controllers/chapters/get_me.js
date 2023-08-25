import Chapter from "../../models/Chapter.js"
// para ver todos los capitulos de un manga del autor logueado

export default async function get_me(req, res, next) {
    try {
        // req.user es el usuario autenticado (se trae desde passport)
        // req.body.author_id || req.author es el author logueado (se trae desde has_permition)
        // req.query trae solo manga_id, es la propiedad enviada por el click
        let all = await Chapter.find(
            { manga_id: req.query.manga_id },
            "_id manga_id title cover_photo order cover_photo pages"
        ).populate("manga_id", "title")

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
