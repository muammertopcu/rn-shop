import styled from 'styled-components/native';
import {TextInput, View} from 'react-native';
import {Icon} from '@components';
import {moderateScale} from 'react-native-size-matters';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${moderateScale(5)}px;
  background-color: #f3f4f5;
  border-radius: 30px;
  padding: 0 ${moderateScale(15)}px;
  height: ${moderateScale(40)}px;
  flex: 1;
`;

export const SearchIcon = styled(Icon).attrs({
  color: 'black',
})``;

export const Input = styled(TextInput).attrs({
  placeholderTextColor: '#AAAAAA',
  selectionColor: 'black',
  placeholder: 'Search...',
})`
  flex: 1;
`;
