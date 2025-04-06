<script setup>
import dayjs from 'dayjs';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const data = ref([]);
let lastData = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('https://danepubliczne.imgw.pl/api/data/synop/station/kolo');
    data.value = response.data;
  } catch (error) {
    console.error('Error fetching data', error);
  }
})
</script>

<template>
  <!-- Navbar begin -->
  <section class="bg-white">
    <div class="hidden bg-greenMain md:flex justify-center divide-x divide-gray-600 space-x-6 p-2">
      <div class="text-black m-1">
        <i class="fa-solid fa-location-crosshairs text-sm"></i>
        Dane IMGW ze stacji Koło
      </div>
      <div class="text-black m-1 pl-3">
        <i class="pi pi-calendar-clock"></i> {{data.data_pomiaru}}, {{data.godzina_pomiaru}}:00
      </div>
      <div class="text-black m-1 pl-3">
        <i class="fa-solid fa-temperature-high text-sm"></i> {{data.temperatura}} °C
      </div>
      <div class="text-black m-1 pl-3">
        <i class="fa-solid fa-droplet"></i> {{data.wilgotnosc_wzgledna}}%
      </div>
      <div class="text-black m-1 pl-3">
        <i class="fa-solid fa-arrows-down-to-line"></i> {{data.cisnienie}} hPa
      </div>
      <div class="text-black m-1 pl-3">
        <i class="fa-solid fa-umbrella"></i> {{data.suma_opadu}} mm
      </div>
    </div>
  </section>
  <!-- Navbar end -->
</template>