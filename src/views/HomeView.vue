<script setup>
import Table from "@/components/Table.vue";
import CTA from "@/components/CTA.vue";
import Carousel from "@/components/Carousel.vue";

</script>

<template>
    <Carousel />
    <section class="bg-gray-200 md:flex justify-center divide-x divide-gray-600 space-x-6 px-16 py-8">
        <div class="container">
            <h1 class="max-w-md text-4xl font-bold text-center font-Rubik md:text-5xl md:text-left">
                Odczyty z ostatnich 24h
            </h1>
        </div>
    </section>
    <Table />
    <CTA />
</template>