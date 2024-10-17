import { create } from "zustand";

const getInitialState = () => {
  if (typeof window !== "undefined") {
    const storedDarkMode = localStorage.getItem("isDark");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  }
  return false;
};

const useDarkModeStore = create((set) => ({
  isDark: getInitialState(),
  toggleDarkMode: () =>
    set((state) => {
      const newIsDark = !state.isDark;
      localStorage.setItem("isDark", JSON.stringify(newIsDark));
      return { isDark: newIsDark };
    }),
}));

export default useDarkModeStore;
