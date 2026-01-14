import tag from "../assets/tag.png";
import styled from "styled-components";

export const TaskCategory = ({ children }) => {
  return(
    <StyledWrapper>
      <StyledIcon src={tag} alt="tag" /> 
      <p>{children}</p>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.main.secondaryText}
`;
const StyledIcon = styled.img`
  width: auto;
  height: 24px;
`;