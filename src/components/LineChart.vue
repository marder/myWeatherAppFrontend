<template>
    <div class="container mx-auto py-10">
        <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
    </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

import dayjs from 'dayjs';
import { ref, isProxy, toRaw } from 'vue';
import axios from 'axios';

const data = ref([]);
// const temp = ref([]);
// const labels = ref([]);

export default {
    name: 'LineChart',
    components: { Line },
    data: () => {
        return {
            loaded: false,
            chartData: null,
            labels: [],
            temperature: []
        }
    },
    async mounted() {
        this.loaded = false;

        try {
            const response = await axios.get('https://marder.bieda.it/cms/dhtData?api_key=1qazxsw23');
            data.value = response.data.slice(-24);

            let cD = toRaw(data.value);

            this.labels = cD.map((item) => item.readingDate);
            this.temperature = cD.map((item) => item.temperature);

            console.log(this.labels);
            console.log(this.temperature);

            this.loaded = true;

        } catch (error) {
            console.error('Error fetching data', error);
        }
    },
    data() {
        return {
            chartData: {
                labels: this.labels,
                datasets: [{ data: this.temperature }]
            },
            chartOptions: {
                responsive: true
            }
        }
    }
}
</script>