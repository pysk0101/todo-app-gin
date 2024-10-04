import NamedLine from "./NamedLine";
import Task from "./Task";

export default function Completed() {
  return (
    <div className={`p-2`}>
      <NamedLine content={"Completed"} />
      <div>
        <Task />
      </div>
    </div>
  );
}
