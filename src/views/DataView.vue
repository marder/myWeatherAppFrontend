<script setup>
import TempChart from "@/components/TempChart.vue";
import HumiChart from "@/components/HumiChart.vue";
import PressChart from "@/components/PressChart.vue";
</script>

<template>
    <section class="bg-gray-200 md:flex justify-center divide-x divide-gray-600 space-x-6 px-16 py-8 sm:px-1">
        <div class="container px-32">
            <h1 class="max-w-md text-3xl font-bold text-center font-Rubik md:text-3xl md:text-left sm:text-left sm:text-1xl">
                Wszystkie odczyty
            </h1>
        </div>
    </section>
    <section id="hero" class="py-10">
        <Suspense>
            <TempChart />
        </Suspense>
        <Suspense>
            <HumiChart />
        </Suspense>
        <Suspense>
            <PressChart />
        </Suspense>
    </section>
</template>