export const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getMonthDays = (year: number, month: number) => {
  const days = [];
  const daysInMonth = getDaysInMonth(year, month);
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i));
  }
  return days;
};

export const getWeekDays = () => {
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
};

export const areDatesEqual = (date1: Date, date2: Date) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

export const isOnSameMonth = ({
  firstDate,
  secondDate,
}: {
  firstDate: {month: number; year: number};
  secondDate: {month: number; year: number};
}) => {
  return (
    firstDate.month === secondDate.month && firstDate.year === secondDate.year
  );
};

export const adjustDateByDays = (date: Date, daysToAdjust: number) => {
  const result = date.setUTCDate(date.getUTCDate() + daysToAdjust);
  return new Date(result);
};

export const parseTime = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number);
  return {hours, minutes};
};

export const isValidTime = (time: string) => {
  const {hours, minutes} = parseTime(time);
  return (
    !isNaN(hours) &&
    hours >= 0 &&
    hours <= 23 &&
    !isNaN(minutes) &&
    minutes >= 0 &&
    minutes <= 59
  );
};
