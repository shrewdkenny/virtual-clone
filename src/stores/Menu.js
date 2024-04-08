import { defineStore } from "pinia";

export const useMenu = defineStore("Menu", {
  state: () => ({
    menuBar: false,
  }),
  actions: {
    toogleMenu() {
      this.menuBar = !this.menuBar;

    },
  },
});
