import React from 'react';
import {icons} from '@constants';
import {SvgXml} from 'react-native-svg';
import {moderateScale} from 'react-native-size-matters';
import type {IconProps} from './Icon.types.ts';

const Icon = ({name, color = 'white', size = 16}: IconProps) => {
  const xml = icons[name]
    .replace(/fill="currentColor"/g, `fill="${color}"`)
    .replace(/stroke="currentColor"/g, `stroke="${color}"`);

  return <SvgXml xml={xml} width={moderateScale(size)} height={moderateScale(size)} />;
};

export default Icon;
