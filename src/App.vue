<script setup>
import StationWidget from "@/components/StationWidget.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <StationWidget />
  <Navbar />
  <RouterView />
  <Footer />
</template>
