<script setup>
import Table from "@/components/Table.vue";
</script>

<template>
    <section class="bg-gray-200 md:flex justify-center divide-x divide-gray-600 space-x-6 px-16 py-8">
        <div class="container px-32">
            <h1 class="max-w-md text-4xl font-bold text-center font-Rubik md:text-5xl md:text-left">
                Wszystkie odczyty
            </h1>
        </div>
    </section>
    <section id="hero">
        <Table />
    </section>
</template>