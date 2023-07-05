import Author from "../../models/Author.js";

export default async(req,res)=> {
    try {
        let data = req.body             //el cliente envia un objeto en la propiedad body del objeto req (requerimientos)
        let one = await Author.create(data)   //el objeto data deberia contener TODOS los datos necesarios para crear algo
            return res.status(201).json({
                response: one,
                message: 'Author created'
            })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            response: null,
            message: 'Author not created',
            
        })
    }
}
