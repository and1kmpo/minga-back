import Manga from "../../models/Manga.js";


export default async (req, res, next) => {
    try {
        let ordenamiento = {title:1};//1 -> Ordenar ascendentemente y -1 -> Ordena descendentemente
        let consultas = {};
        if (req.query.title){
            consultas.title = RegExp(req.query.title,"i");
        }
        if (req.query.description){
            consultas.description = RegExp(req.query.description,"i");
        }
        if (req.query.sort){
            ordenamiento.title = req.query.sort;
        }
        let all = await Manga.find(consultas, "title -_id description").sort(ordenamiento);
       let pagination = { page: 1, limit: 4 };
        if (req.query.page) {
            pagination.page = req.query.page
        };
        if (req.query.title) {
            consultas.title = new RegExp(req.query.title.trim(), "i")
        };
        if (req.query.category_id) {
            consultas.category_id = req.query.category_id.split(',')
            .map(category_id => category_id.trim())
        };
        let skip = (pagination.page > 0) ? (pagination.page - 1) * pagination.limit : 0
        let limit = pagination.limit > 0 ? pagination.limit : 0
        let one = await Manga.find(consultas, "title cover_photo category_id")
            .skip(skip).limit(limit).sort({ title: 1 }).populate("category_id", "name")

        if (one.length>0) {
            let total = await Manga.countDocuments(consultas);
            let pages = Math.ceil(total / pagination.limit);
            let prev_page = Number (pagination.page) === 1 ? null :Number(pagination.page) - 1
            let next_page = Number(pagination.page) === pages ? null : Number(pagination.page) + 1
            return res.status(200).json({
                response: one,
                message: 'Manga found successfully!',
                prev_page,
                next_page
            })
    }else{
        return res.status(404).json({
            response: null,
            message: 'Manga not found!'
        })
    }
    } catch (error) {
       
    next(error)
    }
}