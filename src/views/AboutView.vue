<script setup>
import photo from "@/assets/img/2.jpg";
</script>

<template>
    <section class="bg-gray-200 md:flex justify-center divide-x divide-gray-600 space-x-6 px-16 py-8">
        <div class="container px-32">
            <h1 class="max-w-md text-4xl font-bold text-center font-Rubik md:text-5xl md:text-left">
                O projekcie
            </h1>
        </div>
    </section>
    <section id="hero">
        <!-- Flex Container -->
        <div class="container flex flex-col-reverse items-center mx-auto md:px-24 space-y-0 md:space-y-0 md:flex-row">
            <!-- Left item -->
            <div>
                <div class="flex flex-col p-12 mb-42 space-y-6">
                    <h1 class="max-w-md text-3xl font-bold text-center font-Rubik md:text-3xl md:text-left">
                        Przemysław Junkiert
                    </h1>
                    <h1 class="max-w-md text-1xl font-bold text-center font-Rubik md:text-1xl md:text-left">
                        właściciel Pracowni Geodezyjnej JUNKIERT INVESTMENT
                    </h1>
                    <ul class="list-disc">
                        <li>Magister gospodarki nieruchomościami</li>
                        <li>Inżynier geodeta</li>
                        <li>Geodeta uprawniony w zakresie 1 i 2 (uprawnienia GUGiK 23442)</li>
                        <li>Biegły Sądowy przy Sądzie Okręgowym w Koninie</li>
                        <li>Pośrednik w obrocie nieruchomości (licencja zawodowa Ministra Infrastruktury nr 14488)</li>
                        <li>Kierownik prac geodezyjnych</li>
                    </ul>
                </div>
            </div>
            <!-- Image -->
            <div class="p-6 md:w-1/2">
                <img class="shadow-2xl" :src="photo" alt="" />
            </div>
        </div>
        <div class="container flex flex-col-reverse items-center mx-auto md:px-24 space-y-0 md:space-y-0 md:flex-row">
            <!-- Left item -->
            <div>
                <div class="flex flex-col p-12 mb-42 space-y-6">
                    <h1 class="max-w-md text-3xl font-bold text-center font-Rubik md:text-3xl md:text-left">
                        Julita Szalewska
                    </h1>
                    <h1 class="max-w-md text-1xl font-bold text-center font-Rubik md:text-1xl md:text-left">
                        właściciel Pracowni Geodezyjnej JUNKIERT INVESTMENT
                    </h1>
                    <ul class="list-disc">
                        <li>Magister gospodarki nieruchomościami</li>
                        <li>Inżynier geodeta</li>
                        <li>Geodeta uprawniony w zakresie 1 i 2 (uprawnienia GUGiK 23442)</li>
                        <li>Biegły Sądowy przy Sądzie Okręgowym w Koninie</li>
                        <li>Pośrednik w obrocie nieruchomości (licencja zawodowa Ministra Infrastruktury nr 14488)</li>
                        <li>Kierownik prac geodezyjnych</li>
                    </ul>
                </div>
            </div>
            <!-- Image -->
            <div class="p-6 md:w-1/2">
                <img class="shadow-2xl" :src="photo" alt="" />
            </div>
        </div>
        <div class="container flex flex-col-reverse items-center mx-auto md:px-24 space-y-0 md:space-y-0 md:flex-row">
            <!-- Left item -->
            <div>
                <div class="flex flex-col p-12 mb-42 space-y-6">
                    <h1 class="max-w-md text-3xl font-bold text-center font-Rubik md:text-3xl md:text-left">
                        Malwina Rosiak
                    </h1>
                    <h1 class="max-w-md text-1xl font-bold text-center font-Rubik md:text-1xl md:text-left">
                        właściciel Pracowni Geodezyjnej JUNKIERT INVESTMENT
                    </h1>
                    <ul class="list-disc">
                        <li>Magister gospodarki nieruchomościami</li>
                        <li>Inżynier geodeta</li>
                        <li>Geodeta uprawniony w zakresie 1 i 2 (uprawnienia GUGiK 23442)</li>
                        <li>Biegły Sądowy przy Sądzie Okręgowym w Koninie</li>
                        <li>Pośrednik w obrocie nieruchomości (licencja zawodowa Ministra Infrastruktury nr 14488)</li>
                        <li>Kierownik prac geodezyjnych</li>
                    </ul>
                </div>
            </div>
            <!-- Image -->
            <div class="p-6 md:w-1/2">
                <img class="shadow-2xl" :src="photo" alt="" />
            </div>
        </div>
    </section>
</template>