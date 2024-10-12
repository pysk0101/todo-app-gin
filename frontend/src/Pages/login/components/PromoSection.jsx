import React from "react";
import useDarkModeStore from "../../../Store/darkMode";

const PromoSection = () => {
  const { isDark } = useDarkModeStore();

  return (
    <div
      className={`max-w-[60rem] max-[1600px]:flex max-[1600px]:flex-col max-[1600px]:justify-center max-[1600px]:items-center max-[1600px]:pt-5`}
    >
      <img
        className={`w-[40rem] max-[1600px]:w-[30rem] block max-[460px]:w-[25rem]`}
        src={isDark ? "/logo2.png" : "/Logo.png"}
        alt=""
      />
      <p
        className={`text-main2 pr-5 dark:text-main2Dark text-5xl font-semibold max-[1600px]:text-4xl max-[1600px]:text-center max-[460px]:text-3xl`}
      >
        Add you task and done it.
      </p>
    </div>
  );
};

export default PromoSection;
