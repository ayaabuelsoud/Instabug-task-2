<template>
  <section class="home">
    <div class="row">
      <!--Slider-->
      <Slider :items="sliderItems" />

      <!--Login Form-->
      <LoginForm />
    </div>
  </section>
</template>

<script>
import Slider from "@/components/Slider";
import LoginForm from "@/components/LoginForm";

export default {
  name: "Login",
  components: {
    Slider,
    LoginForm,
  },

  data() {
    return {
      sliderItems: [
        {
          src: require("@/assets/img/Product-overview.svg"),
          text: "Accelerate Your Entire Mobile Team Workflow",
        },
        {
          src: require("@/assets/img/Products-bug-reporting.svg"),
          text: "The most comprehensive bug reporting tool for mobile apps",
        },
        {
          src: require("@/assets/img/Products-crash-reporting.svg"),
          text: "Secure crash reporting with real-time alerts",
        },
      ],
    };
  },
};
</script>
<style lang="scss" src="@/styles/style.scss" />
