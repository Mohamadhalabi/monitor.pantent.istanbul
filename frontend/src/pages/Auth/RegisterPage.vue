<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="form.password" required>
      </div>
      <div>
        <label for="password_confirmation">Confirm Password</label>
        <input type="password" id="password_confirmation" v-model="form.password_confirmation" required>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
// import { useRegister } from '../api/auth';
export default {
  name: "RegisterPage",
  setup() {
    const form = ref({
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    });

    const { register } = useRegister();

    const submitForm = async () => {
      const response = await register(form.value);
      // Handle response here
    };

    return {
      form,
      submitForm,
    };
  },
}
</script>

<style scoped>

</style>
