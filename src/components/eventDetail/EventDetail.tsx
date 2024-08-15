import React, {FC} from 'react';
import {IEvent} from '../../models/events';
import {Pressable, View} from 'react-native';
import {TypoBase} from '../typography/TypoBase';
import {styles} from './styles';
import {LABEL_MONTHS} from '../../config/contants';
import {Colors} from '../../config/colors';
interface IEventDetailProps {
  data: Omit<IEvent, 'id'>;
  onDelete: () => void;
}
export const EventDetail: FC<IEventDetailProps> = ({data, onDelete}) => {
  const {date, time, title, description} = data;
  const [start, end] = time;
  return (
    <View style={styles.container}>
      <TypoBase size="headline" fontStyle="semibold">
        {`${title} - ${
          LABEL_MONTHS[date.getMonth()]
        } ${date.getDate()} ${date.getFullYear()}`}
      </TypoBase>
      <TypoBase size="title" fontStyle="semibold">
        {`Time: ${start} to ${end}`}
      </TypoBase>
      {description && (
        <TypoBase size="title" fontStyle="regular">
          {description}
        </TypoBase>
      )}
      <Pressable onPress={onDelete} style={styles.removeButton}>
        <TypoBase
          size="title"
          fontStyle="semibold"
          style={{color: Colors.common_white}}>
          {'Delete'}
        </TypoBase>
      </Pressable>
    </View>
  );
};
