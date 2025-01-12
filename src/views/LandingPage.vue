<template>
  <div class="flex items-center justify-center w-full">
    <Card class="min-w-80 w-1/4 h-fit">
      <template #subtitle>Welcome on this template</template>
      <template #content>
        <p class="m-1">I configured all it takes for a vue project to run.</p>
        <p class="m-1">
          Feel free to delete this page, Home.vue and About.vue, they are only
          used to showcase the router and some base of PrimeVue.
        </p>
        <p class="m-1">
          I also added some layout so you can have a demonstration on how it
          works, just type /dashboard to see.
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button
            label="Save"
            class="w-full"
            size="small"
            @click="buttonSpammer()"
          >
            Ok <MdiThumbUpOutline
          /></Button>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import MdiThumbUpOutline from "~icons/mdi/thumb-up-outline";
import { useCounterStore } from "@/stores/CounterStore";
import { useToast } from "primevue/usetoast";

const toast = useToast();
const store = useCounterStore();

function buttonSpammer() {
  store.count += 1;
  if (store.count === 5) {
    toast.add({
      severity: "info",
      summary: "Info",
      detail: "This button doesn't do much in fact.",
      life: 3000,
    });
    store.$reset;
  }
}
</script>
