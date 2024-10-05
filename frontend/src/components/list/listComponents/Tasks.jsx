import NamedLine from "./NamedLine";
import Task from "./Task";
import useVisible from "../../../store/visibleStore";

export default function Tasks({ title }) {
  const { isVisible, isCVisible } = useVisible();

  const isItVisible = title === "Tasks" ? isVisible : isCVisible;

  return (
    <div className={`h-1/2 xl:w-1/2 xl:h-full`}>
      <NamedLine title={title} />
      <div
        className={`list_1 flex flex-col py-2 gap-2 2xl:gap-4 h-full overflow-scroll ${
          !isItVisible ? "" : "hidden"
        } `}
      >
        <Task content={"test"} />
        <Task
          content={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ab nam blanditiis, earum mollitia officiis ut sunt cum beatae! Doloremque vero hic et sint aliquid cumque at illo vitae velit repellat amet laboriosam itaque corrupti ab impedit perspiciatis sed molestias error inventore harum quidem, placeat libero architecto possimus. Blanditiis quibusdam alias quisquam praesentium ducimus incidunt?"
          }
        />
        <Task content={"test"} />
        <Task content={"test"} />
        <Task content={"test"} />
        <Task content={"test"} />
      </div>
    </div>
  );
}
