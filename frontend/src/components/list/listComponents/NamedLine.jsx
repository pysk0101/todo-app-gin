import Button from "../../Button";
import useVisible from "../../../Store/visibleStore";
import { useState } from "react";

export default function NamedLine({
  title,
  length,
  searchTerm,
  setSearchTerm,
}) {
  const { isVisible, toggleIsVisible, isCVisible, toggleIsCVisible } =
    useVisible();
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const isItTasks = title === "Tasks";

  return (
    <div>
      <div
        className={`flex gap-2 pb-1 justify-between  text-primary dark:text-darkPrimary`}
      >
        <div className="flex gap-2">
          <Button
            icon={`material-symbols:visibility${
              isItTasks ? (isVisible ? "" : "-off") : isCVisible ? "" : "-off"
            }`}
            extraClasses={"2xl:text-lg"}
            func={isItTasks ? toggleIsVisible : toggleIsCVisible}
          />
          <h3 className="font-medium 2xl:text-lg">{title}</h3>
          <h3 className="font-semibold 2xl:text-lg ">{length}</h3>
        </div>

        <div className="flex gap-1 overflow-hidden">
          <input
            className={`px-3 rounded-full focus:outline-none ${
              isFilterVisible ? "hidden" : ""
            }  `}
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            icon={
              !isFilterVisible
                ? "material-symbols:filter-alt-off"
                : "material-symbols:filter-alt"
            }
            extraClasses={"2xl:text-2xl z-10"}
            func={() => {
              setIsFilterVisible(!isFilterVisible);
              setSearchTerm("");
            }}
          />
        </div>
      </div>

      <hr className={`text-primary dark:text-darkPrimary50`} />
    </div>
  );
}
