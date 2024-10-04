import { Icon } from "@iconify/react";

export default function Button({ icon, extraClasses }) {
  return (
    <button
      className={`flex items-center justify-center hover:scale-110 hover:opacity-80 rounded-full h-8 w-8 ${extraClasses} `}
    >
      <Icon icon={icon} />
    </button>
  );
}
