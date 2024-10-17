import NamedLine from "./NamedLine";
import Task from "./Task";
import useVisible from "../../../Store/visibleStore";
import useTasksStore from "../../../Store/tasks";
import { useState } from "react";

export default function Tasks({ title }) {
  const { isVisible } = useVisible();
  const { tasks } = useTasksStore();

  const [searchTerm, setSearchTerm] = useState("");

  // const uTasks = tasks.filter((t) => t.isCompleted === false);

  const length = tasks.filter((t) => t.isCompleted === false).length;
  const uTasks = tasks.filter(
    (t) =>
      t.isCompleted === false &&
      t.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`h-1/2 xl:w-1/2 xl:h-full`}>
      <NamedLine
        title={title}
        length={length}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div
        className={`list_1 flex flex-col py-2 gap-2 2xl:gap-4 2xl:pt-4  h-full overflow-scroll ${
          !isVisible ? "" : "hidden"
        } `}
      >
        {uTasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            date={task.date}
            isCompleted={task.isCompleted}
            CompletedAt={task.CompletedAt}
          />
        ))}
      </div>
    </div>
  );
}
