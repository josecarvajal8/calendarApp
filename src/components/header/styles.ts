import {StyleSheet} from 'react-native';
import {fonts} from '../../config/contants';
import {Colors} from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  emptyElement: {
    height: 48,
    width: 48,
  },
  button: {
    height: 48,
    width: 48,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.common_white,
    elevation: 5,
    shadowColor: Colors.common_black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  textButton: {
    color: Colors.text,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: fonts.bold,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
