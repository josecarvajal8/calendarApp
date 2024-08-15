import React, {FC} from 'react';
import {Image, Pressable, View} from 'react-native';
import {styles} from './styles';
import {TypoBase} from '../../typography/TypoBase';
import {Colors} from '../../../config/colors';
import {viewTypes} from '../../../models/common';

interface IButtonControlProps {
  title: string;
  action: () => void;
  isActive: boolean;
}

interface IControlsProps {
  currentViewMode: viewTypes;
  onChangeViewMode: (value: viewTypes) => void;
}

const ButtonControl: FC<IButtonControlProps> = ({action, title, isActive}) => {
  const fontStyleActive = isActive ? {color: Colors.common_white} : {};
  const buttonStyle = isActive
    ? {...styles.pillButton, backgroundColor: Colors.common_black}
    : styles.pillButton;
  return (
    <Pressable style={buttonStyle} onPress={action}>
      <TypoBase style={fontStyleActive} size="title" fontStyle="semibold">
        {title}
      </TypoBase>
    </Pressable>
  );
};
export const Controls: FC<IControlsProps> = ({
  currentViewMode,
  onChangeViewMode,
}) => {
  const onCalendarView = () => onChangeViewMode('calendar');
  const onDayView = () => onChangeViewMode('day');
  return (
    <View style={styles.container}>
      <View style={styles.filters}>
        <ButtonControl
          title="Day"
          action={onDayView}
          isActive={currentViewMode === 'day'}
        />
        <ButtonControl
          title="Calendar"
          action={onCalendarView}
          isActive={currentViewMode === 'calendar'}
        />
      </View>
      <Pressable style={styles.roundedButton}>
        <Image
          style={styles.icon}
          source={require('../../../../assets/images/icons/plus.png')}
        />
      </Pressable>
    </View>
  );
};
