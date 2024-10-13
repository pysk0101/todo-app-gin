import { useEffect } from "react";
import useStore from "../../../../../Store/store";
import useDetailsStore from "../../../../../Store/userDetailsStore";

const GenderSelection = () => {
  const { dicSignInDoneCounter } = useStore();
  const { setGender, gender } = useDetailsStore();

  useEffect(() => {
    setGender("");
  }, [dicSignInDoneCounter]);

  return (
    <li className="col-span-1 gap-2 max-[700px]:col-start-1 max-[700px]:col-end-3">
      <h3>Gender</h3>
      <div className="flex gap-2">
        <button
          onClick={() => setGender("Female")}
          className={`p-1 px-3 text-3xl border border-[#00000090] dark:hover:bg-mainHoverDark ${
            gender === "Female"
              ? "bg-main1 text-secondary dark:bg-main1Dark dark:text-darkSecondary hover:bg-main1Dark dark:hover:bg-main1"
              : "hover:bg-mainHover dark:hover:bg-mainHoverDark"
          }`}
        >
          Female
        </button>
        <button
          onClick={() => setGender("Male")}
          className={`p-1 px-6 text-3xl border border-[#00000090] dark:hover:bg-mainHoverDark ${
            gender === "Male"
              ? "bg-main1 text-secondary dark:bg-main1Dark dark:text-darkSecondary hover:bg-main1Dark dark:hover:bg-main1"
              : "hover:bg-mainHover dark:hover:bg-mainHoverDark"
          }`}
        >
          Male
        </button>
      </div>
    </li>
  );
};

export default GenderSelection;
