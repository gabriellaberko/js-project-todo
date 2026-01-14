import { TaskStatusBtn } from "./buttons/TaskStatusBtn";
import { RemoveTaskBtn } from "./buttons/RemoveTaskBtn";
import { useTaskStore } from "../stores/taskStore";
import { TaskCategory } from "./TaskCategory";
import styled from "styled-components";

export const Task = ({ task }) => {
  
  const updateCompletionStatus = useTaskStore(state => state.updateCompletionStatus);
  const removeTask = useTaskStore(state => state.removeTask);
  
  return(
    <StyledDiv>
      <StyledOuterWrapper>
           <RemoveTaskBtn onClick={() => removeTask(task.id)} />
        <StyledInnerWrapper>
          <div>
            <h4>{task.name}</h4>
            {task.description && <p>{task.description}</p>}
            {task.deadline && <p><i>Deadline: {task.deadline}</i></p>}
            {task.category && <TaskCategory>{task.category}</TaskCategory>
            }
          </div>
          <TaskStatusBtn onClick={() => updateCompletionStatus(task.id, task.completed)} completed={task.completed}/>
        </StyledInnerWrapper>
      </StyledOuterWrapper>
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

const StyledOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTaskHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;