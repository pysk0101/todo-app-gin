import Button from "../../Button";

export default function Task({ content }) {
  return (
    <div
      className={`flex justify-between gap-4 items-start p-2 2xl:p-4 pr-4 pl-6  rounded-3xl border-2 2xl:border-4 border-primary30 bg-secondary shadow-sm 2xl:shadow-lg `}
    >
      <p
        style={{ fontFamily: "Roboto Mono" }}
        className={` text-text text-sm md:text-lg 2xl:text-2xl`}
      >
        {content}
      </p>
      <div className={`flex gap-1 2xl:gap-2 `}>
        {buttonList.map((button, index) => (
          <Button
            key={index}
            icon={button.icon}
            extraClasses={
              "bg-primary50 p-[2px] text-primary text-base md:text-lg lg:text-xl 2xl:text-2xl 2xl:p-1"
            }
            funcName={button.funcName}
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
    funcName: () => {
      return "test";
    },
  },
  {
    icon: "mdi:edit",
    extraClasses: "test",
    funcName: () => {
      return "test;";
    },
  },
  {
    icon: "material-symbols:done",
    extraClasses: "test",
    funcName: () => {
      return "test;";
    },
  },
];
