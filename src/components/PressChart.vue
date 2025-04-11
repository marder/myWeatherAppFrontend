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
import { ref } from 'vue';
import axios from 'axios';

const labels = ref([]);
const pressure = ref([]);

async function getLabels() {
    try {
        const data24 = await axios.get('https://marder.bieda.it/api/24?api_key=1qazxsw23');
        labels.value = data24.data;
        return (labels.value.labels)
    } catch (error) {
        console.error('Error fetching data', error);
    }
}

async function getPressure() {
    try {
        const data24 = await axios.get('https://marder.bieda.it/api/24?api_key=1qazxsw23');
        pressure.value = data24.data;
        //console.log(temperature.value)
        return (pressure.value.pressure)
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
                label: "ciśnienie",
                data: await getPressure(),
                borderColor: '#008000',
                backgroundColor: '#98fb98',
                borderWidth: 2,
                pointStyle: 'circle',
                pointRadius: 5,
                pointHoverRadius: 10,
                type: 'line',
                order: 1
            }
        ]
    }
}

const loaded = true;
</script>