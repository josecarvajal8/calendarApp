import {StyleSheet} from 'react-native';
import {Colors} from '../../../config/colors';

export const styles = StyleSheet.create({
  dayCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    height: 40,
    width: 40,
  },
  todayCell: {
    borderWidth: 1,
    borderColor: Colors.common_black,
    borderRadius: 40,
  },
  dotEvent: {
    width: 4,
    height: 4,
  },
});
