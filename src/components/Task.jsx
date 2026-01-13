import { TaskStatusBtn } from "./TaskStatusBtn";
import { useTaskStore } from "../stores/taskStore";

export const Task = ({ task }) => {
  
  const updateStatus = useTaskStore(state => state.updateCompletionStatus);
  const id = task.id;
  const completed = useTaskStore(state => state.tasks.find(task => task.id === id)?.completed);
  
  return(
    <div>
      <h3>{task.name}</h3>
      {task.description && <p>{task.description}</p>}
      <p>{completed ? "Completed" : "Not completed"}</p>
      <p>Category: {task.category}</p>
      {task.deadline && <p>Deadline: {task.deadline}</p>}
      <TaskStatusBtn onClick={() => updateStatus(task.id, task.completed)}/>
    </div>
  );
}