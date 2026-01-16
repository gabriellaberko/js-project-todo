import { TaskContainer } from "../components/TaskContainer";
import { TaskForm } from "../components/TaskForm";
import { AddTaskBtn } from "../components/buttons/AddTaskBtn";
import { useTaskStore } from "../stores/taskStore";
import { useRef } from "react";
import { TaskSummary } from "../components/TaskSummary";
import styled from "styled-components";

export const TaskOverviewPage = () => {
  
  const tasks = useTaskStore(state => state.tasks);

  const dialogRef = useRef(null);

  const openForm = () => {
    dialogRef.current?.showModal();
  }

  return (
    <StyledOuterWrapper>
      <StyledWrapper>
        <StyledHeader>
          <StyledLogo src="./logo.png" alt="planet logotype"/>
          <h1>Planiture</h1>
        </StyledHeader>
        <StyledMain>
          {(tasks && tasks.length > 0) && <TaskSummary />}
          <TaskContainer openForm={openForm} />
          <TaskForm ref={dialogRef} />
        </StyledMain>
        {(!tasks || tasks.length < 1) &&
          <StyledFooter>
            <AddTaskBtn onClick={openForm}/>
          </StyledFooter>
        }
      </StyledWrapper>
    </StyledOuterWrapper>
  )
}

const StyledOuterWrapper = styled.div`
  @media ${props => props.theme.media.tablet}  {
    display: flex;
    justify-content: center;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 700px;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLogo = styled.img`
  height: 28px;
  width: auto;
`;

const StyledHeader = styled.header`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.main.ascent};
  border-bottom: 1px solid #E2E8F0;
`;