import styled from 'styled-components/native';
import {FlatList, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import type {Product} from '@types';

export const List = styled(FlatList as typeof FlatList<Product>).attrs({
  numColumns: 2,
  contentContainerStyle: {padding: moderateScale(15)},
  columnWrapperStyle: {gap: moderateScale(15)},
  showsVerticalScrollIndicator: false,
})``;

export const ItemSeparator = styled(View)`
  height: ${moderateScale(15)}px;
`;
