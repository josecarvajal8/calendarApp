import {StyleSheet} from 'react-native';
import {Colors} from '../../../config/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filters: {
    flexDirection: 'row',
    gap: 16,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  roundedButton: {
    width: 40,
    height: 40,
    borderRadius: 40,
    padding: 4,
    borderWidth: 1,
    borderColor: Colors.common_black,
    backgroundColor: Colors.common_white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillButton: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.common_black,
    backgroundColor: Colors.common_white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
