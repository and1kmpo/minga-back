import Manga from "../../models/Manga.js";


export default async (req, res) => {
    try {
        let all = await Manga.find()
        if (all) {
            return res.status(200).json({ 
                response: all,
                message: 'Manga found successfully!'
        })
    }else{
        return res.status(404).json({
            response: null,
            message: 'No Manga found!'
        })
    }
    } catch (error) {
        return res.status(500).json({
            response: null,
            message: "Failed to find Manga "
        })
    }
}