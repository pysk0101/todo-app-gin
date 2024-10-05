import Button from "../../Button";
export default function AddTask() {
  return (
    <div className={`w-full relative xl:w-[49%]  `}>
      <input
        className={`dark:bg-darkSecondary dark:text-darkText w-full p-2  2xl:p-3 lg:text-lg xl:text-xl 2xl:text-2xl rounded-full pl-12 pr-12 border-2 border-primary30 focus:outline-none`}
        type="text"
        placeholder="Add a new task"
      />
      <Button
        icon={"ic:round-add"}
        extraClasses={
          "bg-primary50 dark:bg-darkPrimary50 text-3xl 2xl:text-3xl 2xl:p-1 absolute top-0 right-2 top-1/2 -translate-y-1/2 "
        }
      />
    </div>
  );
}
