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
        if (all.length > 0) {
            return res.status(200).json({ 
                response: all,
                message: 'Manga found successfully!'
        })
    }else{
        return res.status(404).json({
            response: null,
            message: 'Manga not found!'
        })
    }
    } catch (error) {
        return res.status(500).json({
            response: null,
            message: "Failed to find Manga "
        })
    }
}