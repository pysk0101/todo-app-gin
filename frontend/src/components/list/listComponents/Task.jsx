import Button from "../../Button";
import useTasksStore from "../../../Store/tasks";
import { useState } from "react";

export default function Task({ id, title, date, isCompleted, CompletedAt }) {
  const { deleteTask, editTask, toggleTaskCompletion } = useTasksStore();
  const [isDateActive, setIsDateActive] = useState(false);

  let buttonList = [
    {
      icon: "stash:data-date-solid",
      extraClasses: "",
      func: () => {
        setIsDateActive(!isDateActive);
      },
    },
    {
      icon: "ic:baseline-delete",
      extraClasses: "test",
      func: () => {
        const confirm = window.confirm(
          "Are you sure you want to delete this task ?"
        );
        if (confirm) deleteTask(id);
      },
    },
    {
      icon: "mdi:edit",
      extraClasses: "test",
      func: () => {
        const newTitle = window.prompt("Enter a new title ");
        if (newTitle !== "" && typeof newTitle === "string") {
          editTask(id, newTitle);
        } else {
          alert("Invalid input.");
        }
      },
    },
    {
      icon: isCompleted ? "mingcute:close-fill" : "material-symbols:done",
      extraClasses: "test",
      func: () => {
        toggleTaskCompletion(id);
      },
    },
  ];

  const checkButtonList = buttonList.filter(
    (button) => button.icon !== "mdi:edit"
  );

  if (isCompleted) {
    buttonList = checkButtonList;
  }

  return (
    <div
      className={`flex justify-between   gap-4 items-start p-2  pr-4 pl-6  rounded-3xl border-2 2xl:border-4 border-primary30 dark:border-darkPrimary30 bg-secondary dark:bg-darkSecondary shadow-sm 2xl:shadow-lg dark:shadow-darkPrimary10 `}
    >
      <div>
        <p
          style={{ fontFamily: "Roboto Mono" }}
          className={`${
            isCompleted ? "line-through" : ""
          } text-text dark:text-darkText text-sm md:text-lg 2xl:text-2xl overflow-hidden`}
        >
          {title}
        </p>
        <p
          style={{ fontFamily: "Roboto Mono" }}
          className={`${
            isDateActive ? "" : "hidden"
          } text-text dark:text-darkText text-sm  overflow-hidden`}
        >
          started at {date} {CompletedAt ? `, completed at ${CompletedAt}` : ""}
        </p>
      </div>

      <div className={`flex gap-1 2xl:gap-2 `}>
        {buttonList.map((button, index) => (
          <Button
            key={index}
            icon={button.icon}
            extraClasses={`  bg-primary50 dark:bg-darkPrimary50 p-[2px] text-primary dark:text-darkPrimary text-base md:text-lg lg:text-xl 2xl:text-2xl 2xl:p-1 ${button.extraClasses}  `}
            func={button.func}
          />
        ))}
      </div>
    </div>
  );
}
