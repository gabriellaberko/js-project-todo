import { useTaskStore } from "../stores/taskStore";
import { Chart } from "./Chart";
import styled from "styled-components";

export const TaskSummary = () => {

  const tasks = useTaskStore(state => state.tasks);
  const incompletedTasks = tasks?.filter(task => task.completed === false);
  const completedTasks = tasks?.filter(task => task.completed);

  return(
    <StyledOuterWrapper>
      <h2>Task summary</h2>
      <StyledStatsWrapper>
        <div>
          <p>
            <b>{incompletedTasks.length}</b>
            <br></br>
            <br></br>
            Tasks to complete
          </p>
        </div>
        <div>
          <p>
            <b>{completedTasks.length} / {tasks.length}</b>
            <br></br>
            <br></br>
            Tasks completed
          </p>
        </div>
      </StyledStatsWrapper>
      <p><b>Tasks per category</b></p>
      <Chart />
    </StyledOuterWrapper>
  );
}

const StyledOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  margin: 24px 0;
  gap: 12px;
`;

const StyledStatsWrapper = styled.div`
  display: flex;
  gap: 32px;
  text-align: center;
`;

const StyledSingleStatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
