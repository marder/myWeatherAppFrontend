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
import { ref, onMounted } from 'vue';
import axios from 'axios';

const data = ref([]);
const temp = ref([]);
const labels = ref([]);

export default {
    name: 'LineChart',
    components: { Line },
    async mounted() {
        try {
            const response = await axios.get('https://marder.bieda.it/cms/dhtData?api_key=1qazxsw23');
            data.value = response.data.slice(-24);

            const test = new Object(data.value);

            test.forEach((i) =>
                console.log(i["readingDate"])
            );

            let lab = []

            test.forEach((i) =>
                lab.push(i["readingDate"])
            );

            labels.value.push(lab)

            console.log(labels.value)

        } catch (error) {
            console.error('Error fetching data', error);
        }
    },
    data() {
        return {
            chartData: {
                labels: labels,
                datasets: [{ data: data }]
            },
            chartOptions: {
                responsive: true
            }
        }
    }
}
</script>