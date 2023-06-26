export default async(req,res,next)=> {
    try {
        return res.status(200).json({
            response: req.token,
            message: 'User signin with token'
        })
    } catch (error) {
        next(error)
    }
}
