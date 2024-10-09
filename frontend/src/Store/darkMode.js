import { create } from "zustand";

const useDarkModeStore = create((set) => ({
  isDark: false,
  toggleDarkMode: () => set((state) => ({ isDark: !state.isDark })),
}));

export default useDarkModeStore;
