import Button from "../../Button";

export default function NamedLine({ content }) {
  return (
    <div>
      <div className={` flex gap-2 text-primary`}>
        <Button icon="material-symbols:visibility-off" />
        <h3>{content}</h3>
      </div>

      <hr className={`text-primary50`} />
    </div>
  );
}
