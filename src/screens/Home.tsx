import React, {FC, useEffect, useState} from 'react';
import {BaseLayout} from '../components/layout/BaseLayout';
import {Header} from '../components/header/Header';
import {viewTypes} from '../models/common';
import {Calendar} from '../components/calendar/Calendar';
import {Controls} from '../components/controls';
import {CustomModal} from '../components/modal/CustomModal';
import {useToggle} from '../hooks/useToggle';
import {CreateEventForm} from '../components/createEventForm/CreateEventFrom';
import {getData} from '../provider/storage';
import {EVENTS_KEY} from '../config/contants';
import {IEvent} from '../models/events';
export const Home: FC = () => {
  const [viewMode, setViewMode] = useState<viewTypes>('day');
  const onChangeViewMode = (value: viewTypes) => setViewMode(value);
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

  console.log(savedEvents);
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <BaseLayout>
      <Header title="Home" />
      <CustomModal visible={isOpenModal} onClose={onCloseModal}>
        <CreateEventForm
          currentEvents={savedEvents}
          selectedDate={selectedDate}
        />
      </CustomModal>
      <Controls
        onAddEvent={handlers.on}
        currentViewMode={viewMode}
        onChangeViewMode={onChangeViewMode}
      />
      <Calendar
        savedEvents={savedEvents}
        selectedDate={selectedDate}
        setSelectedDate={onSetSelectedDate}
        currentViewMode={viewMode}
        onChangeViewMode={onChangeViewMode}
      />
    </BaseLayout>
  );
};
