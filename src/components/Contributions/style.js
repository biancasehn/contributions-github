import styled from "styled-components";

const colors = {
  rectBorder: "1px solid rgba(27, 31, 35, 0.06)",
  rectl0: "#ebedf0",
  rectl1: "#9be9a8",
  rectl2: "#40c463",
  rectl3: "#30a14e",
  rectl4: "#216e39",
};

export const Frame = styled.div`
  padding: 1.2em;
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const Grid = styled.div`
  display: grid;
  grid-template: [Su] 1fr [Mo] 1fr [Tu] 1fr [We] 1fr [Th] 1fr [Fr] 1fr [Sa] 1fr / repeat(
      53,
      10px
    );
  grid-auto-flow: column;
  gap: 0.4em;
`;

export const Weeks = styled.div`
  font-size: 0.6em;
  position: absolute;
  left: 0;
`;

export const Months = styled.div`
  font-size: 0.6em;
  position: absolute;
  top: 0;
`;
export const Rect = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10%;
  /* border: ${colors.rectBorder}; */
  border: 1px solid black; /* TO DO */
  background-color: ${(props) => colors[props.backgroundColor]};
`;

export const WeekDay = styled.div`
  grid-row-start: ${props => props.weekDay};
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8em;
`;

export const FlexCenter = styled.div`
  gap: 0.2em;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
