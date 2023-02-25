import {
    Container,
    MainContainer,
    ProductContainer,
    ProductImage,
    Product,
    ProductTitle,
    PriceContainer,
    ProductPrice,
    ProductButton,
  } from './styles';
  
  export interface IProduct {
    id: string;
    title: string;
    imageUrl: string;
    price: number;
  }
  
  export interface IResults {
    name: string;
    url: string;
  }
  
  export interface IResponse {
    next: string;
    previous: string | null;
    results: Results[];
  }
