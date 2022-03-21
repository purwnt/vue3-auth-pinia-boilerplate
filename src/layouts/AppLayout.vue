<script setup>
import AppLayoutDefault from '@/layouts/AppLayoutDefault.vue';
import { markRaw, watch, ref } from 'vue';
import { useRoute } from 'vue-router';

const layout = ref();
const route = useRoute();

watch(
  () => route.meta?.layout,
  async (metaLayout) => {
    try {
      const component =
        metaLayout && (await import(/* @vite-ignore */ `./${metaLayout}.vue`));
      layout.value = markRaw(component?.default || AppLayoutDefault);
    } catch (e) {
      layout.value = markRaw(AppLayoutDefault);
    }
  },
  { immediate: false }
);
</script>

<template>
  <component :is="layout"><router-view /></component>
</template>
