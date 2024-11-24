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
          <p v-if="passwordError && password" class="error-message">{{ passwordError }}</p>
        </div>
        <button type="submit" :disabled="isPasswordInvalid">Sign Up</button>
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
      passwordError: "",
    };
  },
  computed: {
    isPasswordInvalid() {
      return !this.isPasswordValid;
    },
    isPasswordValid() {
      const lengthCheck = this.password.length >= 8 && this.password.length <= 15;
      const uppercaseCheck = /[A-Z]/.test(this.password);
      const lowercaseCheck = /[a-z].*[a-z]/.test(this.password);
      const numericCheck = /\d/.test(this.password);
      const startUppercaseCheck = /^[A-Z]/.test(this.password);
      const underscoreCheck = /_/.test(this.password);

      if (!lengthCheck) {
      this.passwordError = "The password should be between 8 and 15 characters long.";
    } else if (!uppercaseCheck) {
      this.passwordError = "The password should include at least one uppercase alphabet character.";
    } else if (!lowercaseCheck) {
      this.passwordError = "The password should include at least two lowercase alphabet characters.";
    } else if (!numericCheck) {
      this.passwordError = "The password should include at least one numeric value.";
    } else if (!startUppercaseCheck) {
      this.passwordError = "The password should start with an uppercase letter.";
    } else if (!underscoreCheck) {
      this.passwordError = "The password should include an underscore.";
    } else {
      this.passwordError = ""; // Password is valid, clear error message
    }

    return lengthCheck && uppercaseCheck && lowercaseCheck && numericCheck && startUppercaseCheck && underscoreCheck;
  
    }
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

<style>
  .error-message {
    color: red;
  }
</style>
  