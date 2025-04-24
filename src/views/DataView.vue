<script setup>
import DataTable from "@/components/DataTable.vue";
</script>

<template>
    <section class="bg-gray-200 md:flex justify-center divide-x divide-gray-600 space-x-6 px-8 py-8 sm:px-1">
        <div class="container sm:px-12">
            <h1
                class="max-w-md text-3xl font-bold text-center font-Rubik md:text-3xl md:text-left sm:text-left sm:text-1xl">
                Wszystkie odczyty
            </h1>
        </div>
    </section>
    <section>
        <DataTable />
    </section>
</template>