import styled from 'styled-components/native';
import {Image, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const Container = styled(View)`
  box-shadow: 0 11px 24px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: ${moderateScale(13)}px;
  padding: ${moderateScale(10)}px;
  flex-direction: row;
`;

export const ProductImage = styled(Image)`
  width: ${moderateScale(80)}px;
  height: ${moderateScale(80)}px;
  border-radius: ${moderateScale(10)}px;
`;

export const ProductInfo = styled(View)`
  gap: ${moderateScale(3)}px;
  flex: 1;
`;

export const ProductTitle = styled(Text)`
  font-weight: bold;
  font-size: ${moderateScale(14)}px;
`;

export const Category = styled(Text)`
  font-size: ${moderateScale(11)}px;
  color: #666666;
  text-transform: capitalize;
`;

export const Price = styled(Text)`
  font-weight: bold;
  font-size: ${moderateScale(14)}px;
  margin-top: auto;
`;

export const ActionContainer = styled(View)`
  padding: ${moderateScale(5)}px ${moderateScale(10)}px;
  background-color: #eeeeee;
  margin-top: auto;
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  gap: ${moderateScale(5)}px;
`;

export const Quantity = styled(Text)``;

export const Increment = styled(Text).attrs({suppressHighlighting: true})``;

export const Decrement = styled(Text).attrs({suppressHighlighting: true})``;
