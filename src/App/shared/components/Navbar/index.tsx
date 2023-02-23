import * as S from './style';

export const Navbar = () => {
    return(
        <S.Header>
            <S.Logo/>
            <S.Nav>
                <S.SearchContaine>
                  <S.Search/>
                  <S.IconSearch/>
                </S.SearchContaine>
                <S.cart/>
            </S.Nav>
           
        </S.Header>
    )
};