import React from 'react';
import {
  Category,
  Container,
  Price,
  ProductImage,
  ProductInfo,
  ProductName,
} from './ProductCard.styled.ts';
import type {ProductCardProps} from './ProductCard.types.ts';

const ProductCard = ({product}: ProductCardProps) => {
  return (
    <Container testID={'product-card-container'}>
      <ProductImage source={{uri: product.thumbnail}} />

      <ProductInfo>
        <ProductName>{product.title}</ProductName>
        <Category>{product.category}</Category>
        <Price>${product.price}</Price>
      </ProductInfo>
    </Container>
  );
};

export default ProductCard;
