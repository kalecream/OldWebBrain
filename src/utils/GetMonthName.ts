export const GetMonthName = (dateString) => {
  const months = [
    "January ",
    "February ",
    "March ",
    "April ",
    "May ",
    "June ",
    "July ",
    "August ",
    "September ",
    "October ",
    "November ",
    "December ",
  ];

  const dateParts = dateString.split("-");
  const monthIndex = parseInt(dateParts[1], 10) - 1;

  if (monthIndex >= 0 && monthIndex < months.length) {
    return months[monthIndex];
  } else {
    return null;
  }
};
