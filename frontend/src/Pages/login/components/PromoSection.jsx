import React from "react";
import useDarkModeStore from "../../../Store/darkMode";

const PromoSection = () => {
  const { isDark } = useDarkModeStore();

  return (
    <section className="max-w-[60rem] flex flex-col justify-center items-center pt-5 sm:pt-3">
      <img
        className="w-[40rem] sm:w-[30rem] block max-w-[460px]:w-[25rem]"
        src={isDark ? "/logo2.png" : "/Logo.png"}
        alt="Promo logo"
      />
      <p className="text-main2 dark:text-darkPrimary text-5xl font-semibold text-center sm:text-4xl max-[460px]:text-3xl mt-5">
        Add your tasks and get them done.
      </p>
    </section>
  );
};

export default PromoSection;
