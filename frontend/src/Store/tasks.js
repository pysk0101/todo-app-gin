import { create } from "zustand";
import Completed from "../components/list/listComponents/Completed";

const getInitialState = () => {
  const storedTasks = localStorage.getItem("tasks");
  const storedIdCounter = localStorage.getItem("idCounter");

  return {
    tasks: storedTasks ? JSON.parse(storedTasks) : [],
    idCounter: storedIdCounter ? JSON.parse(storedIdCounter) : 0,
  };
};

const useTasksStore = create((set) => ({
  tasks: getInitialState().tasks,
  idCounter: getInitialState().idCounter,

  addTask: (title) =>
    set((state) => {
      const newTask = {
        id: state.idCounter,
        title,
        isCompleted: false,
        date: new Date().toISOString().slice(0, 10),
        CompletedAt: null,
      };
      const updatedTasks = [...state.tasks, newTask];
      const updatedIdCounter = state.idCounter + 1;

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      localStorage.setItem("idCounter", JSON.stringify(updatedIdCounter));

      return {
        tasks: updatedTasks,
        idCounter: updatedIdCounter,
      };
    }),

  deleteTask: (id) =>
    set((state) => {
      const updatedTasks = state.tasks.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return {
        tasks: updatedTasks,
      };
    }),

  editTask: (id, title) =>
    set((state) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === id ? { ...task, title } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return {
        tasks: updatedTasks,
      };
    }),

  toggleTaskCompletion: (id) =>
    set((state) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              isCompleted: !task.isCompleted,
              CompletedAt: !task.isCompleted
                ? new Date().toISOString().slice(0, 10)
                : task.CompletedAt,
            }
          : task
      );

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return {
        tasks: updatedTasks,
      };
    }),
}));

export default useTasksStore;
