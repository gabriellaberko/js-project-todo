import styled from "styled-components";

export const RemoveTaskBtn = ({ onClick }) => {
  return(
    <StyledButton onClick={onClick}>
      <StyledIcon aria-hidden="true" viewBox="0 0 24 24">
        <path d="M6 6l12 12M18 6l-12 12" />
      </StyledIcon>
      <StyledSpan>Remove task</StyledSpan>    
    </StyledButton>
  );
}

const StyledSpan = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const StyledButton = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  border: none;

  width: 40px;
  height: 40px;

  border-radius: 8px;
  cursor: pointer;

  color: #64748B;

  &:hover {
    background: #FEE2E2;
    color: #EF4444;
  }

  &:focus-visible {
    outline: 2px solid #4DA3FF;
    outline-offset: 2px;
  }
`;

const StyledIcon = styled.svg`
  width: 22px;
  height: 22px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
`;