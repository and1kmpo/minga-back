import Comments from "../../models/Comments.js";

export default async (req, res, next) => {
    try {
        let consultas = {};
        let ordenamiento = { createdAt: -1 };
        let pagination = { page: 1, limit: 4 };
        // consulta 1: id de capitulo
        if (req.query.chapter_id) {
            consultas.chapter_id = req.query.chapter_id.split(',')
        }
        // consulta 2: por orden de creación
        if (req.query.sort) {
            ordenamiento.createdAt = Number(req.query.sort)
        }
        // consulta 3: por paginación
        if (req.query.page) {
            pagination.page = Number(req.query.page)
        }
        // consulta 4: por cantidad
        if (req.query.quantity) {
            pagination.limit = Number(req.query.quantity)
        }

        let skip = (pagination.page > 0) ?
            (pagination.page - 1) * pagination.limit : 0
        let limit = pagination.limit > 0 ?
            pagination.limit : 4
        let comments = await Comments
            .find(consultas, "chapter_id user_id _id comment ") // (obj_con_filtros, selectores)
            .skip(skip)
            .limit(limit)
            .sort(ordenamiento)
            .populate("user_id", "email photo") // (propied_a_transf, selectores)

        if (comments.length > 0) {
            let total = await Comments.countDocuments(consultas) //1ro cuento la cant de doc encontrado
            let pages = Math.ceil(total / pagination.limit) //luego calculo la cant de  que tiene 
            let prev_page = Number(pagination.page) === 1 ? null : Number(pagination.page) - 1
            let next_page = Number(pagination.page) === pages ? null : Number(pagination.page) + 1

            return res.status(200).json({
                response: {comments, prev_page, next_page, pages, total},
                message: 'comments found successfully!',
                prev_page,
                next_page,
                pages, 
                total
            })
        } else {
            return res.status(404).json({
                response: {comments:[], prev_page:null, next_page:null, total:null},
                message: 'Comments not found!'
            })
        }
    } catch (error) {
        next(error)
    }
}