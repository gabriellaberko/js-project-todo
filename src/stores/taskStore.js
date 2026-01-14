import { create } from "zustand";
import { persist } from "zustand/middleware"; //to save tasks in localStorage

export const useTaskStore = create(persist((set) => ({
  tasks: [
    {
      name: "Task 1",
      id: "1223445gdk",
      description: "This is the first task.",
      createdAt: "2025-12-26",
      deadline: "2026-01-26",
      category: "Work",
      completed: true
    },
    {
      name: "Task 2",
      id: "1737294g4j",
      description: "This is the second task.",
      createdAt: "2025-01-11",
      deadline: "2026-01-31",
      category: "Personal",
      completed: false
    }
  ],
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