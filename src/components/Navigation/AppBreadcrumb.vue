<template>
  <Breadcrumb :home="home" :model="items" pt:root:class="p-2 h-full">
    <template #item="{ item, props }">
      <router-link
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
      >
        <a :href="href" v-bind="props.action" @click="navigate">
          <span :class="[item.icon, 'text-color']" />
          <span>{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else :href="item.url" :target="item.target" v-bind="props.action">
        <span>{{ item.label }}</span>
      </a>
    </template>
  </Breadcrumb>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

/**Variables */
const route = useRoute();
const home = ref({
  label: "Home",
  route: "/",
});
const items = ref<object[]>([]);

watch(
  () => ({
    path: route.path,
    name: route.name,
  }),
  (newRoute, _) => {
    items.value = [];
    items.value.push({ label: newRoute.name, route: newRoute.path });
  },
  { immediate: true }
);
</script>
