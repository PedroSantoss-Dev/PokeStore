import styled from "styled-components";

import { SiPokemon } from 'react-icons/si';
import { HiOutlineShoppingBag, HiOutlineSearch } from 'react-icons/hi';
const screenSizes = {
    large: 1170,
    desktop: 992,
    tablet: 768,
    mobile: 376
}

export const Header = styled.header`
width: 100%;
height: 3.5rem;
background-color: #ef5350;
display: flex;
z-index: 999;
position: fixed;
border-bottom: 1px solid #fff;
@media (max-width: 768px) {
    background-color: blue;
}

`;
export const Logo = styled(SiPokemon)`
position: absolute;
width:4.5rem;
height: 3.5rem;
color: #ffe900;
margin: 0;
`;

export const Nav = styled.nav`
width: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
`;
export const NavLinks = styled.ul`

`;

export const Links = styled.li``;
export const SearchContaine = styled.div`
width: 24.4rem;
height: 1.7rem;
margin: 2rem;
padding: 15px;
background-color: #FFF;
display: flex;
align-items: center;
border-radius: 10px;

`;

export const Search = styled.input`
 width: 23rem;
 height: 1.6rem;
 outline: none;
 border: none;
 border-radius: 10px;
 
`;
export const cart = styled(HiOutlineShoppingBag)`
height: 2rem;
margin: 2rem;
cursor: pointer;
&:hover{
    transform: scale(1.2);
    opacity: 0.8;
}
`;
export const IconSearch = styled(HiOutlineSearch)`
height: 1.5rem;
`;
