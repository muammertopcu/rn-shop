import {icons} from '@constants';

export interface IconProps {
  name: keyof typeof icons;
  color?: string;
  size?: number;
}
