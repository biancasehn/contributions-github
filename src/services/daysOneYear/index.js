import * as dayjs from "dayjs";

let day = dayjs().subtract(1, "year").add(1, "day");
let daysOneYear = [
  {
    day: dayjs().subtract(1, "year").format("DD"),
    month: dayjs().subtract(1, "year").format("MMM"),
    year: dayjs().subtract(1, "year").format("YYYY"),
    weekDay: dayjs().subtract(1, "year").format("dd"),
    contributions: Math.floor(Math.random() * 50),
  },
];
while (day.format("DD-MM-YYYY") !== dayjs().format("DD-MM-YYYY")) {
  daysOneYear = [
    ...daysOneYear,
    {
      day: day.format("DD"),
      month: day.format("MMM"),
      year: day.format("YYYY"),
      weekDay: day.format("dd"),
      contributions: Math.floor(Math.random() * 50),
    },
  ];
  day = day.add(1, "day");
}

daysOneYear = [
  ...daysOneYear,
  {
    day: dayjs().format("DD"),
    month: dayjs().format("MMM"),
    year: dayjs().format("YYYY"),
    weekDay: dayjs().format("dd"),
    contributions: Math.floor(Math.random() * 50),
  },
];

export default daysOneYear;
