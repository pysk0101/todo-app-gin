import Button from "../../Button";

export default function Task({ content }) {
  return (
    <div
      style={{ fontFamily: "Roboto Mono" }}
      className={`flex justify-between gap-4 items-start p-2 pr-4 pl-6 rounded-3xl border-2 border-primary30 bg-secondary shadow-sm `}
    >
      <p className={` text-text text-xs sm:text-sm md:text-base lg:text-lg `}>
        {content}
      </p>
      <div className={`flex gap-1 `}>
        {buttonList.map((button, index) => (
          <Button
            key={index}
            icon={button.icon}
            extraClasses={
              "bg-primary50 p-[2px] text-primary text-xs sm:text-sm md:text-base lg:text-lg"
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
