import { defineStore } from "pinia";

export const useSession = defineStore("session", {
  persist: true,
  state: () => {
    return {
      user: null,
      loggedIn: false,
    };
  },
  actions: {
    login({ user }) {
      this.user = user;
      this.loggedIn = true;
    },
    logout() {
      this.user = null;
      this.loggedIn = false;
    },
  },
});
