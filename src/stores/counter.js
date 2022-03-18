import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

// export const useCounterStore = defineStore({
//   id: 'counter',
//   state: () => ({
//     counter: 0,
//   }),
//   getters: {
//     doubleCount: (state) => state.counter * 2,
//   },
//   actions: {
//     increment() {
//       this.counter++;
//     },
//   },
// });

export const useCounterStore = defineStore('auth', () => {
  const counter = ref(0);
  const doubleCount = computed(() => {
    return counter.value * 2;
  });

  function increment() {
    counter.value++;
  }

  return {
    counter,
    doubleCount,
    increment,
  };
});
