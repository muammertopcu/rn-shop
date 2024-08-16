import React from 'react';
import type {Cart} from '@types';
import {
  ActionContainer,
  Category,
  Container,
  Decrement,
  Increment,
  Price,
  ProductImage,
  ProductInfo,
  ProductTitle,
  Quantity,
} from './CartItem.styles.ts';
import {useDispatch} from 'react-redux';
import {addItem, AppDispatch, removeItem} from '@store';

const CartItem = ({item}: {item: Cart}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleIncrement = () => {
    dispatch(addItem({...item, quantity: 1}));
  };

  const handleDecrement = () => {
    dispatch(removeItem(item));
  };

  return (
    <Container>
      <ProductImage source={{uri: item.thumbnail}} />

      <ProductInfo>
        <ProductTitle>{item.title}</ProductTitle>
        <Category>{item.category}</Category>
        <Price>${item.price}</Price>
      </ProductInfo>

      <ActionContainer>
        <Decrement onPress={handleDecrement}>-</Decrement>
        <Quantity>{item.quantity}</Quantity>
        <Increment onPress={handleIncrement}>+</Increment>
      </ActionContainer>
    </Container>
  );
};

export default CartItem;
