import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerControlsCalendar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  imageButton: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  textButton: {
    borderBottomWidth: 1,
  },
});
