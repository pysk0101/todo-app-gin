import { useState } from "react";
import Button from "./Button";
import useTasksStore from "../Store/tasks";

export default function AddTask() {
  const { addTask, tasks } = useTasksStore();
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tasks.length >= 200) {
      alert("Maximum number of tasks reached (200)");
      return;
    }
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full xl:w-1/2">
      <input
        className={`dark:bg-darkSecondary dark:text-darkText w-full py-2 2xl:py-3 lg:text-lg xl:text-xl 2xl:text-2xl rounded-full pr-12 pl-5 border-2 border-primary30 focus:outline-none`}
        type="text"
        maxLength={80}
        placeholder="Add a new task , max 80 characters"
        value={taskTitle} // Bind input value to state
        onChange={(e) => setTaskTitle(e.target.value)} // Update state on input change
      />
      <Button
        icon={"ic:round-add"}
        extraClasses={
          "bg-primary50 text-primary dark:text-darkPrimary dark:bg-darkPrimary50 text-3xl 2xl:text-4xl 2xl:p-1 absolute top-0 right-2 top-1/2 -translate-y-1/2"
        }
      />
    </form>
  );
}
