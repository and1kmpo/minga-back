import Chapter from '../../models/Chapter.js'

export default async (req, res, next) => {
    try {
        let data = req.body
        console.log(req.body);
        let one = await Chapter.create(data)
        return res.status(201).json({
            success: true,
            response: one,
            message: 'Chapter created'
        })
    } catch (error) {
        return next(error)
    }
}
