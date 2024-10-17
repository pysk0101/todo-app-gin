import NamedLine from "./NamedLine";
import Task from "./Task";
import useVisible from "../../../Store/visibleStore";
import useTasksStore from "../../../Store/tasks";
export default function Completed({ title }) {
  const { isCVisible } = useVisible();
  const { tasks } = useTasksStore();

  const cTasks = tasks.filter((t) => t.isCompleted === true);

  return (
    <div className={`h-1/2 xl:w-1/2 xl:h-full`}>
      <NamedLine title={title} length={cTasks.length} />
      <div
        className={`list_1 flex flex-col py-2 gap-2 2xl:gap-4 2xl:pt-4  h-full overflow-scroll ${
          !isCVisible ? "" : "hidden"
        } `}
      >
        {cTasks.map((task) => (
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
