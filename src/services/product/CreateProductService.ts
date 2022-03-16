import prismaClinte from "../../prisma";


interface ProductRequest{
    name: string,
    price: string,
    description: string,
    categoty_id: string,
    banner: string
}


class CreateProductService{
    async execute({name, price, description, categoty_id}:ProductRequest){

        return {ok: true}

    }
}

export {CreateProductService}