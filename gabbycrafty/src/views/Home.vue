<template>
  <div>
    <Header />
    <exhibits />
    <products />
    <feature />
  </div>
  <Footer />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/Header.vue";
import Exhibits from "../components/Exhibits.vue";
import Products from "../components/Products.vue"
import Feature from "../components/Feature.vue"
import Footer from "../components/Footer.vue";
export default defineComponent({
  name: "Home",
  components: {
    Header,
    Exhibits,
    Products,
    Feature,
    Footer,
  },
});
</script>
