import React, {FC, useState} from 'react';
import {BaseLayout} from '../components/layout/BaseLayout';
import {Header} from '../components/header/Header';
import {viewTypes} from '../models/common';
import {Calendar} from '../components/calendar/Calendar';
import {Controls} from '../components/controls';
export const Home: FC = () => {
  const [viewMode, setViewMode] = useState<viewTypes>('day');
  const onChangeViewMode = (value: viewTypes) => setViewMode(value);
  return (
    <BaseLayout>
      <Header title="Home" />
      <Controls
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
