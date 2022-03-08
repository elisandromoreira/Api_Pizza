import {Request, response, Response} from 'express'

class CreateUserController{
    async handle(req: Request, res: Response){
        return res.json({nome: 'juan'})

    }
}

export {CreateUserController}