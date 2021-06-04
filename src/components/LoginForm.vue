<template>
  <!--login Form-->
  <div class="loginPage">
    <div class="content">
      <div class="intro">
        <img
          class="logo"
          src="@/assets/img/Instabug-Logo.png"
          alt="Instabug logo"
        />
        <h2>Log in to Instabug</h2>
      </div>

      <!--Login Buttons-->
      <LoginButtons />

      <span class="separator">OR</span>

      <!--Login Form-->
      <div class="loginform">
        <form @submit.prevent="false">
          <div v-if="this.wrongCreds" class="wrong-creds">
            <p id="wrong-creds">
              Your email and/or your password are incorrect
            </p>
          </div>
          <div class="form-item">
            <label class="label" for="developer_email">Work Email</label>
            <input
              :class="{ field: true, error: this.errors.email }"
              v-model="email"
              id="email"
              type="text"
              name="email"
              required
              placeholder="you@company.com"
            />
            <p v-if="this.errors.email" id="errors-email" class="error">
              Enter a valid email address.
            </p>
          </div>

          <div class="form-item">
            <div class="forFlex">
              <label class="label startFlex" for="password">Password</label>
              <a class="link" href="#">Forgot password?</a>
            </div>

            <input
              :class="{ field: true, error: this.errors.password }"
              v-model="password"
              id="password"
              name="password"
              type="password"
              required
              placeholder="8+ Characters"
            />
            <p v-if="this.errors.password" class="error">
              Password must be 8 characters or more
            </p>
            <div v-if="this.notes.password" class="warning-container">
              <p>
                Note: The password must contain at least 1 uppercase letters and
                one number and shouldn’t contain the email address name (the
                part that came before the @)
              </p>
            </div>
          </div>

          <button
            class="btn primary"
            @click="login"
            id="login-btn"
            :disabled="isInvalid"
          >
            Log in
          </button>

          <div class="forFlex">
            <span class="startFlex"
              >Don't have an account?
              <a class="link blueOne" href="#">Sign up</a>
            </span>
            <a class="link blueOne" href="#">Login via SSO</a>
          </div>
        </form>
      </div>

      <!--Top Compaines-->
      <TrustedCompanies />
    </div>
  </div>
</template>

<script>
import store from "@/store";
import router from "@/router";
import LoginButtons from "@/components/LoginButtons";
import TrustedCompanies from "@/components/TrustedCompanies";

export default {
  name: "LoginForm",
  components: {
    LoginButtons,
    TrustedCompanies,
  },

  data() {
    return {
      email: "",
      password: "",
      wrongCreds: false,
      errors: {},
      notes: {},
    };
  },
  methods: {
    login() {
      const email = this.email;
      const password = this.password;

      const userExists = store.state.users.find(
        (user) => user.email === email && user.password === password
      );
      if (userExists) {
        const payload = { email };
        store.dispatch("login", payload);
        this.wrongCreds = false;
        router.push({ name: "Welcome" });
      } else {
        this.wrongCreds = true;
      }
    },
  },
  watch: {
    email: function (email) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        this.errors.email = "Enter a valid email address.";
      } else {
        this.errors.email = null;
      }
    },
    password: function (password) {
      if (password.length < 8) {
        this.errors.password = "Password must be 8 characters or more";
      } else {
        this.errors.password = null;
      }
      // checking for "The password must contain at least 1 uppercase letters and one number and shouldn’t contain the email address name (the part that came before the @)" as note
      const getEmailName = (email) => {
        const parts = email.split("@");
        return parts.length ? parts[0] : null;
      };
      const email = this.email;
      const emailName = getEmailName(email);
      this.notes.password = null;
      if (
        !/(?=.*\d)(?=.*[A-Z])/.test(password) || // If the password inludes a number and a letter or
        (emailName && password.includes(emailName)) // If the string contains the email name (the part before @)
      ) {
        this.notes.password =
          "Note: The password must contain at least 1 uppercase letters and one number and shouldn’t contain the email address name (the part that came before the @)";
      }
    },
  },
  computed: {
    isInvalid: function () {
      return (
        !this.email.length ||
        !this.password.length ||
        this.errors.email ||
        this.errors.password
      );
    },
  },
};
</script>
