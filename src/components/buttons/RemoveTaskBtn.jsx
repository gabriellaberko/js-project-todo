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
`;