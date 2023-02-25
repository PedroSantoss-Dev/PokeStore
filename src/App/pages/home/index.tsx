import { useEffect, useState } from "react"
import * as S from"./style"
import api from "../../shared/service/api";
import { IProduct, IResponse } from "../../shared/@types";
import { Card } from "../../shared/components/card";

export const Home = () => {
    const [ products, setProducts ] = useState<IProduct[]>([]);
    
     const LoadProduct = async() => {
        const response = await api.get<IResponse>('pokemon/?offset=0&limit=12')
        let id = 0;
        const listProducts: IProduct[]= response.data.results.map((pokemon) => {
            const product = {
                id: String(id),
                title: pokemon.name,
                price: (id + 2) * 68,
                imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                id + 1
              }.png`,
            };
            id += 1;
            return product;
        } );
        setProducts(listProducts);
    }

    useEffect(() => {
    LoadProduct()
    },[])
    return (
        <S.Container>
            {
                products.map((item) => (
                   <Card
                   id={item.id}
                    title={item.title}
                    imageUrl={item.imageUrl}
                    price={item.price}
                   />

                   
                ))
            }
        </S.Container>
    )
}