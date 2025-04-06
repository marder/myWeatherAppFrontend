<template>
    <div class="container">
        <Bar v-if="loaded" :data="chartData" />
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import axios from 'axios';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
    props: {
        label: {
            type: Array
        },
        chartData: {
            type: Array
        },
    },
    async mounted() {
        this.loaded = false

        try {
            const response = await axios.get('https://marder.bieda.it/cms/dhtData?api_key=1qazxsw23');
            this.chartdata = response.data.slice(-24);

            this.labels = this.chartdata.map((item) => item.readingDate);
            this.temperature = this.chartdata.map((item) => item.temperature);

            console.log(this.labels);
            console.log(this.temperature);

            this.loaded = true;

        } catch (e) {
            console.error(e)
        }
    },
    data: () => ({
        loaded: false,
        chartData: {
            labels: ['January', 'February', 'March'],
            datasets: [
                {
                    label: 'Data One',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12]
                }]
        }
    }),

}
</script>