import { TaskStatusBtn } from "./buttons/TaskStatusBtn";
import { RemoveTaskBtn } from "./buttons/RemoveTaskBtn";
import { useTaskStore } from "../stores/taskStore";
import { TaskCategory } from "./TaskCategory";
import { TaskDeadline } from "./TaskDeadline";
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
            <h3>{task.name}</h3>
            {task.description && <p>{task.description}</p>}
            {task.deadline && <TaskDeadline deadline={task.deadline}>{task.deadline}</TaskDeadline>}
            {task.category && <TaskCategory>{task.category}</TaskCategory>}
          </div>
          <TaskStatusBtn onClick={() => updateCompletionStatus(task.id, task.completed)} completed={task.completed}/>
        </StyledInnerWrapper>
      </StyledOuterWrapper>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  padding: 12px 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 40vw;
  border-radius: 12px;
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
  gap: 12px;
`;

const StyledParagraph = styled.p`
  color: ${props => props.$IsOverDue ? "red" : "grey"};
`;