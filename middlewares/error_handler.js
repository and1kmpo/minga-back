export default (error,req,res,next) => {
    console.log(error)
    return res.status(500).json({
        response: null,
        messages: error.message
    })
}