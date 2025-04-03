<script setup>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

import slide1 from "@/assets/img/slide1.jpg";
import slide2 from "@/assets/img/slide2.jpg";
import slide3 from "@/assets/img/slide3.jpg";

const slides = [
  {
    title: " ",
    content: " ",
    image: slide1,
  },
  {
    title: " ",
    content: " ",
    image: slide2,
  },
  {
    title: " ",
    content: " ",
    image: slide3,
  },
];
</script>

<template>
  <section class="hidden md:block">
    <vueper-slides autoplay fade :touchable="false">
      <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" :title="slide.title"
        :content="slide.content" />
      <template #pause>
        <div class="text-black m-1 text-3xl">
          <i class="pi pi-pause-circle"></i>
        </div>
      </template>
    </vueper-slides>
  </section>
</template>



<style></style>