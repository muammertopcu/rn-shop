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
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const ProductCard = ({product}: ProductCardProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  return (
    <Container
      testID={'product-card-container'}
      onPress={() => navigation.navigate('ProductDetail', {productId: product.id.toString()})}>
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
