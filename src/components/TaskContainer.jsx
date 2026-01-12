import { useTaskStore } from "../stores/taskStore";
import { Task } from "./Task";

export const TaskContainer = () => {
  const { tasks } = useTaskStore();
  
  return(
    <div>
      <h2>Tasks</h2>
      {tasks && tasks.map((task, index) => (
        <Task key={index} name={task.name} description={task.description}/>
      ))}
    </div>
  );
}