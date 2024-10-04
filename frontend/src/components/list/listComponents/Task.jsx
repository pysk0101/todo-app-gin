import Button from "../../Button";

export default function Task({ content }) {
  return (
    <div
      className={`flex p-3 rounded-3xl border-2 border-primary30 bg-secondary`}
    >
      <p className={`text-xs text-text  `}>{content}</p>
      <div className={`flex`}>
        {buttonList.map((button, index) => (
          <Button
            key={index}
            icon={button.icon}
            extraClasses={button.extraClasses}
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
