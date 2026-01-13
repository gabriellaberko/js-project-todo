import styled from "styled-components";

export const TaskStatusBtn = ({ onClick, completed }) => {
  return(
    <StyledBtn onClick={onClick} completed={completed}></StyledBtn>
  );
}

const StyledBtn = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: ${props => (props.completed 
    ? props => props.theme.colors.button.activeBg
    : props => props.theme.colors.button.bg
  )};
  border: ${props => (props.completed 
      ? "none"
      : `2px solid ${props.theme.colors.button.hoverBg}`
  )};
  position: relative;
  color: #fff;

   &:hover {
    background-color: ${props => (props.completed 
      ? props => props.theme.colors.button.activeHoverBg
      : props => props.theme.colors.button.hoverBg
    )};
    box-shadow: 0px 3px 3px ${props => props.theme.colors.button.hoverBg};
   }

  // Add checkmark, only visible when the prop 'completed' is true
  &::after {
    content: '';
    position: absolute;
    top: 48%;
    left: 50%;
    width: 8px;
    height: 14px;
    border: solid white;
    border-width: 0 4px 4px 0;
    transform: translate(-50%, -50%) rotate(45deg);
    opacity: ${({ completed }) => (completed ? 1 : 0)};
    transition: opacity 0.2s, transform 0.2s;
  }
`;
