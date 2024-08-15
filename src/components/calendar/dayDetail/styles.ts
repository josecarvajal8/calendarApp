import {StyleSheet} from 'react-native';
import {Colors} from '../../../config/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  timeline: {
    position: 'relative',
    width: '100%',
  },
  hourBlock: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  eventBlock: {
    position: 'absolute',
    width: '80%',
    minHeight: 25,
    right: 0,
    paddingHorizontal: 10,
    backgroundColor: Colors.disabled,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
  crossLine: {
    width: '100%',
    borderWidth: 1,
    position: 'absolute',
    borderColor: Colors.error,
    zIndex: 10,
  },
});
