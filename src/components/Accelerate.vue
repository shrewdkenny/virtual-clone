<template>
  <div class="flex flex-row mt-4 lg:mt-20 gap-3">
    <div v-html="icon" class="text-green-400"></div>
    <div class="flex flex-col gap-2">
      <h1 class="text-xl">{{ header }}</h1>
      <p class="text-gray-400">
        {{ body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {
    icon: String,
    header: String,
    body: String,
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
