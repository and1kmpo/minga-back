export default function async (req, res, next) {
    if (req.author.active || req.company.active) {
        return next();
    }
    return res.status(400).json({
        response: null,
        message: 'Author/Company not active',
    })
}