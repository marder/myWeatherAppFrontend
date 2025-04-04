<script setup>
import photo from "@/assets/img/2.jpg";
import { ref, onMounted } from 'vue';
import axios from 'axios';

const data = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('https://marder.bieda.it/dhtData?api_key=1qazxsw23');
    data.value = response.data;
    console.log(data.value);
  } catch (error) {
    console.error('Error fetching data', error);
  }
})
</script>

<template>
  <!-- Hero Section -->

  <section id="table">
    <!-- Flex Container -->
    <div class="container">

      <h1 class="text-center mx-4">Odczyty pogody</h1>
      <table class="table-auto">
        <thead>
          <tr>
            <th>Data</th>
            <th>Temperatura</th>
            <th>Wilgotność</th>
            <th>Ciśnienie</th>
            <th>Opis</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="d in data" :key="d._id">
            <td>{{ d.readingDate }}</td>
            <td>{{ d.temperature }}</td>
            <td>{{ d.humidity }}</td>
            <td>{{ d.pressure }}</td>
            <td>{{ d.description }}</td>
          </tr>
        </tbody>
      </table>

    </div>
  </section>
</template>