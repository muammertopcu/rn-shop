import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {getCartItems} from '@store';
import {CartList, Container, EmptyComponent, Item, ItemSeparator} from './Cart.styles.ts';
import {Checkout} from '@components';

const Cart = () => {
  const items = useSelector(getCartItems);

  const cartListItemSeparatorComponent = useCallback(() => <ItemSeparator />, []);

  return (
    <Container>
      <CartList
        data={items}
        renderItem={({item}) => <Item item={item} />}
        ItemSeparatorComponent={cartListItemSeparatorComponent}
        ListEmptyComponent={<EmptyComponent label={'Your cart is empty'} />}
      />

      {items.length > 0 && <Checkout />}
    </Container>
  );
};

export default Cart;
