<template>
  <div>
    <About />
    <Team />
    <p style="height: 400vh">Hello</p>
  </div>
</template>

<script>
import About from "@/views/About";
import Team from "@/views/Team";

export default {
  name: "Home",

  components: {
    About,
    Team
  }
};
</script>
