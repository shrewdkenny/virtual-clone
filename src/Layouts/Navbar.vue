<template>
  <nav
    class="px-5 flex flex-row justify-between lg:px-20 py-4 border-b sticky top-0 bg-zinc-900"
  >
    <ul
      class="lg:hidden grid grid-cols-1 absolute top-[4rem] z-[10] right-0 gap-1 h-40 w-full text-white bg-orange-900 p-4 text-center font-normal text-xl"
      v-if="menuStore.menuBar"
    >
      <li>Features</li>
      <li>Workflow</li>
      <li>Pricing</li>
      <li>Testimonials</li>
    </ul>
    <div class="flex gap-2">
      <div class="text-sm">
        <img src="@/assets/logo.png" alt="" class="w-[30px] h-[30px]" />
      </div>
      <h1 class="text-lg">Virtuals</h1>
    </div>
    <ul class="hidden lg:flex gap-6 text-lg">
      <li>Features</li>
      <li>Workflow</li>
      <li>Pricing</li>
      <li>Testimonials</li>
    </ul>
    <div class="hidden lg:flex flex-row gap-14">
      <button class="border h-10 w-20 rounded-lg">Sign In</button>
      <button
        class="border-0 h-10 rounded-lg bg-[#c14d24] text-sm px-2 font-normal"
      >
        create an account
      </button>
    </div>
    <div class="flex lg:hidden">
      <button @click="handleToggle">
        <svg
          v-if="!menuStore.menuBar"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          :stroke-width="1.5"
          stroke="currentColor"
          :class="{ 'w-6 h-6': true }"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          :stroke-width="1.5"
          stroke="currentColor"
          :class="{ 'w-6 h-6': true }"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </nav>
</template>

<script>
import { useMenu } from "@/stores/Menu";
export default {
  setup() {
    const menuStore = useMenu();

    const handleToggle = () => {
      menuStore.toogleMenu();
    };

    return {
      handleToggle,
      menuStore,
    };
  },
};
</script>

<style></style>
