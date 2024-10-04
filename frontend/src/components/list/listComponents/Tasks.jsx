import NamedLine from "./NamedLine";
import Task from "./Task";

export default function Tasks() {
  return (
    <div className={`h-1/2  `}>
      <NamedLine content={"tasks"} />
      <div className={`flex flex-col py-2 gap-2 overflow-hidden`}>
        <Task content={"test"} />
        <Task content={"test"} />
        <Task content={"test"} />
        <Task content={"test"} />
      </div>
    </div>
  );
}
