<template>
    <div>
      <h1>Sign Up</h1>
      <form @submit.prevent="handleSignUp">
        <div>
          <input
            type="email"
            v-model="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            type="text"
            v-model="username"
            placeholder="Username"
            required
          />
        </div>
        <div>
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        username: "",
        password: "",
      };
    },
    methods: {
      handleSignUp() {
        const newUser = {
          email: this.email,
          username: this.username,
          password: this.password,
        };
        // Emit user data to the parent component for further processing
        this.$emit("signUp", newUser);
      },
    },
  };
  </script>
  