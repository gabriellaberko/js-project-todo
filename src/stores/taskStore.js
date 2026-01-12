import { create } from "zustand";

export const useTaskStore = create(() => ({
  tasks: [
    {
      name: "Task 1",
      description: "This is the first task.",
      createdAt: "2025-12-26",
      deadline: "2026-01-26",
      category: "work",
      status: "completed"
    },
    {
      name: "Task 2",
      description: "This is the second task.",
      createdAt: "2025-01-11",
      deadline: "2026-01-31",
      category: "personal",
      status: "not completed"
    }
  ]
}))