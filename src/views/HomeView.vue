<script setup>
import Table from "@/components/Table.vue";
import CTA from "@/components/CTA.vue";
import Carousel from "@/components/Carousel.vue";
import Header from "@/components/Header.vue";
import ComboChart from "@/components/ComboChart.vue";
</script>

<template>
    <Carousel />
    <Header />
    <Suspense>
        <ComboChart />
    </Suspense>
    <Table />
    <CTA />
</template>