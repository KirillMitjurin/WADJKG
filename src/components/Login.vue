<template>
    <div>
      <h1>Login Page</h1>
      <form @submit.prevent="handleLogin">
        <div>
          <input type="text" v-model="username" placeholder="Username" required />
        </div>
        <div>
          <input type="password" v-model="password" placeholder="Password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      handleLogin() {
        console.log('Logging in:', this.username);
        // Example logic for login
      },
    },
  };
  </script>
  