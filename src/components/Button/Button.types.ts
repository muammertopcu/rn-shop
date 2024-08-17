import {TouchableOpacityProps} from 'react-native';
import {icons} from '@constants';

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
  onPress?: () => void;
  icon?: keyof typeof icons;
}
