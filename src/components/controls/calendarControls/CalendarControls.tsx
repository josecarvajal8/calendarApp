import React, {FC} from 'react';
import {Image, Pressable, TouchableOpacity, View} from 'react-native';
import {TypoBase} from '../../typography/TypoBase';
import {LABEL_MONTHS} from '../../../config/contants';
import {styles} from './styles';
import {viewTypes} from '../../../models/common';
interface ICalendarControls {
  currentMonth: number;
  currentYear: number;
  onChangeMonth: (value: 'next' | 'previous') => void;
  onToday: () => void;
  selectedDate: Date;
  currentViewMode: viewTypes;
  onChangeDateOnDayView: (value: number) => void;
}
export const CalendarControl: FC<ICalendarControls> = ({
  currentMonth,
  currentYear,
  onChangeMonth,
  onToday,
  currentViewMode,
  selectedDate,
  onChangeDateOnDayView,
}) => {
  const dateLabel =
    currentViewMode === 'calendar'
      ? `${LABEL_MONTHS[currentMonth]} ${currentYear}`
      : `${
          LABEL_MONTHS[selectedDate.getMonth()]
        } ${selectedDate.getDate()} ${selectedDate.getFullYear()}`;

  const onBackButton =
    currentViewMode === 'calendar'
      ? () => onChangeMonth('previous')
      : () => onChangeDateOnDayView(-1);

  const onNextButton =
    currentViewMode === 'calendar'
      ? () => onChangeMonth('next')
      : () => onChangeDateOnDayView(1);

  return (
    <View style={styles.containerControlsCalendar}>
      <View style={styles.dateContainer}>
        <Pressable onPress={onBackButton}>
          <Image
            style={styles.imageButton}
            source={require('../../../../assets/images/icons/back.png')}
          />
        </Pressable>
        <TypoBase size="title" fontStyle="semibold">
          {dateLabel}
        </TypoBase>
        <Pressable onPress={onNextButton}>
          <Image
            style={styles.imageButton}
            source={require('../../../../assets/images/icons/next.png')}
          />
        </Pressable>
      </View>
      <TouchableOpacity style={styles.textButton} onPress={onToday}>
        <TypoBase fontStyle="bold">{'Today'}</TypoBase>
      </TouchableOpacity>
    </View>
  );
};
