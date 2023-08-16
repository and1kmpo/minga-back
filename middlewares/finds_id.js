import Manga from '../models/Manga.js'

export default async (req, res, next) => {
    if (req.author) {
		const manga = await Manga.findOne({ _id: req.query.manga_id, author_id: req.author._id })
		if (manga) {
			return next();
		}

	}
	if (req.company) {
		const manga = await Manga.findOne({ _id: req.query.manga_id, company_id: req.company._id })
		if (manga) {
			return next();
		}
	}
    return res.status(403).json({
        response: null,
        message: 'Do not authorized!'
    })
}
