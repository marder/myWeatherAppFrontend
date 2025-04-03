<script setup>
import photo from "@/assets/img/2.jpg";
</script>

<template>
  <!-- Hero Section -->
  <section id="hero">
    <!-- Flex Container -->
    <div class="container flex flex-col-reverse items-center mx-auto md:px-24 space-y-0 md:space-y-0 md:flex-row striped">
      <!-- Left item -->
      <div class="flex flex-col p-12 mb-42 space-y-12 md:w-1/2">
        <h1 class="max-w-md text-4xl font-bold text-center font-Rubik md:text-5xl md:text-left">
          O nas
        </h1>
        <p class="max-w-sm text-center text-gray-800 md:text-left">
          Pracownia Geodezyjna JUNKIERT INVESTMENT to firma zbudowana na bazie wieloletniej praktyki geodezyjnej oraz
          doświadczeniu zawodowym przekazywanym od pokoleń. Początek firmy to 2011 rok. Od tego czasu ciągle się
          rozwijamy i...
        </p>
        <p class="max-w-sm text-center text-gray-800 md:text-left">
          Naszą specjalizacją jest geodezja prawna (wszystkie problemy związane z nieruchomościami: stany prawne
          nieruchomości, spory graniczne, zasiedzenia nieruchomości, służebności gruntowe, itp.)
          Jako właściciel firmy swoje doświadczenie zbierałem od najmłodszych lat pracując u boku mojego dziadka,
          geodety z krwi i kości, który przez ponad 40 lat był biegłym sądowym. Również 20 lat pracy w jednostkach
          samorządu terytorialnego (Urząd Gminy, Urząd Miasta oraz Urząd Gminy i Miasta) dały mi szeroką wiedzę o
          samorządzie, problemach ludzi oraz sposobie i możliwości ich rozwiązania.
        </p>
        <div class="flex justify-center md:justify-start">
          <a href="#"
            class="hidden p-3 px-6 pt-2 text-black bg-greenMain outline outline-offset-2 hover:bg-white md:block">Dowiedz
            się więcej...</a>
        </div>
      </div>
      <!-- Image -->
      <div class="p-6 md:w-1/2">
        <img class="shadow-2xl" :src="photo" alt="" />
      </div>
    </div>
  </section>
</template>