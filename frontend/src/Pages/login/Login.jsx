import PromoSection from "./components/PromoSection";
import FormSection from "./components/FormSction/FormSection";
import useDarkModeStore from "../../Store/darkMode";

function Login() {
  const { isDark } = useDarkModeStore();
  return (
    <div className={`relative ${isDark ? "dark" : ""} min-h-[97.4svh]`}>
      <div
        className={`gap-5  bg-bg2 dark:bg-bg2Dark mt-16 xl:mt-0  p-12 pt-36 flex justify-around max-[551px]:justify-center max-[551px]:gap-5
          max-[1600px]:flex-col max-[1600px]:p-4 max-[1600px]:items-center  `}
      >
        <PromoSection />
        <FormSection />
      </div>
    </div>
  );
}

export default Login;
