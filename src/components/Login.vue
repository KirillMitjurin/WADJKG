<template>
  <div>
    <h1>Login Page</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <input
          type="text"
          v-model="usernameOrEmail"
          placeholder="Username or Email"
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
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usernameOrEmail: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      this.$emit("login", {
        usernameOrEmail: this.usernameOrEmail,
        password: this.password,
      });
    },
  },
};
</script>
