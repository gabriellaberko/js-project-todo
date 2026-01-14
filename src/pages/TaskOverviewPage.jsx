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
    <StyledWrapper>
      <StyledHeader>
        <StyledLogo src="./logo-white.png" alt="planet logotype"/>
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
  )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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
  background-color: ${props => props.theme.colors.main.ascent};
  color: ${props => props.theme.colors.main.title};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
`;