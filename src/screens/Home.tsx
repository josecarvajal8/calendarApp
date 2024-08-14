import React, {FC, useState} from 'react';
import {TypoBase} from '../components/typography/TypoBase';
import {BaseLayout} from '../components/layout/BaseLayout';
import {Header} from '../components/header/Header';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Controls} from '../components/controls/Controls';
import {viewTypes} from '../models/common';
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
      <TypoBase fontStyle="bold" size="headline">
        {'Hello'}
      </TypoBase>
      <Button title="event" onPress={() => navigate('Event')} />
    </BaseLayout>
  );
};
