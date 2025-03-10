<template>
  <div class="h-screen min-h-full w-full">
    <Menu
      :model="items"
      class="h-full"
      pt:list:class="h-[calc(100%-(45px+62px))] overflow-y-auto"
      pt:start:class="h-11 min-h-11"
    >
      <template #start>
        <span class="flex items-center justify-center gap-1 px-2 py-2">
          <img src="../../assets/logo.svg" class="size-7" />
          <span class="text-xl font-semibold">Project</span>
        </span>
        <Divider class="m-px" />
      </template>

      <template #submenuitem="{ item }">
        <span class="text-sm font-bold">{{ item.label }}</span>
      </template>
      <template #item="{ item, props }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" class="text-sm font-medium" />
            <span class="ml-2 text-sm font-medium">{{ item.label }}</span>
          </a>
        </router-link>
        <a
          v-else
          v-ripple
          :href="item.url"
          :target="item.target"
          v-bind="props.action"
        >
          <span :class="item.icon" />
          <span class="ml-2 text-sm font-medium">{{ item.label }}</span>
        </a>
      </template>

      <template #end>
        <button
          v-ripple
          class="relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-200 rounded-none cursor-pointer transition-colors duration-200"
        >
          <Avatar
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            class="mr-2"
            shape="circle"
          />
          <span class="inline-flex flex-col items-start">
            <span class="font-bold">Amy Elsner</span>
            <span class="text-sm">Admin</span>
          </span>
        </button>
      </template>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { routerToMenu } from "@/composables/Navigation";

/**Variables */
const router = useRouter();
const items = ref(routerToMenu(router));

/**Methods */
</script>
