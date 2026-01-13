import { TaskContainer } from "./components/TaskContainer";
import { TaskForm } from "./components/TaskForm";
import { AddTaskBtn } from "./components/AddTaskBtn";
import { useRef } from "react";

export const App = () => {
  
  const dialogRef = useRef(null);

  const openForm = () => {
    dialogRef.current?.showModal();
  }

  return (
    <>
      <h1>To-do App</h1>
      <TaskContainer />
      <TaskForm ref={dialogRef} />
      <AddTaskBtn onClick={openForm}/>
    </>
  )
}
