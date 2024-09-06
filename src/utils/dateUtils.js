import { addDays, addWeeks, addMonths, addYears, format } from 'date-fns';

export const calculateRecurringDates = (startDate, endDate, pattern, frequency) => {
  let currentDate = new Date(startDate);
  const dates = [];

  while (currentDate <= new Date(endDate)) {
    dates.push(format(currentDate, 'yyyy-MM-dd'));
    switch (pattern) {
      case 'daily':
        currentDate = addDays(currentDate, frequency);
        break;
      case 'weekly':
        currentDate = addWeeks(currentDate, frequency);
        break;
      case 'monthly':
        currentDate = addMonths(currentDate, frequency);
        break;
      case 'yearly':
        currentDate = addYears(currentDate, frequency);
        break;
      default:
        break;
    }
  }

  return dates;
};
