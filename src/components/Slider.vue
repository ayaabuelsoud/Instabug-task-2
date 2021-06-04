<template>
  <div class="slider-container">
    <!--Slider-->
    <div class="slider">
      <div
        v-for="(item, i) in items"
        :key="i"
        :class="{ slide: true, active: !i }"
      >
        <img :src="item.src" />
        <p>{{ item.text }}</p>
      </div>
    </div>

    <!-- indicators -->
    <div class="indicator"></div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    items: [],
  },
};
</script>
