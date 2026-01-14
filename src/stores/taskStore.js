import { create } from "zustand";
import { persist } from "zustand/middleware"; //to save tasks in localStorage

export const useTaskStore = create(persist((set) => ({
  tasks: [],
  addTask: (task) => set(state => ({ tasks: [...state.tasks, task] })),
  removeTask: (id ) => set(state => ({ tasks: state.tasks.filter(task => id !== task.id)
  })),
  updateCompletionStatus: (id ) => set(state => ({ 
    tasks: state.tasks.map((task) => 
      id === task.id
      ? {...task, completed: !task.completed} //update only the status value for the task which id matched the id sent as parameter
      : task
    )
  })),

}),
  {
    name: 'stored-tasks' //name of the key in localStorage
  }
))