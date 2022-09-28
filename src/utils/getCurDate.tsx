export const getCurDate = (curDate: Date) => {
  const curMonth = curDate.getMonth();
  const curYear = curDate.getFullYear();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <h1>
      {month[curMonth]} {curYear}
    </h1>
  );
};