import styled from 'styled-components/native';
import {Text, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const Container = styled(TouchableOpacity)`
  background-color: #000;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: ${moderateScale(10)}px;
`;

export const Label = styled(Text)`
  color: #fff;
  font-size: ${moderateScale(16)}px;
`;
