import styled from 'styled-components/native';
import {FlatList, View} from 'react-native';
import {CartItem, EmptyCard} from '@components';
import type {Cart} from '@types';
import {moderateScale} from 'react-native-size-matters';

export const CartList = styled(FlatList as typeof FlatList<Cart>).attrs({
  contentContainerStyle: {
    padding: moderateScale(15),
    flexGrow: 1,
  },
})``;

export const Item = styled(CartItem)``;

export const ItemSeparator = styled(View)`
  height: ${moderateScale(15)}px;
`;

export const EmptyComponent = styled(EmptyCard)``;
