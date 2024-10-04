import NamedLine from "./NamedLine";
import Task from "./Task";

export default function Tasks() {
  return (
    <div className={`h-1/2 `}>
      <NamedLine content={"tasks "} />
      <div className={`list_1 flex flex-col py-2 gap-2 h-full overflow-scroll`}>
        <Task content={"test"} />
        <Task content={"test"} />
        <Task content={"test"} />
        <Task content={"test"} />
        <Task content={"test"} />
        <Task content={"test"} />
      </div>
    </div>
  );
}
