import { useTaskStore } from "../stores/taskStore";
import dayjs from "dayjs";

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
      name: formData.get("name") || "",
      description: formData.get("description") || "This is the first task.",
      createdAt: dayjs().format("YYYY-MM-DD"),
      deadline: formData.get("deadline") || "",
      category: formData.get("category") || "",
      completed: false  
    };
    addTask(newTask);
    closeForm();
  }

  return(
    <dialog ref={ref}>
      <form onSubmit={addNewTask}>
        <h2>Add a new task</h2>
        <label>Task name
          <input type="text" name="name" required />
        </label>
        <label>Task description
          <textarea name="description"/>
        </label>
        <label>Task category
          <select name="category" required>
            <option>Work</option>
            <option>Personal</option>
          </select>
        </label>
        <label>Deadline
          <input type="date" name="deadline" />
        </label>
        <button onClick={closeForm}>Cancel</button>
        <button type="submit">Add task</button>
      </form>
    </dialog>
  );
}