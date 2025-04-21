<script setup>
import photo from "@/assets/img/2.jpg";
</script>

<template>
    <section class="bg-gray-200 md:flex justify-center divide-x divide-gray-600 space-x-6 px-8 py-8 sm:px-1">
        <div class="container sm:px-12">
            <h1 class="max-w-md text-3xl font-bold text-center font-Rubik md:text-3xl md:text-left sm:text-left">
                O projekcie
            </h1>
        </div>
    </section>

    <section id="hero">
        <!-- Flex Container -->
        <div
            class="container flex flex-col-reverse items-center mx-auto md:px-24 space-y-0 md:space-y-0 md:flex-row striped">
            <!-- Left item -->
            <div class="flex flex-col p-12 mb-42 space-y-6">
                <h1 class="text-4xl font-bold text-center font-Rubik md:text-5xl md:text-left">
                    Kilka słów o projekcie...
                </h1>
                <p class="text-center text-gray-800 md:text-left">
                    Projekt myWeatherApp to wypadkowa kilku innych, pomniejszych projektów, które zostały zrealizowane
                    przez mnie podczas nauki podstaw programowania. Pod koniec 2021 roku zakupiłem pierwszą płytkę
                    Arduino wraz z podstawowymi czujnikami środowiskowymi. Po opanowaniu podstaw pomyślałem, że fajnie
                    by było publikować te dane gdzieś online. Jednak do tego potrzebne były mikrokontrolery obsługujące
                    wi-fi.
                </p>
                <p class="text-center text-gray-800 md:text-left">
                    Po ogarnięciu kilku tutoriali z przesyłania danych do gotowych aplikacji za pomocą ich API,
                    stwierdziłem, że
                    prawdziwym wyzwaniem będzie stworzenie własnej apki. Aby ją napisać, zacząłem uczyć się JavaScript,
                    a dokładniej Node.js. I tak, po jakimś czasie, powstał mój pierwszy backendowy serwer z interfejsem
                    REST API do gromadzenia i publikowania danych przesyłanych przez mojego klienta, czyli urządzenie z
                    sensorami środowiskowymi.
                </p>
                <p class="text-center text-gray-800 md:text-left">
                    Teraz wystarczyło tylko przygotować „jakąś-w-miarę-czytelną-stronkę-www” do publikowania danych z
                    serwera. W tym celu również korzystam z technologii opartej na JavaScript. Najbardziej rozsądną
                    (czyt. najprostszą do ogarnięcia) opcją okazało się wykorzystanie 3 wersji frameworka VueJS. Aby
                    ogarnąć style używam z frameworka TaiwindCSS, a do generowania wykresów korzystam z ChartJS.
                </p>
                <p class="text-center text-gray-800 md:text-left">
                    To wszystko trzeba jeszcze gdzieś hostować. Podczas intensywnych poszukiwań najlepszego do moich
                    amatorskich projektów hostingu trafiłem na Mikr.us oferujący tanie i dobre serwery VPS dla
                    pasjonatów. Wystarczyło tylko ogarnąć podstawy Linuxa, Ngnix i kilku innych technologii…
                </p>
                <p class="text-center text-gray-800 md:text-left">
                    I voilà… Po 4 latach, w 2025 roku, prezentuję Wam pierwszą wersję mojej apki. Trochę czasu minęło,
                    ale co się nauczyłem, to moje.
                </p>

                <h3 class="text-2xl font-bold text-center font-Rubik md:text-2xl md:text-left">Wykorzystane urządzenia i
                    technologie</h3>

                <p class="text-center text-gray-800 md:text-left"><strong>Klient:</strong> Arduino MKR WiFi 1010 z
                    nakładką MKR IoT
                    Carrier oraz dodatkowym czujnikiem BME280 (złącze Grove) programowany w Arduino C++, zasilany
                    baterią 18650 Li-Ion 3.7V oraz powerbankiem.</p>

                <p class="text-center text-gray-800 md:text-left"><strong>Backend:</strong> REST API w wykorzystaniem
                    Node.js wraz z
                    frameworkiem ExpressJS, baza danych MongoDB.</p>

                <p class="text-center text-gray-800 md:text-left"><strong>Fronend:</strong> VueJS 3, Tailwind CSS do
                    stylów oraz ChartJS do wykresów.</p>

                <p class="text-center text-gray-800 md:text-left"><strong>Hosting:</strong> Virtual Private Server w
                    Mikr.us, Ubuntu oraz Nginx.</p>

                <p class="text-center py-10 text-gray-800 md:text-left">
                    <strong>Marcin Derucki</strong>
                </p>
            </div>

        </div>
    </section>
</template>