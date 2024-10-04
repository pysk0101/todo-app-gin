import NamedLine from "./NamedLine";
import Task from "./Task";

export default function Tasks() {
  return (
    <div className={`p-2`}>
      <NamedLine content={"tasks"} />
      <div>
        <Task />
      </div>
    </div>
  );
}
