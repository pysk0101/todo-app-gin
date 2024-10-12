import { create } from "zustand";

const useDetailsStore = create((set) => ({
  name: "",
  lastName: "",
  email: "",
  password: "",
  dateOfBirth: "",
  gender: "",
  userIdCounter: 0,

  setName: (name) => set(() => ({ name })),
  setLastName: (lastName) => set(() => ({ lastName })),
  setEmail: (email) => set(() => ({ email })),
  setPassword: (password) => set(() => ({ password })),
  setDateOfBirth: (dateOfBirth) => set(() => ({ dateOfBirth })),
  setGender: (gender) => set(() => ({ gender })),

  DicUserIdCounter: () =>
    set((state) => ({ userIdCounter: state.userIdCounter + 1 })),

  setAllFieldsToDefault: () => {
    set(() => ({
      name: "",
      lastName: "",
      email: "",
      password: "",
      dateOfBirth: "",
      gender: "",
    }));
  },
}));

export default useDetailsStore;
