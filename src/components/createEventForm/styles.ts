import {StyleSheet} from 'react-native';
import {Colors} from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    backgroundColor: 'white',
    gap: 4,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  containerDate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonCreate: {
    backgroundColor: Colors.common_black,
    padding: 10,
    alignItems: 'center',
    borderRadius: 15,
  },
});
