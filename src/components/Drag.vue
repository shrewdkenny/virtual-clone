<template>
  <div class="flex flex-row gap-5">
    <div v-html="svg" class="text-[rgb(194,66,37)]"></div>
    <div class="flex flex-col">
      <h1 class="text-[16px] lg:text-2xl">{{ heading }}</h1>
      <p class="text-[#737373] text-xl mt-5">{{ paragrapgh }}</p>
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
    svg: String,
    heading: String,
    paragrapgh: String,
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
