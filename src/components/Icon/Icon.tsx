import React from 'react';
import {icons} from '@constants';
import {SvgXml} from 'react-native-svg';

interface IconProps {
  name: keyof typeof icons;
}

const Icon = ({name}: IconProps) => {
  return <SvgXml xml={icons[name]} />;
};

export default Icon;
