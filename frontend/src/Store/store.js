import { create } from "zustand";

const loadUsersFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  }
  return [];
};

const useStore = create((set) => ({
  // * Users
  users: loadUsersFromLocalStorage(),

  deleteAllUsers: () =>
    set(() => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("users");
      }
      return { users: [] };
    }),

  addUser: (user) =>
    set((state) => {
      const updatedUsers = [...state.users, user];
      if (typeof window !== "undefined") {
        localStorage.setItem("users", JSON.stringify(updatedUsers));
      }
      return { users: updatedUsers };
    }),

  signInDoneCounter: 1,

  dicSignInDoneCounter: () =>
    set((state) => ({ signInDoneCounter: state.signInDoneCounter + 1 })),

  // * Logged Account
  loggedAccount: {
    userID: -1,
    name: "",
    surName: "",
    email: "",
    password: "",
  },

  setLoggedAccount: (account) => set({ loggedAccount: account }),
}));

export default useStore;
