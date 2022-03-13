import { Request, Response } from "express";
import {DetailUserServices} from '../../services/user/DetailUserServices'

class DetailuserServices{
    async handle(req: Request, res:Response){
        
        const detailUserServices = new DetailUserServices() 

        const user = await detailUserServices.execute()


        return res.json(user)


    }
}


export {DetailuserServices}