import styled from 'styled-components/native';
import {Image, ScrollView, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Button} from '@components';

export const Container = styled(ScrollView)``;

export const ProductImage = styled(Image)`
  width: 100%;
  aspect-ratio: 1;
  background-color: #fff;
`;

export const ProductInfo = styled(View)`
  padding: ${moderateScale(15)}px;
  gap: ${moderateScale(10)}px;
`;

export const ProductName = styled(Text)`
  color: #000;
  font-size: ${moderateScale(18)}px;
  font-weight: bold;
`;

export const Price = styled(Text)``;

export const ProductDescription = styled(Text)`
  color: #3f3f3f;
  font-size: ${moderateScale(13)}px;
  font-weight: normal;
  line-height: ${moderateScale(20)}px;
`;

export const AddToCartButton = styled(Button).attrs({
  icon: 'bag',
})``;
