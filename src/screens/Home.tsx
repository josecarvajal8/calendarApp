import React, {FC} from 'react';
import {TypoBase} from '../components/typography/TypoBase';
import {BaseLayout} from '../components/layout/BaseLayout';
import {Header} from '../components/header/Header';
export const Home: FC = () => {
  return (
    <BaseLayout>
      <Header title="Home" />
      <TypoBase fontStyle="bold" size="headline">
        {'Hello'}
      </TypoBase>
    </BaseLayout>
  );
};
