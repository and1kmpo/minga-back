import User from "../../models/User.js"
import brcyptjs from "bcryptjs"

export default async(req,res,next)=> {
    try {
        let data = req.body
        data.password = brcyptjs.hashSync(req.body.password, 10)
        let one = await User.create(data)
        return res.status(201).json({
            response: 'Id: '+one._id,
            message: 'User created'
        })
    } catch (error) {
        next(error)
    }
}
