import * as dayjs from "dayjs";
import style from "./style.module.css";

function Contributions() {
  let day = dayjs().subtract(1, "year").add(1, "day");
  let daysOneYear = [
    {
      day: dayjs().subtract(1, "year").format("DD"),
      month: dayjs().subtract(1, "year").format("MM"),
      year: dayjs().subtract(1, "year").format("YYYY"),
      weekDay: dayjs().subtract(1, "year").format("dd"),

    },
  ];

  while (day.format("DD-MM") !== dayjs().format("DD-MM")) {
    daysOneYear = [
      ...daysOneYear,
      {
        day: day.format("DD"),
        month: day.format("MM"),
        year: day.format("YYYY"),
        weekDay: day.format("dd"),
      },
    ];

    day = day.add(1, "day");
  }

  daysOneYear = [
    ...daysOneYear,
    {
      day: dayjs().format("DD"),
      month: dayjs().format("MM"),
      year: dayjs().format("YYYY"),
      weekDay: dayjs().format("dd"),
    },
  ];

  return (
    <div className={style.frame}>
      <div className={style.months}>
        <p>{dayjs().format("MMM")}</p>
        <p>{dayjs().add(1, "month").format("MMM")}</p>
        <p>{dayjs().add(2, "month").format("MMM")}</p>
        <p>{dayjs().add(3, "month").format("MMM")}</p>
        <p>{dayjs().add(4, "month").format("MMM")}</p>
        <p>{dayjs().add(5, "month").format("MMM")}</p>
        <p>{dayjs().add(6, "month").format("MMM")}</p>
        <p>{dayjs().add(7, "month").format("MMM")}</p>
        <p>{dayjs().add(8, "month").format("MMM")}</p>
        <p>{dayjs().add(9, "month").format("MMM")}</p>
        <p>{dayjs().add(10, "month").format("MMM")}</p>
        <p>{dayjs().add(11, "month").format("MMM")}</p>
        <p>{dayjs().add(12, "month").format("MMM")}</p>

      </div>
      <div className={style.weeks}>
        <p>Sun</p>
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Thu</p>
        <p>Fri</p>
        <p>Sat</p>
      </div>
      <div className={style.board}>
        {daysOneYear.map((dia, index) => {
          return (
              <div
                key={index}
                className={index === 0 ? style[`weekDay${dia.weekDay}`] : null}
              ><div className={style.rect}></div></div>
          );
        })}
      </div>
    </div>
  );
}

export default Contributions;
