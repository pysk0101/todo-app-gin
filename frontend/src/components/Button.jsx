import { Icon } from "@iconify/react";

export default function Button({ icon, extraClasses, func }) {
  return (
    <button
      onClick={func}
      className={`flex items-center justify-center hover:scale-110 hover:opacity-80 rounded-full transition-all ${extraClasses} `}
    >
      <Icon icon={icon} />
    </button>
  );
}
