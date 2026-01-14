import { TaskStatusBtn } from "./buttons/TaskStatusBtn";
import { RemoveTaskBtn } from "./buttons/RemoveTaskBtn";
import { useTaskStore } from "../stores/taskStore";
import styled from "styled-components";

export const Task = ({ task }) => {
  
  const updateCompletionStatus = useTaskStore(state => state.updateCompletionStatus);
  const removeTask = useTaskStore(state => state.removeTask);
  // const id = task.id;
  // const completed = useTaskStore(state => state.tasks.find(task => task.id === id)?.completed);
  
  return(
    <StyledDiv>
      <div>
        <h4>{task.name}</h4>
        {task.description && <p>{task.description}</p>}
        <p>Category: {task.category}</p>
        {task.deadline && <p>Deadline: {task.deadline}</p>}
        <RemoveTaskBtn onClick={() => removeTask(task.id)} />
      </div>
      <TaskStatusBtn onClick={() => updateCompletionStatus(task.id, task.completed)} completed={task.completed}/>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  margin: 0 16px;
  padding: 12px 24px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;