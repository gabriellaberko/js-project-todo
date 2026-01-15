import styled from "styled-components";
import dayjs from "dayjs";

export const TaskDeadline = ({ deadline, children }) => {
  
  const isOverDue = dayjs().isAfter(dayjs(deadline), "day");

  return(
    <>
    <StyledParagraph $isOverDue={isOverDue}><i>Deadline: {children}</i></StyledParagraph>
    <p>{isOverDue}</p>
    </>
  );
}

const StyledParagraph = styled.p`
  color: ${props => props.$isOverDue ? "red" : "grey"};
`;