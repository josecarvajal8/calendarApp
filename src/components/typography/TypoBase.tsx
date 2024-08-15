import React, {FC} from 'react';
import {Text, type TextStyle} from 'react-native';
import {fonts} from '../../config/constants';
import {styles} from './styles';
import {Colors} from '../../config/colors';

type FontTypes = keyof typeof fonts;

interface ITypoProps {
  children: React.ReactNode;
  size?: 'body' | 'title' | 'headline' | 'display' | 'caption';
  fontStyle?: FontTypes;
  style?: TextStyle;
}
export const TypoBase: FC<ITypoProps> = ({
  children,
  fontStyle = 'regular',
  size = 'body',
  style = {},
}) => {
  const fontBaseStyle: TextStyle = {
    ...styles[size],
    fontFamily: fonts[fontStyle],
    color: Colors.text,
    ...style,
  };
  return <Text style={fontBaseStyle}>{children}</Text>;
};
