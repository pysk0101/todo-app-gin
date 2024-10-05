import Button from "../../Button";

export default function NamedLine({ content }) {
  return (
    <div>
      <div className={` flex gap-2 text-primary dark:text-darkPrimary`}>
        <Button
          icon="material-symbols:visibility-off"
          extraClasses={"2xl:text-lg"}
        />
        <h3 className="font-medium 2xl:text-lg">{content}</h3>
      </div>

      <hr className={`text-primary dark:text-darkPrimary50`} />
    </div>
  );
}
