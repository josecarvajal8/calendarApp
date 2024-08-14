import React, {FC, useState} from 'react';
import {BaseLayout} from '../components/layout/BaseLayout';
import {Header} from '../components/header/Header';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {viewTypes} from '../models/common';
import {Calendar} from '../components/calendar/Calendar';
import {Controls} from '../components/controls';
export const Home: FC = () => {
  const {navigate} = useNavigation();
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
      <Button title="event" onPress={() => navigate('Event')} />
    </BaseLayout>
  );
};
