<template>
    <div class="container">
        <Line v-if="loaded" :data="chartData" />
    </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

import dayjs from 'dayjs';
import { reactive, ref, isProxy, toRaw } from 'vue';
import axios from 'axios';

export default {
    name: 'LineChart',
    components: { Line },

    methods: {

        async getTemperature() {
            let responseData = (await axios.get('https://marder.bieda.it/cms/24?api_key=1qazxsw23')).data.temperature;
            return responseData;
        },

        async getLabels() {
            let responseData = (await axios.get('https://marder.bieda.it/cms/24?api_key=1qazxsw23')).data.labels;
            return responseData;
        },

        computed: {

            chartData() {
                return {
                    labels: this.getLabels(),
                    datasets: [
                        {
                            label: "chuj",
                            data: this.getTemperature()
                        }
                    ]
                }
            }
        },

        data: () => ({
            loaded: false,
        }),

        async mounted() {
            this.loaded = false

            try {
                const response = await axios.get('https://marder.bieda.it/cms/24?api_key=1qazxsw23');

                this.chartData.labels = response.data.labels

                let arr = response.data.temperature.map((item) => (item));

                //console.log(arr)

                this.chartData.datasets.data = await this.getTemperature()

                //console.log(this.chartData.datasets.data)

                //let test = await this.getTemperature()

                console.log(this.chartData.datasets.data)

                this.loaded = true
            } catch (e) {
                console.error(e)
            }
        }
    }
}
</script>