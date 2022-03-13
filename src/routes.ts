import { Router } from 'express'
import { CreateUserController } from './controllers/user/createUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailuserServices } from './controllers/user/DetailUserController'
import { isAuthenticated } from './middlewares/isAuthenticated'

const router = Router()


// router.get('/teste', (req: Request, res: Response) => {
//     return res.json({ ok: true })
// })

// -- ROTAS USER --
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)



router.get('/me', isAuthenticated, new DetailuserServices().handle)   //"get"  Pra poder buscar informações do usuário


export { router }