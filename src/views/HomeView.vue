<script setup>
import Table from "@/components/Table.vue";
import CTA from "@/components/CTA.vue";
import Carousel from "@/components/Carousel.vue";
import Header from "@/components/Header.vue";
import LineChart from "@/components/LineChart.vue";

</script>

<template>
    <Carousel />
    <Header />
    <Suspense>
        <LineChart />
    </Suspense>
    <Table />
    <CTA />
</template>