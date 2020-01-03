<template>
  <div>
    <About />
    <Team />
    <News />
    <Regulations />
    <QnA />
    <Contact />
  </div>
</template>

<script>
import About from "@/views/About";
import Team from "@/views/Team";
import News from "@/views/News";
import Regulations from "@/views/Regulations";
import QnA from "@/views/QnA";
import Contact from "@/views/Contact";

export default {
  name: "Home",

  components: {
    About,
    Team,
    News,
    Regulations,
    QnA,
    Contact
  }
};
</script>
