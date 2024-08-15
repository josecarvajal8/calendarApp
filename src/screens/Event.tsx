import React, {FC, useEffect, useState} from 'react';
import {BaseLayout} from '../components/layout/BaseLayout';
import {Header} from '../components/header/Header';
import {useNavigation} from '@react-navigation/native';
import {IEvent} from '../models/events';
import {getData, storeData} from '../provider/storage';
import {EVENTS_KEY} from '../config/constants';
import {EventDetail} from '../components/eventDetail/EventDetail';
import {Alert} from 'react-native';
interface IEventProps {
  route: {
    params: {eventId: string};
  };
}

export const Event: FC<IEventProps> = ({route}) => {
  const {goBack} = useNavigation();
  const {eventId} = route.params;
  const [eventDetail, setEventDetail] = useState<IEvent | null>(null);
  const getEventDetail = async () => {
    const result = await getData(EVENTS_KEY);
    if (result) {
      const events = JSON.parse(result) as IEvent[];
      const event = events.find(el => el.id === eventId);
      setEventDetail(event as IEvent);
    }
  };
  useEffect(() => {
    getEventDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onDeleteEvent = async () => {
    const result = await getData(EVENTS_KEY);
    if (result) {
      const events = JSON.parse(result) as IEvent[];
      const eventsFiltered = events.filter(el => el.id !== eventId);
      await storeData(EVENTS_KEY, JSON.stringify(eventsFiltered));
      goBack();
      Alert.alert('Event deleted');
    }
  };
  return (
    <BaseLayout>
      <Header title="Event" leftAction={goBack} />
      {eventDetail && (
        <EventDetail
          data={{
            time: eventDetail.time,
            title: eventDetail.title,
            description: eventDetail.description,
            date: new Date(eventDetail.date),
          }}
          onDelete={onDeleteEvent}
        />
      )}
    </BaseLayout>
  );
};
