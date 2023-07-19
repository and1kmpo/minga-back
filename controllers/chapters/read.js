import Chapter from "../../models/Chapter.js";

export default async (req, res, next) => {
    try {
        let consultas = {}
        let ordenamiento = {order: 1}
        let pagination = {
            page: 1,
            limit: 6
        }

        // consulta 1: por titulo
        if (req.query.title){
            consultas.title = new RegExp(req.query.title, 'i')
        }
        // consulta 2: por id de manga
        if (req.query.manga_id){
            consultas.manga_id = req.query.manga_id.split(',')
        }
        // consulta 3: por paginación
        if (req.query.page) {
            pagination.page = req.query.page
        }

        let skip = (pagination.page>0) ?
           (pagination.page-1)*pagination.limit : 0
        let limit = pagination.limit>0 ?
           pagination.limit : 0

        let all = await Chapter
            .find(consultas)
            .limit(limit)
            .sort(ordenamiento)

        if (all.length > 0) {
            let total = await Chapter.countDocuments(consultas) //1ro cuento la cant de doc encontrado
            let pages = Math.ceil(total/pagination.limit) //luego calculo la cant de pages que tiene el "libro"

            let prev_page = Number(pagination.page)===1 ? null : Number(pagination.page)-1
            let next_page = Number(pagination.page)===pages ? null : Number(pagination.page)+1

            return res.status(200).json({
                response: all,
                message: 'Chapter found successfully!',
                prev_page,
                next_page
            })
        }else{
            return res.status(404).json({
                response: null,
                message: 'Chapter not found!'
            })
        }
    } catch (error) {
        next(error)
    }
}