import React, {FC} from 'react';
import {TypoBase} from '../components/typography/TypoBase';
export const Home: FC = () => {
  return (
    <>
      <TypoBase fontStyle="bold" size="display">
        {'Hello'}
      </TypoBase>
    </>
  );
};
