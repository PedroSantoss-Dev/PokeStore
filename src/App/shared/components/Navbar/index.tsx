import { useState, ReactNode } from 'react';
import * as S from './style';
import { ShoppingCart } from '../ShoppingCart';
import { MenuProps } from '../ShoppingCart/interface';


export const Navbar = () => {
    const [show, setShow] = useState<boolean>(false);

    const toggleMenu = () => {
      setShow(!show)
    }

    return(
        <S.Header>
            <S.Logo/>
            <S.Nav>
                <S.SearchContaine>
                  <S.Search/>
                  <S.IconSearch/>
                </S.SearchContaine>
                <S.cart onClick={toggleMenu} />
            </S.Nav>
           <ShoppingCart show={show} />
        </S.Header>
    )
};