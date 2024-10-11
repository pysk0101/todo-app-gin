import { create } from "zustand";

const useTasksStore = create((set) => ({
  tasks: [
    { id: 1, title: "Task 1", completed: false, date: "2002-02-20" },
    { id: 2, title: "Task 2", completed: true, date: "2002-02-20" },
    { id: 3, title: "Task 3", completed: false, date: "2002-02-20" },
  ],
  idCounter: 4, // Start after the last initial task's ID

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
