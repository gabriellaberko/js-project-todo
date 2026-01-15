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
      <StyledInnerWrapper>
        <StatsWrapper>
          <StatsRow>
            <Stat>
              <StatValue>{incompletedTasks.length}</StatValue>
              <StatLabel>Tasks to do</StatLabel>
            </Stat>
            <Stat>
              <StatValue>{completedTasks.length} / {tasks.length}</StatValue>
              <StatLabel>Tasks completed</StatLabel>
            </Stat>
          </StatsRow>
        </StatsWrapper>
        <div>
          <ChartTitle>Task category distribution</ChartTitle>
          <Chart />
        </div>
      </StyledInnerWrapper>
    </StyledOuterWrapper>
  );
}

const StyledOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFFFFF;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  margin: 24px 0;
  gap: 24px;
`;

const StyledInnerWrapper = styled.div`
  display:flex;
  flex-direction: column;
  gap: 24px;

  @media ${(props) => props.theme.media.tablet}  {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 80vw;
  }
`;

const StatsWrapper = styled.div`
  gap: 32px;
  text-align: center;
`;


const Stat = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #1E293B;
`;

const StatLabel = styled.div`
  font-size: 13px;
  color: #64748B;
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 24px;

  @media ${(props) => props.theme.media.tablet}  {
    display: flex;
    flex-direction: column;
    gap: 42px;
  }
`;

const ChartTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: center;
`;

