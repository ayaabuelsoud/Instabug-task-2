<template>
  <section class="welcome">
    <div class="welcome-text">
      <img
        class="logo"
        src="@/assets/img/Instabug-Logo.png"
        alt="Instabug logo"
      />
      <h2>Welcome to {{ user.email }}</h2>
    </div>
    <div class="logout">
      <button class="logout-btn" @click="logout" id="logout-btn">
        Log out
      </button>
    </div>
  </section>
</template>
<script>
import store from "@/store";
import router from "@/router";

export default {
  name: "Welcome",
  data() {
    return {
      user: store.state.user,
    };
  },
  methods: {
    logout() {
      store.dispatch("logout");
      router.push({ name: "Login" });
    },
  },
};
</script>
