<script setup>
import dayjs from 'dayjs';
import { reactive, onMounted, onBeforeMount, ref, computed, watch } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();

/*
const queryPlace = route.query.place;
console.log(queryPlace);
*/

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
  <section class="bg-yellowMain md:flex justify-center divide-x divide-gray-600 space-x-6 px-8 py-8">
    <div class="container sm:px-12">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Current page
          </label>
        </div>
        <div class="md:w-2/3">
          <input v-model="currentPage"
            class="bg-gray-200 appearance-none border-2 border-gray-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text" value="1">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Per page
          </label>
        </div>
        <div class="md:w-2/3">
          <input v-model="perPage"
            class="bg-gray-200 appearance-none border-2 border-gray-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text" value="10">
        </div>
      </div>
    </div>
  </section>
  <!--
  <section class="bg-yellowMain md:flex justify-center divide-x divide-gray-600 space-x-6 px-8 py-8">
    <div class="container sm:px-12">
      <h1 class="max-w-md text-2xl font-bold text-center font-Rubik md:text-2xl md:text-left sm:text-left sm:text-1xl">
        Dane z 12h
      </h1>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Username">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="******************">
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">
            Sign In
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  </section>
  -->
  <!--
  <div class="">
    <div class="text-center text-lg-start bg-light">
      <h4 class="text-center pt-3">Opcje wyszukiwania</h4>
      <div class="container text-dark p-3">
        <form class="row g-3">
          <div class="col-md-4">
            <div class="input-group me-2">
              <span class="input-group-text" id="basic-addon1">Obręb</span>
              <input v-model="place" type="text" class="form-control" placeholder="Podaj obręb" aria-label="Username"
                aria-describedby="basic-addon1" />
            </div>
          </div>

          <div class="col-md-3">
            <div class="input-group me-2">
              <span class="input-group-text" id="basic-addon1">Numer</span>
              <input v-model="number" type="text" class="form-control" placeholder="Podaj numer działki"
                aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </div>
          <div class="col-md-2">
            <div class="input-group me-2">
              <button class="btn btn-outline-secondary" type="button" @click="backPage">
                <i class="bi bi-arrow-left-square"></i>
              </button>
              <select v-model="currentPage" class="form-select" id="inputGroupSelect03"
                aria-label="Example select with button addon">
                <option v-if="state.totalPages === 1" :value="1" selected>
                  1
                </option>
                <option v-else v-for="(item, index) in state.totalPages" v-bind:key="index" :value="index + 1">
                  {{ index + 1 }}
                </option>
              </select>
              <button class="btn btn-outline-secondary" type="button" @click="nextPage">
                <i class="bi bi-arrow-right-square"></i>
              </button>
            </div>
          </div>
          <div class="col-md-3">
            <div class="input-group me-2">
              <label class="input-group-text" for="inputGroupSelect01">Wyniki na stronę</label>
              <select v-model="perPage" class="form-select me-2">
                <option :value="10" selected>10</option>
                <option :value="25">25</option>
                <option :value="50">50</option>
                <option :value="100">100</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
-->


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
  <!--
    <h1 class="text-center m-4 display-6">Wykaz nieruchomości Gminy Dobra (strona: {{ currentPage }} z
      {{ state.totalPages }})</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Lp.</th>
          <th scope="col">Obręb</th>
          <th scope="col">Nr ewid.</th>
          <th scope="col">Powierzchnia</th>
          <th scope="col">Nr KW</th>
          <th scope="col">Wartość księgowa</th>
          <th scope="col">Kategoria</th>
          <th scope="col">Roszczenia</th>
          <th scope="col">Akcja</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="r in state.realestate.results" :key="r._id">
          <td>{{ r.id }}</td>
          <td>{{ r.place }}</td>
          <td>{{ r.plotnmbr }}</td>
          <td>{{ r.area }}</td>
          <td>{{ r.register }}</td>
          <td>{{ r.value }}</td>
          <td>{{ r.category }}</td>
          <td>{{ r.claims }}</td>
          <td>
            <RouterLink :to="'/realestate/' + r._id" class="btn btn-success btn-sm mx-2" role="button">Więcej
            </RouterLink>
            <RouterLink class="btn btn-primary btn-sm mx-2" :to="`/realestate/edit/${r._id}`" role="button">Edytuj
            </RouterLink>
            <button @click="deleteRealEstate(r._id)" class="btn btn-danger btn-sm mx-2">
              Usuń
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
-->
</template>
