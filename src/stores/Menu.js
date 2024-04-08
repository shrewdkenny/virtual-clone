import { defineStore } from "pinia";

export const useMenu = defineStore("Menu", {
  state: () => ({
    menuBar: false,
    lists: ["Features", "Workflow", "Pricing", "Testimonials"],
  }),
  actions: {
    toogleMenu() {
      this.menuBar = !this.menuBar;
      
    },
  },
});
