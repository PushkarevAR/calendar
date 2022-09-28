export const getCurDate = (curMonth: number, curYear: number) => {
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