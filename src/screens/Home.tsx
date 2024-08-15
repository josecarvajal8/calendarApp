import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {BaseLayout} from '../components/layout/BaseLayout';
import {Header} from '../components/header/Header';
import {viewTypes} from '../models/common';
import {Calendar} from '../components/calendar/Calendar';
import {Controls} from '../components/controls';
import {CustomModal} from '../components/modal/CustomModal';
import {useToggle} from '../hooks/useToggle';
import {CreateEventForm} from '../components/createEventForm/CreateEventFrom';
import {getData} from '../provider/storage';
import {EVENTS_KEY} from '../config/constants';
import {IEvent} from '../models/events';
import {useFocusEffect} from '@react-navigation/native';
import {Animated} from 'react-native';
export const Home: FC = () => {
  const [viewMode, setViewMode] = useState<viewTypes>('day');
  const onChangeViewMode = (value: viewTypes) => {
    fadeOut(() => setViewMode(value));
  };
  const {state: isOpenModal, handlers} = useToggle();
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [savedEvents, setSavedEvents] = useState<IEvent[]>([]);
  const onSetSelectedDate = (value: Date) => {
    setSelectedDate(value);
  };
  const onCloseModal = () => {
    handlers.off();
  };
  const getEvents = async () => {
    const result = await getData(EVENTS_KEY);
    if (result) {
      const events = JSON.parse(result) as IEvent[];
      setSavedEvents(
        events.map(event => ({...event, date: new Date(event.date)})),
      );
    }
  };

  const onRefetch = async () => {
    onCloseModal();
    await getEvents();
  };

  useEffect(() => {
    getEvents();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getEvents();
    }, []),
  );

  const opacity = useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = (callback: () => void) => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      fadeIn();
      callback();
    });
  };
  return (
    <BaseLayout>
      <Header title="Home" />
      <CustomModal visible={isOpenModal} onClose={onCloseModal}>
        <CreateEventForm
          refetch={onRefetch}
          currentEvents={savedEvents}
          selectedDate={selectedDate}
        />
      </CustomModal>
      <Controls
        onAddEvent={handlers.on}
        currentViewMode={viewMode}
        onChangeViewMode={onChangeViewMode}
      />
      <Animated.View style={{flex: 1, opacity}}>
        <Calendar
          savedEvents={savedEvents}
          selectedDate={selectedDate}
          setSelectedDate={onSetSelectedDate}
          currentViewMode={viewMode}
          onChangeViewMode={onChangeViewMode}
        />
      </Animated.View>
    </BaseLayout>
  );
};
