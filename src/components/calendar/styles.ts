import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  animatedContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  weekDayText: {
    fontWeight: 'bold',
  },
  dayText: {
    fontSize: 16,
  },
  dayView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
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
