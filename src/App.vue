<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavbarLayout from "./Layouts/Navbar.vue";
</script>

<template>
  <NavbarLayout />
  <div class="max-width-7xl mx-auto px-4 pt-4"><RouterView /></div>
</template>

