import React, {FC} from 'react';
import {Image, Pressable, View} from 'react-native';
import {TypoBase} from '../typography/TypoBase';
import {styles} from './styles';

interface IHeaderProps {
  title: string;
  leftAction?: () => void;
}

export const Header: FC<IHeaderProps> = ({title, leftAction}) => {
  return (
    <View style={styles.container}>
      {leftAction ? (
        <Pressable onPress={leftAction} style={styles.button}>
          <Image
            style={styles.icon}
            source={require('../../../assets/images/icons/back.png')}
          />
        </Pressable>
      ) : (
        <View style={styles.emptyElement} />
      )}
      <TypoBase fontStyle="bold" size="display">
        {title}
      </TypoBase>
      <View style={styles.emptyElement} />
    </View>
  );
};
