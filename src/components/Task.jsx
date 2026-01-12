import { TaskStatusBtn } from "./TaskStatusBtn";

export const Task = ({ name, description }) => {
  return(
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <TaskStatusBtn />
    </div>
  );
}