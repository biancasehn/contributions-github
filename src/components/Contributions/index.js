import * as dayjs from "dayjs";
import style from "./style.module.css";

function Contributions() {
  let day = dayjs().subtract(1, "year").add(1, "day");
  let daysOneYear = [
    {
      day: dayjs().subtract(1, "year").format("DD"),
      month: dayjs().subtract(1, "year").format("MMM"),
      year: dayjs().subtract(1, "year").format("YYYY"),
      weekDay: dayjs().subtract(1, "year").format("dd"),
      contributions: Math.random() * 20
    },
  ];

  while (day.format("DD-MM") !== dayjs().format("DD-MM")) {
    daysOneYear = [
      ...daysOneYear,
      {
        day: day.format("DD"),
        month: day.format("MMM"),
        year: day.format("YYYY"),
        weekDay: day.format("dd"),
        contributions: Math.random() * 20
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
      contributions: Math.random() * 20
    },
  ];

  return (
    <div className={style.frame}>
      <div className={style.board}>
        {daysOneYear.map((dia, index) => {
          return (
              <div
                key={index}
                className={index === 0 ? style[`weekDay${dia.weekDay}`] : null}
                >
                {index !== 0 && dia.month !== daysOneYear[index - 1].month ? <div className={style.months}>{dia.month}</div> : null}
                {index < 7 && <div className={style.weeks}>{dia.weekDay}</div>}
                <div className={style.rect}></div>
              </div>
          );
        })}
      </div>
    </div>
  );
}

export default Contributions;
