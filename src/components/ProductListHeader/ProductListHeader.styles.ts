import styled from 'styled-components/native';
import {TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Icon} from '@components';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${moderateScale(15)}px;
  background-color: white;
`;

export const FilterButton = styled(TouchableOpacity)`
  width: ${moderateScale(40)}px;
  height: ${moderateScale(40)}px;
  border-radius: ${moderateScale(20)}px;
  align-items: center;
  justify-content: center;
  background-color: #000000;
`;

export const FilterIcon = styled(Icon).attrs({
  color: 'white',
})``;
