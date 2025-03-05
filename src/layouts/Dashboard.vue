<template>
  <aside class="max-w-52 h-full">
    <AppSidebar />
  </aside>
  <main class="w-[calc(100%-13rem)] h-full">
    <section class="h-11 min-h-11pb-2">
      <AppBreadcrumb /><Divider class="m-px" />
    </section>
    <section class="h-[calc(100%-2.75rem-2px)] bg-gray-100 mt-0.5 p-2">
      <slot></slot>
    </section>
  </main>
</template>

<script setup lang="ts">
import AppSidebar from "@/components/Navigation/AppSidebar.vue";
import AppBreadcrumb from "@/components/Navigation/AppBreadcrumb.vue";
</script>
