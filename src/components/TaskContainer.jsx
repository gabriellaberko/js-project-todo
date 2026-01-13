import { useTaskStore } from "../stores/taskStore";
import { Task } from "./Task";
import styled from "styled-components";

export const TaskContainer = () => {

  const tasks = useTaskStore(state => state.tasks);

  return(
    <StyledDiv>
      <h2>Tasks</h2>
      {tasks && tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;