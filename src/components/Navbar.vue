<script setup>
import { RouterLink, useRoute } from "vue-router";

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
}
</script>

<template>
  <!-- Navbar begin -->
  <section class="bg-white">
    <div class="hidden bg-greenMain md:flex justify-center divide-x divide-gray-600 space-x-6 p-2">
      <div class="text-black m-1">
        <i class="pi pi-map-marker"></i>
        xxx
      </div>
      <div class="text-black m-1 pl-3">
        <i class="pi pi-phone"></i> xxx
      </div>
      <div class="text-black m-1 pl-3">
        <i class="pi pi-calendar-clock"></i> xxx
      </div>
    </div>
    <nav class="relative container mx-auto px-10 py-5">
      <!-- Flex container begin -->
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <RouterLink class="md:pl-28" to="/">
          <div class="text-gray-600 font-Rubik text-3xl"><i class="fa-solid fa-sun text-yellowMain"></i> myWeatherApp</div>
        </RouterLink>
        <!-- Logo end -->
        <!-- Menu items -->
        <div class="hidden md:flex space-x-12">
          <RouterLink to="/"
            :class="[isActiveLink('/') ? 'text-black' : 'text-gray-600', 'font-Rubik', 'hover:text-black', 'text-transform: uppercase']">
            Dane z 24h
          </RouterLink>
          <RouterLink to="/offer"
            :class="[isActiveLink('/offer') ? 'text-black' : 'text-gray-600', 'font-Rubik', 'hover:text-black', 'text-transform: uppercase']">
            Odczyty
          </RouterLink>
          <RouterLink to="/about"
            :class="[isActiveLink('/about') ? 'text-black' : 'text-gray-600', 'font-Rubik', 'hover:text-black', 'text-transform: uppercase']">
            O projekcie
          </RouterLink>
        </div>
        <!-- Hamburger Icon -->
        <button id="menu-btn" class="block hamburger md:hidden focus:outline-none">
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>
      <!-- Mobile Menu -->
      <div class="md:hidden">
        <div id="menu"
          class="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
          <a href="/" class="hover:text-orange-500">Główna</a>
          <a href="/offer" class="hover:text-orange-500">Oferta</a>
          <a href="/about" class="hover:text-orange-500">O nas</a>
          <a href="/contact" class="hover:text-orange-500">Kontakt</a>
        </div>
      </div>
    </nav>
  </section>
  <!-- Navbar end -->
</template>