import { IProduct } from '../../@types';
import * as S from './style';

export const Card = ({title,price,imageUrl,id}: IProduct) => {
    return(
        <S.Card key={title}>
            <S.Img src={imageUrl}/>
            <S.Title>{title}</S.Title>
            <S.Price>{price}</S.Price>
        </S.Card>
    )
}