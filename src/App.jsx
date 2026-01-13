import { TaskContainer } from "./components/TaskContainer";
import { TaskForm } from "./components/TaskForm";
import { AddTaskBtn } from "./components/AddTaskBtn";
import { useRef } from "react";
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme.styled';
import { GlobalStyle } from './styles/GlobalStyles';

export const App = () => {
  
  const dialogRef = useRef(null);

  const openForm = () => {
    dialogRef.current?.showModal();
  }

  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <h1>To-do App</h1>
        <TaskContainer />
        <TaskForm ref={dialogRef} />
        <AddTaskBtn onClick={openForm}/>
      </ThemeProvider>
    </>
  )
}
