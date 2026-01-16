import styled from "styled-components";

export const AddTaskBtn = ({ onClick }) => {
  return(
    <StyledBtn title="Add new task" onClick={onClick}></StyledBtn>
  );
}

const StyledBtn = styled.button`
  border-radius: 50%;
  width: 52px;
  height: 52px;
  background-color: ${props => props.theme.colors.button.activeBg};
  position: relative;
  color: #fff;
  border: none;
  margin-top: 24px;
  margin-bottom: 32px;

   &:hover {
    background-color: ${props => props.theme.colors.button.activeHoverBg};
    box-shadow: 0px 3px 3px ${props => props.theme.colors.button.hoverBg};
    cursor: pointer;
   }

  &::before, &::after {
    content: '';
    position: absolute;
    background-color: #fff; 
  }

  // horizontal bar
  &::before {
    width: 25px;  
    height: 4px; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  // vertical bar 
  &::after {
    width: 4px;   
    height: 25px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
