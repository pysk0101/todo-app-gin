import Button from "../../Button";
import useVisible from "../../../Store/visibleStore";

export default function NamedLine({ title }) {
  const { isVisible, toggleIsVisible, isCVisible, toggleIsCVisible } =
    useVisible();

  const isItTasks = title === "Tasks";

  return (
    <div>
      <div className={` flex gap-2 text-primary dark:text-darkPrimary`}>
        <Button
          icon={`material-symbols:visibility${
            isItTasks ? (isVisible ? "" : "-off") : isCVisible ? "" : "-off"
          }`}
          extraClasses={"2xl:text-lg"}
          func={isItTasks ? toggleIsVisible : toggleIsCVisible}
        />
        <h3 className="font-medium 2xl:text-lg">{title}</h3>
        <h3 className="font-semibold 2xl:text-lg ">6</h3>
      </div>

      <hr className={`text-primary dark:text-darkPrimary50`} />
    </div>
  );
}
