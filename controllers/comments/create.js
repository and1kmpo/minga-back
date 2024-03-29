import Comments from '../../models/Comments.js';

export default async (req, res, next) => {
	try {
        		const comment = await Comments.create(req.body);
		return res.status(201).json({
			success: true,
			message: 'created comment',
			response: comment
		});
        
	} catch (error) {
		return next(error);
	}
};
