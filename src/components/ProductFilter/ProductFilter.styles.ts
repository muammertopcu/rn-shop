import styled from 'styled-components/native';
import {Modal, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Icon} from '@components';

export const Container = styled(View)``;

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

export const FilterModal = styled(Modal).attrs({
  transparent: true,
  animated: true,
  animationType: 'fade',
})``;

export const ModalBackdrop = styled(Pressable)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled(Pressable)`
  background-color: white;
  padding: ${moderateScale(20)}px;
  border-radius: ${moderateScale(20)}px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  width: 80%;
`;

export const FilterTitle = styled(Text)`
  font-size: ${moderateScale(20)}px;
  font-weight: bold;
  margin-bottom: ${moderateScale(20)}px;
`;

export const FilterItem = styled(Text)<{selected?: boolean}>`
  font-size: ${moderateScale(16)}px;
  margin-bottom: ${moderateScale(10)}px;
  color: ${({selected}) => (selected ? 'black' : 'gray')};
  font-weight: ${({selected}) => (selected ? 'bold' : 'normal')};
`;
