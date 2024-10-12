import NamedLine from "./NamedLine";
import Task from "./Task";
import useVisible from "../../../Store/visibleStore";
import useCompletedTasksStore from "../../../Store/completedTasks";
export default function Completed({ title }) {
  const { isCVisible } = useVisible();
  const { completedTasks } = useCompletedTasksStore();

  return (
    <div className={`h-1/2 xl:w-1/2 xl:h-full`}>
      <NamedLine title={title} length={completedTasks.length} />
      <div
        className={`list_1 flex flex-col py-2 gap-2 2xl:gap-4 h-full overflow-scroll ${
          !isCVisible ? "" : "hidden"
        } `}
      >
        {completedTasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            date={task.date}
            isCompleted={task.isCompleted}
          />
        ))}
      </div>
    </div>
  );
}
