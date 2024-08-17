import styled from 'styled-components/native';
import {FlatList, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import type {Product} from '@types';

export const List = styled(FlatList as typeof FlatList<Product>).attrs({
  bounces: false,
  numColumns: 2,
  contentContainerStyle: {paddingBottom: moderateScale(15), paddingHorizontal: moderateScale(15)},
  columnWrapperStyle: {gap: moderateScale(15)},
  showsVerticalScrollIndicator: false,
  ListHeaderComponentStyle: {marginBottom: moderateScale(15)},
})``;

export const ItemSeparator = styled(View)`
  height: ${moderateScale(15)}px;
`;
