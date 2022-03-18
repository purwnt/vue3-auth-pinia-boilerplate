<template>
  <div>
    <div class="py-12 text-center text-blue-500 underline">
      <RouterLink to="/">Home</RouterLink>
    </div>
    <div class="bg-blue-500 mx-auto max-w-xs px-5 py-5 text-center">
      <h2>Login Page</h2>
      <!-- {{ JSON.stringify(v$.username) }} -->
      <form @submit.prevent="login">
        <div class="mb-2">
          <input
            type="text"
            name="username"
            id="usernam"
            placeholder="username"
            v-model="form.username"
          />
          <div v-if="v$.username.$errors">
            <div v-for="error in v$.username.$errors" :key="error">
              {{ error.$message }}
            </div>
          </div>
        </div>
        <div class="mb-2">
          <input
            type="password"
            name="password"
            id="username"
            placeholder="password"
            v-model="form.password"
          />
          <div v-if="v$.password.$errors">
            <div v-for="error in v$.password.$errors" :key="error">
              {{ error.$message }}
            </div>
          </div>
        </div>
        <div>
          <input
            @submit.prevent=""
            class="bg-white cursor-pointer"
            type="submit"
            value="Login"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';

const router = useRouter();
const authStore = useAuthStore();
const form = reactive({
  username: null,
  password: null,
});
const rules = {
  username: {
    required: helpers.withMessage('Username cannot be empty', required),
  },
  password: {
    required: helpers.withMessage('Password cannot be empty', required),
  },
};
const v$ = useVuelidate(rules, form);

async function login() {
  try {
    const isValid = await v$.value.$validate();
    if (isValid) {
      await authStore.login(form);
      router.push('/users');
    }
  } catch (err) {
    console.log(err);
  }
}
</script>
