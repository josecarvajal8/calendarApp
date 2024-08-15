import React, {FC, useMemo, useState} from 'react';
import {FlatList, View} from 'react-native';
import {
  adjustDateByDays,
  areDatesEqual,
  getDaysInMonth,
  getWeekDays,
  isOnSameMonth,
} from '../../utils/utilities';
import {viewTypes} from '../../models/common';
import {styles} from './styles';
import {TypoBase} from '../typography/TypoBase';
import {CalendarControl} from '../controls';
import {DayComponent} from './day/DayComponent';
import {DayView} from './dayView/DayView';
import {mockEvents} from '../../config/contants';

interface ICalendarProps {
  currentViewMode: viewTypes;
  onChangeViewMode: (value: viewTypes) => void;
}

export const Calendar: FC<ICalendarProps> = ({
  currentViewMode,
  onChangeViewMode,
}) => {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth());
  const weekDays = getWeekDays();

  const onChangeMonth = (action: 'next' | 'previous') => {
    setMonth(prevMonth => {
      if (action === 'next') {
        if (prevMonth === 11) {
          setYear(prevYear => prevYear + 1);
          return 0;
        } else {
          return prevMonth + 1;
        }
      } else {
        if (prevMonth === 0) {
          setYear(prevYear => prevYear - 1);
          return 11;
        } else {
          return prevMonth - 1;
        }
      }
    });
  };

  const onToday = () => {
    setSelectedDate(currentDate);
    setYear(currentDate.getFullYear());
    setMonth(currentDate.getMonth());
  };

  const getDaysToRender = () => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDayOfMonth = new Date(year, month + 1, 1).getDay() - 1;
    const daysArray = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(new Date(year, month, i));
    }

    if (lastDayOfMonth >= 0) {
      for (let i = lastDayOfMonth; i < weekDays.length - 1; i++) {
        daysArray.push(null);
      }
    }

    return daysArray;
  };

  const eventsOnSelectedDay = useMemo(
    () => mockEvents.filter(event => areDatesEqual(event.date, selectedDate)),
    [selectedDate],
  );

  const eventsOnMonth = useMemo(
    () =>
      mockEvents.filter(event => {
        return isOnSameMonth({
          firstDate: {
            month: month,
            year: year,
          },
          secondDate: {
            month: event.date.getMonth(),
            year: event.date.getFullYear(),
          },
        });
      }),
    [month, year],
  );

  const renderWeekDays = () => (
    <View style={styles.row}>
      {weekDays.map((day, index) => (
        <View key={index} style={styles.cell}>
          <TypoBase size="caption" fontStyle="semibold">
            {day}
          </TypoBase>
        </View>
      ))}
    </View>
  );

  const onSelectDate = (date: Date) => {
    setSelectedDate(date);
    onChangeViewMode('day');
  };

  const onChangeDateOnDayView = (value: number) => {
    const resultDate = adjustDateByDays(selectedDate, value);
    setSelectedDate(resultDate);
  };

  return (
    <View style={styles.container}>
      <CalendarControl
        onChangeDateOnDayView={onChangeDateOnDayView}
        currentViewMode={currentViewMode}
        selectedDate={selectedDate}
        currentMonth={month}
        currentYear={year}
        onChangeMonth={onChangeMonth}
        onToday={onToday}
      />
      {currentViewMode === 'calendar' ? (
        <>
          {renderWeekDays()}
          <FlatList
            data={getDaysToRender()}
            renderItem={({item}) => {
              const dayHasEvents = item
                ? Boolean(
                    eventsOnMonth.find(event =>
                      areDatesEqual(event.date, item),
                    ),
                  )
                : false;
              return (
                <DayComponent
                  hasEvents={dayHasEvents}
                  item={item}
                  currentDate={currentDate}
                  selectedDate={selectedDate}
                  setSelectedDate={onSelectDate}
                />
              );
            }}
            keyExtractor={(item, index) =>
              item ? item.toDateString() : index.toString()
            }
            numColumns={7}
          />
        </>
      ) : (
        <DayView events={eventsOnSelectedDay} />
      )}
    </View>
  );
};
