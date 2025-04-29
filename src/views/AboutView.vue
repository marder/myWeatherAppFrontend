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
                <h1 class="text-2xl font-bold text-center font-Rubik md:text-2xl md:text-left">
                    🌤️ Projekt myWeatherApp, czyli jak z czujnika i hektolitrów kawy zrobić pogodowego potwora
                </h1>
                <p class="text-center text-gray-800 md:text-left">
                    Dawno, dawno temu (czyli w 2021), w krainie kodu i niekończących się tutoriali, pewien człowiek
                    zakupił Arduino. Nie wiedział jeszcze, że ta niepozorna płytka z kilkoma świecącymi LED-ami zmieni
                    jego życie... i zatopi go w niekończącym się morzu dokumentacji.
                </p>
                <p class="text-center text-gray-800 md:text-left">
                    <strong>🔧 Zaczęło się niewinnie...</strong>
                    Zestaw startowy: Arduino, kilka czujników środowiskowych i ambitny plan: "Zróbmy coś, co pokazuje
                    temperaturę i nie wybucha". Po ogarnięciu, gdzie podłączyć plus, a gdzie minus, przyszła myśl:
                    <i>Ej,
                        fajnie by było wrzucać te dane do internetu, nie?</i> No ale żeby to zrobić, trzeba było czegoś
                    z Wi-Fi.
                    Czyli – czas na upgrade sprzętu.
                </p>
                <p class="text-center text-gray-800 md:text-left">
                    <strong>📡 Z Arduino do chmur(y).</strong>
                    Po kilku przygodach z mikrokontrolerami, które próbowały złapać Wi-Fi jak kot laser, dotarłem do
                    punktu, w którym dane z sensorów potrafiły lecieć do zewnętrznych serwisów. Ale to było zbyt mało
                    ekscytujące. Postanowiłem zrobić własną apkę. Bo czemu by nie cierpieć bardziej?
                </p>
                <p class="text-center text-gray-800 md:text-left">
                    W ruch poszło Node.js, czyli JavaScript na sterydach. Powstał mój pierwszy backend – REST API, które
                    grzecznie zbierało dane od czujnika i udawało, że wszystko działa bez wyjątku.
                </p>
                <p class="text-center text-gray-800 md:text-left">
                    <strong>🖼️ A teraz front, żeby to wyglądało.</strong>
                    Bo przecież dane są nudne, dopóki nie zobaczysz ich na ładnym wykresie! Wziąłem VueJS 3 – bo wygląda
                    nowocześnie i nie krzyczy na mnie tak bardzo, jak React. Do stylów dorzuciłem TailwindCSS – czyli
                    framework, który wygląda jak ktoś rzucił Scrabble na klawiaturę <kbd
                        class="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">(p-4,
                        text-gray-700, bg-blue-100)</kbd>,
                    ale działa. Wykresy? ChartJS. Linia rośnie – znaczy ciepło, spada – znaczy zimno. Magia.
                </p>
                <p class="text-center text-gray-800 md:text-left">
                    <strong>🧠 Ale gdzie to wszystko wrzucić?</strong>
                    Tu wchodzi na scenę Mikr.us – hosting, który rozumie potrzeby amatora-programisty z budżetem
                    studenckim. VPS? Jest. Linux? Jest. Nginx? Trochę płakałem, ale też jest. Po kilku godzinach
                    googlowania „jak to w ogóle działa” udało się to wszystko odpalić. System działa. Nikt nie zginął.
                </p>
                <p class="text-center text-gray-800 md:text-left">
                    <strong>🎉 I tak oto...</strong>
                    W roku 2025, po 4 latach walki z kodem, kablami, brakiem snu i z samym sobą – narodził się
                    myWeatherApp. No dobra... Może nie 4 lata, bo tyle to ja się poszczególnych rzeczy uczyłem. Sam
                    projekt powstał z
                    grubsza w 2 miesiące. Może nie zmieni świata, ale za to robi dokładnie to, co obiecuje: pokazuje
                    pogodę... z
                    mojej skrzynki z elektroniką. 🚀
                </p>

                <h3 class="text-2xl font-bold text-center font-Rubik md:text-2xl md:text-left">🧰 Użyte komponenty –
                    czyli z czego zbudowałem tego potwora Frankensteina</h3>

                <p class="text-center text-gray-800 md:text-left"><strong>🧠 Klient (czyli moje zmysły):</strong>
                    Arduino MKR WiFi 1010, nakładka MKR IoT Carrier, czujnik BME280 (Grove – wtyk, nie czary), kod w
                    Arduino C++, zasilanie: bateria 18650 Li-Ion 3.7V + niezawodny powerbank z promocji.</p>

                <p class="text-center text-gray-800 md:text-left"><strong>🗄️ Backend (czyli serce operacji):</strong>
                    Node.js + ExpressJS, REST API jak się patrzy, Baza danych MongoDB (czyli moje cyfrowe archiwum
                    pogody).</p>

                <p class="text-center text-gray-800 md:text-left"><strong>🖥️ Frontend (czyli co widzą ludzie i nie
                        uciekają):</strong> VueJS 3, TailwindCSS (1000 klas, żadnych !important), ChartJS – bo wykresy
                    są cool.</p>

                <p class="text-center text-gray-800 md:text-left"><strong>📦 Hosting (czyli gdzie to wszystko
                        żyje):</strong> VPS od Mikr.us, Ubuntu (czasem łaskawy), Nginx (czasem nie).</p>

                <p class="text-center py-5 text-gray-800 md:text-left">
                    <strong>Marcin Derucki</strong>
                </p>
            </div>

        </div>
    </section>
</template>