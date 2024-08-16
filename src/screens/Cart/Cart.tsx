import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {getCartItems} from '@store';
import {CartList, EmptyComponent, Item, ItemSeparator} from './Cart.styles.ts';

const Cart = () => {
  const items = useSelector(getCartItems);

  const cartListItemSeparatorComponent = useCallback(() => <ItemSeparator />, []);

  return (
    <CartList
      data={items}
      renderItem={({item}) => <Item item={item} />}
      ItemSeparatorComponent={cartListItemSeparatorComponent}
      ListEmptyComponent={<EmptyComponent label={'Your cart is empty'} />}
    />
  );
};

export default Cart;
