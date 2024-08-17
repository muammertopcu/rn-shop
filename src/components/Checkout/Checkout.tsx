import React, {useMemo, useState} from 'react';
import {CheckoutInfo, CheckoutLoading, CheckoutTitle, CheckoutTotal, Container} from './Checkout.styles.ts';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, clearCart, getCartItems} from '@store';
import {ActivityIndicator} from 'react-native';
import {Button} from '@components';

const Checkout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector(getCartItems);

  const [status, setStatus] = useState('idle');

  const price = useMemo(() => items.reduce((acc, item) => acc + item.price * item.quantity, 0), [items]);
  const count = useMemo(() => items.reduce((acc, item) => acc + item.quantity, 0), [items]);

  const handleCheckout = () => {
    setStatus('loading');
    const timeout = setTimeout(() => {
      dispatch(clearCart());
      setStatus('idle');
    }, 2000);

    return () => clearTimeout(timeout);
  };

  return (
    <Container>
      <CheckoutInfo>
        <CheckoutTitle>Total ({count} item) :</CheckoutTitle>
        <CheckoutTotal>${price.toFixed(2)}</CheckoutTotal>
      </CheckoutInfo>

      <Button label={'Proceed to Checkout'} onPress={handleCheckout} disabled={status === 'loading'} />

      {status === 'loading' && (
        <CheckoutLoading>
          <ActivityIndicator />
        </CheckoutLoading>
      )}
    </Container>
  );
};

export default Checkout;
