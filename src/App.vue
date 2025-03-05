<template>
  <component :is="layout">
    <router-view :key="$route.name" />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import Default from "./layouts/Default.vue";

/**Variables */
const route = useRoute();

/**Computed */
const layout = computed(() => {
  return route.meta?.layout || Default;
});
</script>
