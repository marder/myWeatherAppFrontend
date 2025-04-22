<script setup>
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
      console.error("Error fetching real estate", error);
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
