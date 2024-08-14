import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {TypoBase} from '../../typography/TypoBase';
import {areDatesEqual} from '../../../utils/utilities';
import {Colors} from '../../../config/colors';
import {styles} from './styles';

interface IDayComponentProps {
  item: Date | null;
  currentDate: Date;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

export const DayComponent: FC<IDayComponentProps> = ({
  item,
  currentDate,
  selectedDate,
  setSelectedDate,
}) => {
  const isToday = item ? areDatesEqual(item, currentDate) : false;
  const isItemSelected = item ? areDatesEqual(item, selectedDate) : false;
  const cellStyle = isItemSelected
    ? {
        ...styles.dayCell,
        ...styles.todayCell,
        backgroundColor: Colors.common_black,
      }
    : isToday
    ? {...styles.dayCell, ...styles.todayCell}
    : styles.dayCell;
  const textStyle = isItemSelected ? {color: Colors.common_white} : {};
  return (
    <TouchableOpacity
      style={cellStyle}
      onPress={() => item && setSelectedDate(item)}>
      <TypoBase style={textStyle}>{item ? item.getDate() : ''}</TypoBase>
    </TouchableOpacity>
  );
};
