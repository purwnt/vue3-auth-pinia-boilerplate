<script setup>
import { markRaw, watch, shallowRef, ref } from 'vue';
import { useRoute } from 'vue-router';
import AppLayoutDefault from '@/layouts/AppLayoutDefault.vue';
import AppLayoutDashboard from './AppLayoutDashboard.vue';
import AppLayoutHomepage from './AppLayoutHomepage.vue';

const importedLayouts = shallowRef({
  AppLayoutDashboard,
  AppLayoutHomepage,
});
const layout = ref();
const route = useRoute();

watch(
  () => route.meta?.layout,
  async (metaLayout) => {
    try {
      const component = metaLayout && importedLayouts.value[metaLayout];
      layout.value = markRaw(component || AppLayoutDefault);
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
