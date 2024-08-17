import styled from 'styled-components/native';
import {Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const Container = styled(View)`
  background-color: white;
  padding: ${moderateScale(10)}px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  gap: ${moderateScale(15)}px;
`;

export const CheckoutInfo = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CheckoutTitle = styled(Text)`
  font-size: ${moderateScale(14)}px;
  color: #888888;
`;

export const CheckoutTotal = styled(Text)`
  font-size: ${moderateScale(20)}px;
  font-weight: bold;
`;

export const CheckoutLoading = styled(View)`
  justify-content: center;
  align-items: center;
  padding: ${moderateScale(10)}px;
  background-color: #f5f5f5;
  border-radius: ${moderateScale(5)}px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: ${moderateScale(10)}px;
`;
