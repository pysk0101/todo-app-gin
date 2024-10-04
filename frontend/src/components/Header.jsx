import Button from "./Button";

export default function Header() {
  return (
    <header
      className={`fixed flex w-full px-3 py-2 justify-between items-center bg-secondary text-primary `}
    >
      <h1 className={`text-3xl font-bold leading-none `}>TODO</h1>

      <Button
        icon={"material-symbols-light:dark-mode"}
        extraClasses={"text-4xl bg-main "}
      />
    </header>
  );
}
