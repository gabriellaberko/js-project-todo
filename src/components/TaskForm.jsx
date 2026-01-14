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
        <h2>Add a new task</h2>
        <label for="name">Task name:</label>
        <StyledInput type="text" name="name" id="name" required />
        <label for="description">Task description:</label>
        <StyledTextArea name="description" id="description"/>
        <label>Task category:
          <select name="category" required>
            <option>Work</option>
            <option>Personal</option>
          </select>
        </label>
        <label>Deadline:
          <input type="date" name="deadline" />
        </label>
        <div>
          <button onClick={closeForm}>Cancel</button>
          <button type="submit">Add task</button>
        </div>
      </StyledForm>
    </StyledDialog>
  );
}

const StyledDialog = styled.dialog` 
  border: none;
  width: 70vw;
  padding: 24px 32px;
  border: 1px solid ${props => props.theme.colors.button.hoverBg};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const StyledTextArea = styled.textarea`
  width: 70%;
  height: 100px;
`;
const StyledInput = styled.input`
  width: 70%;
  margin-left: 12px;
`;