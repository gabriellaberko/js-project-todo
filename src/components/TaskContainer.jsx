import { useTaskStore } from "../stores/taskStore";
import { Task } from "./Task";
import { AddTaskBtn } from "../components/buttons/AddTaskBtn";
import { EmptyTasksMessage, EmptyIncompleteTasksMessage } from "./EmptyState"; 
import styled from "styled-components";

export const TaskContainer = ({ openForm }) => {

  const tasks = useTaskStore(state => state.tasks);
  const incompletedTasks = tasks?.filter(task => task.completed === false);
  const completedTasks = tasks?.filter(task => task.completed);

  return(
    <StyledDiv>
      {(!tasks || tasks.length < 1) && <EmptyTasksMessage />}
      {tasks && incompletedTasks.length > 0 && <h2>To-do</h2>}
      {tasks && tasks.length > 0 && incompletedTasks.length < 1 && <EmptyIncompleteTasksMessage />}
      {tasks && incompletedTasks.map(task => (<Task key={task.id} task={task} />))}
      {tasks && tasks.length > 0 && <AddTaskBtn onClick={openForm}/>}
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
  margin: 12px 16px 24px 16px;
`;