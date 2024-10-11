import NamedLine from "./NamedLine";
import Task from "./Task";
import useVisible from "../../../Store/visibleStore";
import useTasksStore from "../../../Store/tasks";

export default function Tasks({ title }) {
  const { isVisible } = useVisible();
  const { tasks } = useTasksStore();

  return (
    <div className={`h-1/2 xl:w-1/2 xl:h-full`}>
      <NamedLine title={title} />
      <div
        className={`list_1 flex flex-col py-2 gap-2 2xl:gap-4 h-full overflow-scroll ${
          !isVisible ? "" : "hidden"
        } `}
      >
        {tasks.map((task) => (
          <Task
            key={task.id}
            content={task.title}
            date={task.date}
            isCompleted={task.isCompleted}
          />
        ))}
      </div>
    </div>
  );
}
