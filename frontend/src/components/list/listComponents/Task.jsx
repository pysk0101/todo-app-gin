import Button from "../../Button";

export default function Task({ content }) {
  return (
    <div
      className={`flex justify-between gap-4 items-start p-2  pr-4 pl-6  rounded-3xl border-2 2xl:border-4 border-primary30 dark:border-darkPrimary30 bg-secondary dark:bg-darkSecondary shadow-sm 2xl:shadow-lg dark:shadow-darkPrimary10 `}
    >
      <p
        style={{ fontFamily: "Roboto Mono" }}
        className={` text-text dark:text-darkText text-sm md:text-lg 2xl:text-2xl overflow-hidden`}
      >
        {content}
      </p>
      <div className={`flex gap-1 2xl:gap-2 `}>
        {buttonList.map((button, index) => (
          <Button
            key={index}
            icon={button.icon}
            extraClasses={
              " bg-primary50 dark:bg-darkPrimary50 p-[2px] text-primary dark:text-darkPrimary text-base md:text-lg lg:text-xl 2xl:text-2xl 2xl:p-1"
            }
            func={button.func}
          />
        ))}
      </div>
    </div>
  );
}

const buttonList = [
  {
    icon: "ic:baseline-delete",
    extraClasses: "test",
    func: () => {
      return "test";
    },
  },
  {
    icon: "mdi:edit",
    extraClasses: "test",
    func: () => {
      return "test;";
    },
  },
  {
    icon: "material-symbols:done",
    extraClasses: "test",
    func: () => {
      return "test;";
    },
  },
];
