import styled from "styled-components";

export const AddTaskBtn = ({ onClick }) => {
  return(
    <StyledBtn onClick={onClick}></StyledBtn>
  );
}

const StyledBtn = styled.button`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background-color: ${props => props.theme.colors.button.activeBg};
  position: relative;
  color: #fff;
  border: none;

   &:hover {
    background-color: ${props => props.theme.colors.button.activeHoverBg};
    box-shadow: 0px 3px 3px ${props => props.theme.colors.button.hoverBg};
   }

  &::before, &::after {
    content: '';
    position: absolute;
    background-color: #fff; /* white bars */
  }

  /* horizontal bar */
  &::before {
    width: 30px;  /* length of the plus */
    height: 4px;  /* thickness */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* vertical bar */
  &::after {
    width: 4px;   /* thickness */
    height: 30px; /* length of the plus */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
