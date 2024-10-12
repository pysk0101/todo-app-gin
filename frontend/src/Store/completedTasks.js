import { create } from "zustand";

const useCompletedTasksStore = create((set) => ({
  completedTasks: [
    { id: 4, title: "Task 1", completed: true },
    { id: 5, title: "Task 2", completed: true },
    { id: 6, title: "Task 3", completed: true },
  ],

  deleteCompletedTask: (id) => {
    set((state) => ({
      completedTasks: state.completedTasks.filter((task) => task.id !== id),
    }));
  },

  editCompletedTasks: (id, title) => {
    set((state) => ({
      completedTasks: state.completedTasks.map((task) =>
        task.id === id ? { ...task, title } : task
      ),
    }));
  },

  toggleCompletedTasksCompletion: (id) => {
    set((state) => ({
      completedTasks: state.completedTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  },
}));

export default useCompletedTasksStore;
