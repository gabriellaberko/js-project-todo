import { useTaskStore } from "../stores/taskStore";
import dayjs from "dayjs";
import styled from "styled-components";

export const TaskForm = ({ ref }) => {

  const { addTask } = useTaskStore();

  const closeForm = () => {
    ref.current?.close();
  }

  const addNewTask = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newTask = {
      id: crypto.randomUUID(),
      name: formData.get("name"),
      description: formData.get("description"),
      createdAt: dayjs().format("YYYY-MM-DD"),
      deadline: formData.get("deadline"),
      category: formData.get("category"),
      completed: false  
    };
    addTask(newTask);
    closeForm();
  }

  return(
    <StyledDialog ref={ref}>
      <StyledForm onSubmit={addNewTask}>
        <h3>Add a new task</h3>
        <label for="name">Task name:</label>
        <StyledInput type="text" name="name" id="name" required />
        <label for="description">Task description:</label>
        <StyledTextArea name="description" id="description"/>
        <label for="category">Task category:</label>
        <StyledSelect name="category" id="category" required>
          <option>Work</option>
          <option>Personal</option>
          <option>Shopping</option>
          <option>Finance</option>
          <option>Home</option>
          <option>Social</option>
          <option>Other</option>
        </StyledSelect>
        <label for="due-date">Deadline:</label>
        <StyledDateInput type="date" id="due-date" name="deadline" />
        <StyledButtonWrapper>
          <StyledButton onClick={closeForm}>Cancel</StyledButton>
          <StyledPrimaryButton type="submit">Add task</StyledPrimaryButton>
        </StyledButtonWrapper>
      </StyledForm>
    </StyledDialog>
  );
}

const StyledDialog = styled.dialog` 
  border: none;
  width: 60vw;
  padding: 12px 32px 24px 32px;
  border-radius: 12px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid ${props => props.theme.colors.button.border};

  @media ${(props) => props.theme.media.tablet}  {
   width: 70%;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${props => props.theme.colors.button.border};
  padding: 4px;

  @media ${(props) => props.theme.media.tablet}  {
   width: 70%;
  }
`;

const StyledDateInput = styled.input`
  width: 100%;
  border: 1px solid ${props => props.theme.colors.button.border};
  padding: 4px;
  
  @media ${(props) => props.theme.media.tablet}  {
   width: 40%;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  border: 1px solid ${props => props.theme.colors.button.border};
  padding: 4px;

  @media ${(props) => props.theme.media.tablet}  {
   width: 40%;
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 12px;
  padding: 6px 12px;
  margin-top: 28px;
`;

const StyledPrimaryButton = styled(StyledButton)`
  background-color: ${props => props.theme.colors.button.activeBg};
  color: ${props => props.theme.colors.button.text};
`;