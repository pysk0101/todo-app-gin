import Completed from "./listComponents/Completed";
import Tasks from "./listComponents/Tasks";

export default function List() {
  return (
    <div className={`flex flex-col xl:flex-row  gap-7  pt-5 h-[75svh] pb-4`}>
      <Tasks title={"Tasks"} />
      <Completed title={"Completed"} />
    </div>
  );
}
