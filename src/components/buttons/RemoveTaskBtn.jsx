import styled from "styled-components";

export const RemoveTaskBtn = ({ onClick }) => {
  return(
    <StyledButton onClick={onClick}>Remove</StyledButton>
  );
}

const StyledButton = styled.button`
  align-self: flex-end;
  border: none;
  background-color: transparent;
  color: ${props => props.theme.colors.main.secondaryText};

  &:hover {
    color: ${props => props.theme.colors.main.primaryText};
    text-decoration: underline;
    cursor: pointer;
  }
`;