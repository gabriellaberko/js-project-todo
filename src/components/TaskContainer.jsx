import { useTaskStore } from "../stores/taskStore";
import { Task } from "./Task";

export const TaskContainer = () => {
  
  const tasks = useTaskStore(state => state.tasks);

  return(
    <div>
      <h2>Tasks</h2>
      {tasks && tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}