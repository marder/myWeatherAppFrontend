<script setup>
import dayjs from 'dayjs';
import { reactive, onBeforeMount, ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const onClickHandler = (page) => {
  console.log(page);
};

const perPage = ref(10);
const currentPage = ref(1);

const state = reactive({
  data: [],
  totalPages: 0,
  isLoading: true,
});

onBeforeMount(async () => {
  try {
    const response = await axios.get("https://marder.bieda.it/api/data/pages?limit=10&page=1");
    state.data = response.data;
    state.totalPages = response.data.totalPages;

    console.log(state.data.results);
    console.log(state.totalPages);

  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    state.isLoading = false;
  }
});

watch(
  [currentPage, perPage],
  async ([currentPage, perPage]) => {
    try {
      const response = await axios.get("https://marder.bieda.it/api/data/pages", {
        params: {
          limit: perPage,
          page: currentPage,
        },
      });
      state.data = response.data;
      state.totalPages = response.data.totalPages;

      console.log(state.data);
      console.log(state.totalPages);

    } catch (error) {
      console.error("Error fetching data...", error);
    } finally {
      state.isLoading = false;
    }
  }
);

const backPage = () => {
  if (currentPage.value !== 1) {
    currentPage.value -= 1;
  }
};

const nextPage = () => {
  if (currentPage.value !== state.totalPages) {
    currentPage.value += 1;
  }
};

const showPaginatedData = computed(() => state.data.results);

const showTotalPages = computed(() => state.totalPages);

const goToPage = (numPage) => {
  currentPage.value = numPage;
};
</script>

<template>
  <section class="bg-yellowMain md:flex justify-center divide-x divide-gray-600 space-x-6 px-8 py-5">
    <div class="w-full max-w-lg flex flex-wrap -mx-3 mb-6">
      <!--
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
          City
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-city" type="text" placeholder="Albuquerque">
      </div>
      -->
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
          Wybierz stronę
        </label>
        <div class="relative">
          <select v-model="currentPage"
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="" aria-label="">
            <option v-if="state.totalPages === 1" :value="1" selected>
              1
            </option>
            <option v-else v-for="(item, index) in state.totalPages" v-bind:key="index" :value="index + 1">
              {{ index + 1 }}
            </option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
          Wyników na stronę
        </label>
        <div class="relative">
          <select v-model="perPage"
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state">
            <option :value="10" selected>10</option>
            <option :value="25">25</option>
            <option :value="50">50</option>
            <option :value="100">100</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="table" class="container mx-auto py-10">
    <h1 class="text-2xl font-bold text-center font-Rubik py-1">Tabela pomiarów</h1>
    <h1 class="text-2xl font-bold text-center font-Rubik py-1 pb-5">(strona: {{ currentPage }} z
      {{ state.totalPages }})</h1>
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
                <tr class="even:bg-gray-100 odd:bg-white border-b" v-for="d in state.data.results" :key="d._id">
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
