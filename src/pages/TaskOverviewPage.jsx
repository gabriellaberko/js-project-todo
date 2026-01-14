import { TaskContainer } from "../components/TaskContainer";
import { TaskForm } from "../components/TaskForm";
import { AddTaskBtn } from "../components/buttons/AddTaskBtn";
import { useRef } from "react";
import styled from "styled-components";

export const TaskOverviewPage = () => {
  
  const dialogRef = useRef(null);

  const openForm = () => {
    dialogRef.current?.showModal();
  }

  return (
    <StyledWrapper>
      <StyledMain>
          <h1>Planiture</h1>
          <TaskContainer />
          <TaskForm ref={dialogRef} />
      </StyledMain>
      <StyledFooter>
        <AddTaskBtn onClick={openForm}/>
      </StyledFooter>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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