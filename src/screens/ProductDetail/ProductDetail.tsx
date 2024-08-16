import React from 'react';
import {
  AddToCartButton,
  Container,
  Price,
  ProductDescription,
  ProductImage,
  ProductInfo,
  ProductName,
} from './ProductDetail.styles';
import {useGetProductDetailQuery} from '@services';
import {addItem, type AppDispatch} from '@store';
import {useDispatch} from 'react-redux';

const ProductDetail = ({route}: ProductDetailScreenProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const {productId} = route.params;

  const {data} = useGetProductDetailQuery(productId);

  if (!data) {
    return null;
  }

  const addToCart = () => {
    dispatch(addItem({...data, quantity: 1}));
  };

  return (
    <Container>
      <ProductImage source={{uri: data.thumbnail}} />

      <ProductInfo>
        <ProductName>{data.title}</ProductName>

        <Price>${data.price}</Price>

        <ProductDescription>{data.description}</ProductDescription>

        <AddToCartButton label={'Add to cart'} onPress={addToCart} />
      </ProductInfo>
    </Container>
  );
};

export default ProductDetail;
