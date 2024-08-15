import React, {FC, useState} from 'react';
import {BaseLayout} from '../components/layout/BaseLayout';
import {Header} from '../components/header/Header';
import {viewTypes} from '../models/common';
import {Calendar} from '../components/calendar/Calendar';
import {Controls} from '../components/controls';
import {CustomModal} from '../components/modal/CustomModal';
import {useToggle} from '../hooks/useToggle';
import {CreateEventForm} from '../components/createEventForm/CreateEventFrom';
export const Home: FC = () => {
  const [viewMode, setViewMode] = useState<viewTypes>('day');
  const onChangeViewMode = (value: viewTypes) => setViewMode(value);
  const {state: isOpenModal, handlers} = useToggle();
  const onCloseModal = () => {
    handlers.off();
  };
  return (
    <BaseLayout>
      <Header title="Home" />
      <CustomModal visible={isOpenModal} onClose={onCloseModal}>
        <CreateEventForm />
      </CustomModal>
      <Controls
        onAddEvent={handlers.on}
        currentViewMode={viewMode}
        onChangeViewMode={onChangeViewMode}
      />
      <Calendar
        currentViewMode={viewMode}
        onChangeViewMode={onChangeViewMode}
      />
    </BaseLayout>
  );
};
