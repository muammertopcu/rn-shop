import styled from 'styled-components/native';
import {Text, TouchableOpacity} from 'react-native';

export const Container = styled(TouchableOpacity)`
  background-color: #000;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled(Text)`
  color: #fff;
  font-size: 16px;
`;
