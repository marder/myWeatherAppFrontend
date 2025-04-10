<script setup>
import dayjs from 'dayjs';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const data = ref([]);
let lastData = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('https://marder.bieda.it/api/data?api_key=1qazxsw23');
    data.value = response.data.slice(-24);
    lastData.value = data.value.reverse();
  } catch (error) {
    console.error('Error fetching data', error);
  }
})
</script>

<template>
  <section id="table" class="container mx-auto py-10">
    <div class="flex flex-col">
      <div class="overflow-x-auto shadow-md sm:rounded-lg">
        <div class="inline-block min-w-full align-middle">
          <div class="overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
              <thead class="bg-gray-200 border-b">
                <tr>
                  <th scope="col" class="w-1/3 text-sm font-medium text-gray-900 px-4 py-2 text-left">Data</th>
                  <th scope="col" class="w-1/3 text-sm font-medium text-gray-900 px-4 py-2 text-left">Temperatura</th>
                  <th scope="col" class="w-1/3 text-sm font-medium text-gray-900 px-4 py-2 text-left">Wilgotność</th>
                  <th scope="col" class="w-1/3 text-sm font-medium text-gray-900 px-4 py-2 text-left">Ciśnienie</th>
                  <th scope="col" class="w-1/3 text-sm font-medium text-gray-900 px-4 py-2 text-left">Opis</th>
                </tr>
              </thead>
              <tbody>
                <tr class="even:bg-gray-100 odd:bg-white border-b" v-for="d in lastData" :key="d._id">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{
                    dayjs(d.readingDate).format('YYYY-MM-DD, HH:mm:ss') }}</td>
                  <td class="text-sm text-gray-900 font-light px-4 py-1 whitespace-nowrap">{{ d.temperature }} °C</td>
                  <td class="text-sm text-gray-900 font-light px-4 py-1 whitespace-nowrap">{{ d.humidity }}%</td>
                  <td class="text-sm text-gray-900 font-light px-4 py-1 whitespace-nowrap">{{ d.pressure }} hPa</td>
                  <td class="text-sm text-gray-900 font-light px-4 py-1 whitespace-nowrap">{{ d.description }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>