import {
  Frame,
  Grid,
  Weeks,
  Months,
  Rect,
  WeekDay,
  Info,
  FlexCenter,
} from "./style";
import daysOneYear from "../../services/daysOneYear";
import checkContributionLevel from "../../helpers/checkContributionLevel";
// import { usePopper } from "react-popper";

function Contributions() {
  const { l1, l2, l3 } = checkContributionLevel();

  const checkLevel = (contribution) => {
    switch (!!contribution) {
      case contribution < l1:
        return "rectl1";
      case contribution < l2:
        return "rectl2";
      case contribution < l3:
        return "rectl3";
      default:
        return "rectl4";
    }
  };

  return (
    <Frame>
      <Grid>
        {daysOneYear.map((day, index) => {
          return (
            <WeekDay key={index} weekDay={!index && day.weekDay}>
              {!!index && day.month !== daysOneYear[index - 1].month ? (
                <Months>{day.month}</Months>
              ) : null}
              {index < 7 &&
                day.weekDay !== "Su" &&
                day.weekDay !== "Tu" &&
                day.weekDay !== "Th" &&
                day.weekDay !== "Sa" && <Weeks>{day.weekDay}</Weeks>}

              <Rect
                brackgroundColor={
                  !!day.contributions ? checkLevel(day.contributions) : "rectl0"
                }
              ></Rect>
            </WeekDay>
          );
        })}
      </Grid>
      <Info>
        <p>Learn how to contribute</p>
        <FlexCenter>
          <p>Less</p>
          <FlexCenter>
            <Rect backgroundColor={"rectl0"}></Rect>
            <Rect backgroundColor={"rectl1"}></Rect>
            <Rect backgroundColor={"rectl2"}></Rect>
            <Rect backgroundColor={"rectl3"}></Rect>
            <Rect backgroundColor={"rectl4"}></Rect>
          </FlexCenter>
          <p>More</p>
        </FlexCenter>
      </Info>
    </Frame>
  );
}

export default Contributions;
