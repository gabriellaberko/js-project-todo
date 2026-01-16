import label from "../assets/label.png";
import styled from "styled-components";

export const TaskCategory = ({ children }) => {
  return(
    <StyledWrapper>
      <StyledIcon src={label} alt="label" /> 
      <StyledParagraph>{children}</StyledParagraph>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.main.secondaryText};
  margin: 0;
`;
const StyledIcon = styled.img`
  width: auto;
  height: 18px;
  margin-right: 8px;
`;
const StyledParagraph = styled.p`
  margin: 0;
`;

