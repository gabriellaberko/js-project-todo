import { useTaskStore } from "../stores/taskStore";
import { Task } from "./Task";
import { EmptyTasksMessage, EmptyIncompleteTasksMessage } from "./EmptyState"; 
import styled from "styled-components";

export const TaskContainer = () => {

  const tasks = useTaskStore(state => state.tasks);
  const incompletedTasks = tasks?.filter(task => task.completed === false);
  const completedTasks = tasks?.filter(task => task.completed);

  return(
    <StyledDiv>
      {(!tasks || tasks.length < 1) && <EmptyTasksMessage />}

      {tasks && tasks.length > 0 && <h2>To-do list</h2>}
      {tasks && tasks.length > 0 && incompletedTasks.length < 1 && <EmptyIncompleteTasksMessage />}
      {tasks && incompletedTasks.map(task => (<Task key={task.id} task={task} />))}
      {completedTasks && completedTasks.length > 0 && <h3>Completed tasks</h3>}
      {completedTasks.map(task => (<Task key={task.id} task={task} />))}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;