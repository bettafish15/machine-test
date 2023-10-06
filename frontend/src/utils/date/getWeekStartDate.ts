export const getWeekStartDate = (date: Date) => {
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const dayNumber = date.getDate();
  const dayNumberInWeek = date.getDay();

  const difference = 0 - dayNumberInWeek;
  return new Date(year, monthIndex, dayNumber + difference);
};
