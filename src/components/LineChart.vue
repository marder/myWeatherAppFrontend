<template>
    <div class="container mx-auto">
        <Line v-if="loaded" :data="data.chartData" />
    </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

import dayjs from 'dayjs';
import { reactive, ref, isProxy, toRaw } from 'vue';
import axios from 'axios';

const labels = ref([]);
const temperature = ref([]);

async function getLabels() {
    try {
        const data24 = await axios.get('https://marder.bieda.it/cms/24?api_key=1qazxsw23');
        labels.value = data24.data;
        return (labels.value.labels)
    } catch (error) {
        console.error('Error fetching data', error);
    }
}

async function getTemperature() {
    try {
        const data24 = await axios.get('https://marder.bieda.it/cms/24?api_key=1qazxsw23');
        temperature.value = data24.data;
        //console.log(temperature.value)
        return (temperature.value.temperature)
    } catch (error) {
        console.error('Error fetching data', error);
    }
}

const data = {
    loaded: false,
    chartData: {
        labels: await getLabels(),
        datasets: [
            {
                label: "chuj",
                data: await getTemperature()
            }
        ]
    }
}

const loaded = true;
</script>