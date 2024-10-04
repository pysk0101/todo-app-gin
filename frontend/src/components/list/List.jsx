import AddTask from "./listComponents/AddTask";
import Completed from "./listComponents/Completed";
import Tasks from "./listComponents/Tasks";

export default function List() {
  return (
    <div className={`flex flex-col p-2 mt-16 `}>
      <AddTask />;
      <Tasks />;
      <Completed />
    </div>
  );
}
