import User from '../models/User.js'
export default async (req,res,next)=>{
    try {
        let user = await User.findOne({email: req.body.email})
        if(user){
            return res.status(400).json({
                success: false,
                messages:['user has been registered!']
            })
          }
       
      return next_order()
    
    } catch (error) {
        next(error);
    }
}