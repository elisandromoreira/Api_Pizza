import {Request, Response} from 'express'
import { CreateProductService } from '../../services/product/CreateProductService'


class CreateProductController{
    async handle(req: Request, res: Response){
        const {name, price, description, categoty_id} = req.body  // Pegando o valor do usuário, obrigatorio pro typeScript

        let banner =''

        const createProductService = new CreateProductService()

        const product = await createProductService.execute({
            name, price, description, categoty_id, banner
        })

        return res.json(product)
    }
}

export {CreateProductController}
