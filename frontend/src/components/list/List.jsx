import AddTask from "./listComponents/AddTask";
import Completed from "./listComponents/Completed";
import Tasks from "./listComponents/Tasks";

export default function List() {
  return (
    <div className={`flex flex-col xl:flex-row h-[80svh] gap-7 pt-5 `}>
      <Tasks />
      <Completed />
    </div>
  );
}
