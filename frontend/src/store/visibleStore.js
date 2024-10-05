import { create } from "zustand";

const useVisible = create((set) => ({
  isVisible: false,
  toggleIsVisible: () => set((state) => ({ isVisible: !state.isVisible })),

  isCVisible: false,
  toggleIsCVisible: () => set((state) => ({ isCVisible: !state.isCVisible })),
}));

export default useVisible;
