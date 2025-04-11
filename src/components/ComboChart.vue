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
const temperature = ref([]);
const humidity = ref([]);
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

async function getTemperature() {
    try {
        const data24 = await axios.get('https://marder.bieda.it/api/24?api_key=1qazxsw23');
        temperature.value = data24.data;
        //console.log(temperature.value)
        return (temperature.value.temperature)
    } catch (error) {
        console.error('Error fetching data', error);
    }
}

async function getHumidity() {
    try {
        const data24 = await axios.get('https://marder.bieda.it/api/24?api_key=1qazxsw23');
        humidity.value = data24.data;
        //console.log(temperature.value)
        return (humidity.value.humidity)
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
                label: "temperatura",
                data: await getTemperature(),
                borderColor: '#b30000',
                backgroundColor: '#cd0000',
                pointStyle: 'circle',
                pointRadius: 5,
                pointHoverRadius: 10,
                borderWidth: 2,
                order: 0
            },
            {
                label: "wilgotność",
                data: await getHumidity(),
                pointStyle: 'circle',
                pointRadius: 5,
                pointHoverRadius: 10,
                borderColor: '#1e90ff',
                backgroundColor: '#87cefa',
                borderWidth: 2,
                type: 'line',
                order: 1
            }
        ]
    }
}

const loaded = true;
</script>