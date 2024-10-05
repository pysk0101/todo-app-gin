import Button from "../../Button";
export default function AddTask() {
  return (
    <div className={`w-full relative xl:w-[49%]  `}>
      <input
        className={`w-full p-2 rounded-full pl-4 pr-12 border-2 border-primary30 focus:outline-none`}
        type="text"
        placeholder="Add a new task"
      />
      <Button
        icon={"ic:round-add"}
        extraClasses={
          "bg-primary50 text-3xl absolute top-0 right-2 top-1/2 -translate-y-1/2 "
        }
      />
    </div>
  );
}
