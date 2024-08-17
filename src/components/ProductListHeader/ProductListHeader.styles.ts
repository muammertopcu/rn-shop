import styled from 'styled-components/native';
import {View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${moderateScale(15)}px;
  background-color: white;
`;
