import React, {FC} from 'react';
import {TypoBase} from '../components/typography/TypoBase';
import {BaseLayout} from '../components/layout/BaseLayout';
import {Header} from '../components/header/Header';
import {useNavigation} from '@react-navigation/native';
export const Event: FC = () => {
  const {goBack} = useNavigation();
  return (
    <BaseLayout>
      <Header title="Event" leftAction={goBack} />
      <TypoBase fontStyle="bold" size="headline">
        {'Event'}
      </TypoBase>
    </BaseLayout>
  );
};
