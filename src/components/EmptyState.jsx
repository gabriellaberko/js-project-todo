import styled from "styled-components";
import confetti from "../assets/confetti-gray.png";
import moon from "../assets/man-on-the-moon.png";
import rocket from "../assets/rocket.gif";


export const EmptyTasksMessage = () => {
  return(
    <StyledWrapper>
      <p><b>Things to do? Let us help you get organized!</b><br></br>Add your first task to get started.</p>
      <StyledAnimation src={rocket} alt="Rocket animation" />
    </StyledWrapper>
  );
}

export const EmptyIncompleteTasksMessage = () => {
  return(
    <StyledWrapper>
      <p><b>Hurray, there's nothing left to do!</b><br></br>All tasks are completed.</p>
      <StyledImg src={moon} alt="confetti"/>

    </StyledWrapper>
  );
}

const StyledImg = styled.img`
  width: auto;
  height: 82px;
`;

const StyledAnimation = styled.img`
  width: auto;
  height: 100px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.colors.main.secondaryText};
  margin-bottom: 32px;
`;