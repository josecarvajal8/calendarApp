import React, {FC, useEffect, useMemo, useRef} from 'react';
import {View, ScrollView, Pressable} from 'react-native';
import {IEvent} from '../../../models/events';
import {styles} from './styles';
import {TypoBase} from '../../typography/TypoBase';
import {parseTime} from '../../../utils/utilities';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation/interface';

interface IDayViewProps {
  events: IEvent[];
}
const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  return {hours, minutes};
};
export const DayView: FC<IDayViewProps> = ({events}) => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Event'>>();
  const renderEvent = (event: IEvent) => {
    const {id, time, title} = event;
    const [startTime, endTime] = time;
    const {hours: startHour, minutes: startMinute} = parseTime(startTime);
    const {hours: endHour, minutes: endMinute} = parseTime(endTime);
    const top = startHour * 60 + startMinute;
    const height = (endHour - startHour) * 60 + (endMinute - startMinute);
    const onDetailEvent = () => navigate('Event', {eventId: id});

    return (
      <Pressable
        onPress={onDetailEvent}
        key={id}
        style={[styles.eventBlock, {top, height}]}>
        <TypoBase size="body" fontStyle="bold">
          {`${title}  ${startTime} - ${endTime}`}
        </TypoBase>
      </Pressable>
    );
  };
  const earliestEvent = useMemo(() => {
    const startTimes = events.map(({time}) => {
      const [startTime] = time;
      const [hours, minutes] = startTime.split(':');
      return Number(`${hours}${minutes}`);
    });
    const [earlyEvent] = startTimes.sort((a, b) => a - b);
    return earlyEvent;
  }, [events]);
  const {hours, minutes} = getCurrentTime();
  const topCrossBar = hours * 60 + minutes;
  const scrollRef = useRef<ScrollView | null>(null);
  useEffect(() => {
    if (scrollRef?.current && earliestEvent) {
      const hourInitial = Number(earliestEvent.toString().slice(0, 2)) ?? 1;
      scrollRef.current.scrollTo({y: hourInitial * 60, animated: true});
    }
  }, [events, earliestEvent]);
  return (
    <ScrollView
      ref={scrollRef}
      style={styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={styles.timeline}>
        {Array.from({length: 24}).map((_, i) => (
          <View key={i} style={styles.hourBlock}>
            <TypoBase>{`${i}:00`}</TypoBase>
          </View>
        ))}
        <View style={{...styles.crossLine, top: topCrossBar}} />
        {events && events.map(renderEvent)}
      </View>
    </ScrollView>
  );
};
