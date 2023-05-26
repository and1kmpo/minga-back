import Author from "../../models/Author.js";


export default async (req, res) => {
    try {
        let all = await Author.find()
        if (all) {
            return res.status(200).json({ 
                response: all,
                message: 'Authors found successfully!'
        })
    }else{
        return res.status(404).json({
            response: null,
            message: 'No authors found!'
        })
    }
    } catch (error) {
        return res.status(500).json({
            response: null,
            message: "Error founding Author"
        })
    }
}