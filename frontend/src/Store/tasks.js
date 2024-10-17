import { create } from "zustand";

const useTasksStore = create((set) => ({
  tasks: [],
  idCounter: 0,

  addTask: (title) =>
    set((state) => {
      const newTask = {
        id: state.idCounter,
        title,
        isCompleted: false,
        date: new Date().toISOString().slice(0, 10), // Use the current date
      };
      return {
        tasks: [...state.tasks, newTask],
        idCounter: state.idCounter + 1, // Increment the counter
      };
    }),

  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),

  editTask: (id, title) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, title } : task
      ),
    })),

  toggleTaskCompletion: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      ),
    })),
}));

export default useTasksStore;
