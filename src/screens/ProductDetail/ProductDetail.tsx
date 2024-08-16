import React from 'react';
import {
  Container,
  Price,
  ProductDescription,
  ProductImage,
  ProductInfo,
  ProductName,
} from './ProductDetail.styles';
import {useGetProductDetailQuery} from '@services';
import {Button} from '@components';

const ProductDetail = ({route}: ProductDetailScreenProps) => {
  const {productId} = route.params;

  const {data} = useGetProductDetailQuery(productId);

  if (!data) {
    return null;
  }

  return (
    <Container>
      <ProductImage source={{uri: data.thumbnail}} />

      <ProductInfo>
        <ProductName>{data.title}</ProductName>

        <Price>${data.price}</Price>

        <ProductDescription>{data.description}</ProductDescription>

        <Button label={'Add to cart'} />
      </ProductInfo>
    </Container>
  );
};

export default ProductDetail;
