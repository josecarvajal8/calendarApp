import React, {FC, useEffect, useRef} from 'react';
import {View, ScrollView} from 'react-native';
import {IEvent} from '../../../models/events';
import {styles} from './styles';
import {TypoBase} from '../../typography/TypoBase';

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
  const renderEvent = (event: IEvent) => {
    const {id, time, title} = event;
    const [startTime, endTime] = time;
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);
    const top = startHour * 60 + startMinute;
    const height = (endHour - startHour) * 60 + (endMinute - startMinute);

    return (
      <View key={id} style={[styles.eventBlock, {top, height}]}>
        <TypoBase size="body" fontStyle="bold">
          {`${title}  ${startTime} - ${endTime}`}
        </TypoBase>
      </View>
    );
  };
  const {hours, minutes} = getCurrentTime();
  const topCrossBar = hours * 60 + minutes;
  const scrollRef = useRef<ScrollView | null>(null);
  useEffect(() => {
    if (scrollRef?.current) {
      scrollRef.current.scrollTo({y: hours * 60, animated: true});
    }
  }, [events, hours]);
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
