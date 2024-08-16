import styled from 'styled-components/native';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const Container = styled(TouchableOpacity)`
  gap: ${moderateScale(10)}px;
  flex: 1;
`;

export const ProductImage = styled(Image)`
  aspect-ratio: 1;
  border-radius: ${moderateScale(25)}px;
  background-color: white;
`;

export const ProductInfo = styled(View)`
  gap: ${moderateScale(2)}px;
  align-items: center;
`;

export const ProductName = styled(Text).attrs({numberOfLines: 1})`
  color: #000;
  font-weight: bold;
  font-size: ${moderateScale(14)}px;
  padding: 0 ${moderateScale(10)}px;
`;

export const Category = styled(Text)`
  color: #666666;
  text-transform: capitalize;
`;

export const Price = styled(Text)`
  color: #000;
  font-weight: bold;
  font-size: ${moderateScale(16)}px;
`;
