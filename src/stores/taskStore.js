import { create } from "zustand";

export const useTaskStore = create((set) => ({
  tasks: [
    {
      name: "Task 1",
      id: "1223445gdk",
      description: "This is the first task.",
      createdAt: "2025-12-26",
      deadline: "2026-01-26",
      category: "work",
      status: "completed"
    },
    {
      name: "Task 2",
      id: "1737294g4j",
      description: "This is the second task.",
      createdAt: "2025-01-11",
      deadline: "2026-01-31",
      category: "personal",
      status: "not completed"
    }
  ],
  addTask: (task) => set(state => ({ tasks: [...state.tasks, task] }))
}))