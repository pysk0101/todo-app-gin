import NamedLine from "./NamedLine";
import Task from "./Task";

export default function Completed() {
  return (
    <div className={` h-1/2 o`}>
      <NamedLine content={"Completed"} />
      <div className={`flex flex-col py-2 gap-2 overflow-hidden`}></div>
    </div>
  );
}
