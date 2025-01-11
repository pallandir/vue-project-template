<template>
  <div>
    <MdiHome />
    <h2>Home</h2>
    <Button :label="`Clicked : ${store.count}`" @click="store.count += 1" />
  </div>
</template>

<script setup lang="ts">
import MdiHome from "virtual:icons/mdi/home";
import { useCounterStore } from "@/stores/CounterStore";

// access the `store` variable anywhere in the component ✨
const store = useCounterStore();
</script>
