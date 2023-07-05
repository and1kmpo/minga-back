import Company from "../../models/Company.js";

export default async(req,res)=> {
    try {
        let data = req.body             //el cliente envia un objeto en la propiedad body del objeto req (requerimientos)
        let one = Company.create(data)   //el objeto data deberia contener TODOS los datos necesarios para crear algo
        if (one) {
            return res.status(201).json({
                response: one,
                message: 'Company created'
            })
        } else {
            return res.status(400).json({
                response: null,
                message: 'Company not created'
            })
        }
    } catch (error) {
        return res.status(500).json({
            response: null,
            message: 'Error creating Company'
        })
    }
}
