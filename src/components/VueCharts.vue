<template>
    <Chart :size="{ width: 500, height: 400 }" :data="data" :margin="margin" :direction="direction">

        <template #layers>
            <Grid strokeDasharray="2,2" />
            <Line :dataKeys="['name', 'pl']" />
        </template>

    </Chart>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Chart, Grid, Line } from 'vue3-charts'
import axios from 'axios';
import { plByMonth } from '@/data'

export default defineComponent({
    name: 'LineChart',
    components: { Chart, Grid, Line },
    async setup() {
        const data = ref([1,2])
        const direction = ref('horizontal')
        const margin = ref({
            left: 0,
            top: 20,
            right: 20,
            bottom: 0
        })

        try {
            const response = await axios.get('https://marder.bieda.it/cms/dhtData?api_key=1qazxsw23');
            
            data.value = response.data.slice(-24);

            // this.labels = this.chartdata.map((item) => item.readingDate);
            // this.temperature = this.chartdata.map((item) => item.temperature);

        } catch (e) {
            console.error(e)
        }

        console.log(data.value);

        return { data, direction, margin }
    },
})
</script>

<style></style>