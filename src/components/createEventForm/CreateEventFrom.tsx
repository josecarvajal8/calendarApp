import React, {FC, useState} from 'react';
import {Alert, Pressable, TextInput, View} from 'react-native';
import {TypoBase} from '../typography/TypoBase';
import {styles} from './styles';
import {EVENTS_KEY, LABEL_MONTHS} from '../../config/constants';
import {isValidTime, parseTime} from '../../utils/utilities';
import {IEvent} from '../../models/events';
import uuid from 'react-native-uuid';
import {storeData} from '../../provider/storage';
import {Colors} from '../../config/colors';

interface ICreateEventForm {
  selectedDate: Date;
  currentEvents: IEvent[];
  refetch: () => void;
}
export const CreateEventForm: FC<ICreateEventForm> = ({
  selectedDate,
  currentEvents,
  refetch,
}) => {
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const formatTime = (input: string) => {
    const digits = input.replace(/\D/g, '');

    if (digits.length <= 2) {
      return digits;
    } else if (digits.length <= 4) {
      return `${digits.slice(0, 2)}:${digits.slice(2)}`;
    } else {
      return `${digits.slice(0, 2)}:${digits.slice(2, 4)}`;
    }
  };

  const handleStartChange = (value: string, type: 'start' | 'end') => {
    const formattedTime = formatTime(value);
    if (type === 'start') {
      setStartTime(formattedTime);
    } else {
      setEndTime(formattedTime);
    }
  };

  const validateTimes = () => {
    if (!isValidTime(startTime) || !isValidTime(endTime)) {
      Alert.alert('Validation Error', 'Both times must be valid (HH:MM).');
      return false;
    }

    const {hours: startHours, minutes: startMinutes} = parseTime(startTime);
    const {hours: endHours, minutes: endMinutes} = parseTime(endTime);

    const startInMinutes = startHours * 60 + startMinutes;
    const endInMinutes = endHours * 60 + endMinutes;

    if (endInMinutes < startInMinutes) {
      Alert.alert('Validation Error', 'End time cannot be before start time.');
      return false;
    }
    return true;
  };

  const validateTitle = () => {
    if (title.length > 0) {
      return true;
    }
    Alert.alert('Validation Error', 'You have to add a title');
    return false;
  };

  const handleSubmit = async () => {
    if (validateTitle() && validateTimes()) {
      const newEventId = uuid.v4();
      const newEvents = [
        ...currentEvents,
        {
          id: newEventId,
          description,
          date: selectedDate,
          title,
          time: [startTime, endTime],
        },
      ];
      await storeData(EVENTS_KEY, JSON.stringify(newEvents));
      await refetch();
    }
  };

  return (
    <View style={styles.container}>
      <TypoBase fontStyle="bold" size="title">
        {'Event Date: '}
        <TypoBase fontStyle="semibold">{`${
          LABEL_MONTHS[selectedDate.getMonth()]
        } ${selectedDate.getDate()} ${selectedDate.getFullYear()}`}</TypoBase>
      </TypoBase>
      <TypoBase fontStyle="bold">{'Title'}</TypoBase>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle}
      />
      <TypoBase fontStyle="bold">{'Description'}</TypoBase>
      <TextInput
        style={styles.input}
        placeholder="Enter description (optional)"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TypoBase fontStyle="bold">{'Start'}</TypoBase>
      <TextInput
        style={styles.input}
        placeholder="00:00"
        value={startTime}
        keyboardType="number-pad"
        onChangeText={value => handleStartChange(value, 'start')}
      />

      <TypoBase fontStyle="bold">{'End'}</TypoBase>
      <TextInput
        style={styles.input}
        placeholder="00:00"
        value={endTime}
        keyboardType="number-pad"
        onChangeText={value => handleStartChange(value, 'end')}
      />
      {/* <Button title="Submit" onPress={handleSubmit} /> */}
      <Pressable style={styles.buttonCreate} onPress={handleSubmit}>
        <TypoBase
          size="body"
          fontStyle="bold"
          style={{color: Colors.common_white}}>
          {'Create'}
        </TypoBase>
      </Pressable>
    </View>
  );
};
