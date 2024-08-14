import React, {FC} from 'react';
import {TypoBase} from '../components/typography/TypoBase';
import {BaseLayout} from '../components/layout/BaseLayout';
import {Header} from '../components/header/Header';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export const Home: FC = () => {
  const {navigate} = useNavigation();
  return (
    <BaseLayout>
      <Header title="Home" />
      <TypoBase fontStyle="bold" size="headline">
        {'Hello'}
      </TypoBase>
      <Button title="event" onPress={() => navigate('Event')} />
    </BaseLayout>
  );
};
