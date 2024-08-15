import {StyleSheet} from 'react-native';
import {Colors} from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 8,
  },
  removeButton: {
    backgroundColor: Colors.common_black,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 15,
  },
});
