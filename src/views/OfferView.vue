<script setup>
import photo from "@/assets/img/2.jpg";
</script>

<template>
    <section class="bg-gray-200 md:flex justify-center divide-x divide-gray-600 space-x-6 px-16 py-8">
        <div class="container px-32">
            <h1 class="max-w-md text-4xl font-bold text-center font-Rubik md:text-5xl md:text-left">
                Nasza oferta
            </h1>
        </div>
    </section>
    <section id="hero">
        <!-- Flex Container -->
        <div class="container flex flex-col-reverse items-center mx-auto md:px-24 space-y-0 md:space-y-0 md:flex-row">
            <div>
                <div class="flex flex-col p-12 mb-42 space-y-6">
                    <h1 class="max-w-md text-3xl font-bold text-center font-Rubik md:text-3xl md:text-left">
                        Oferta główna
                    </h1>
                    <h1 class="max-w-md text-1xl font-bold text-center font-Rubik md:text-1xl md:text-left">
                        Naszej pracowni geodezyjnej
                    </h1>
                    <ul class="list-decimal">
                        <li>usługi geodezyjne i kartograficzne,</li>
                        <li>pośrednictwo w obrocie nieruchomościami,</li>
                        <li>przygotowanie dokumentacji środowiskowej (karty informacyjne przedsięwzięcia/ raporty
                            środowiskowe/ analizy środowiskowe/ analizy akustyczne/ itp.),</li>
                        <li>przygotowanie dokumentacji do decyzji o warunkach zabudowy i decyzji pozwolenia na budowę.
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Image -->
            <div class="p-6 md:w-1/2">
                <img class="shadow-2xl" :src="photo" alt="" />
            </div>
        </div>
        <div class="container flex flex-col-reverse items-center mx-auto md:px-24 space-y-0 md:space-y-0 md:flex-row">
            <div>
                <div class="flex flex-col p-12 mb-42 space-y-6">
                    <h1 class="max-w-md text-3xl font-bold text-center font-Rubik md:text-3xl md:text-left">
                        Ponadto oferujemy
                    </h1>
                    <ul class="list-decimal">
                        <li>mapy do celów projektowych w formie analogowej i numerycznej (pod budowę obiektów
                            budowlanych, sieci, przyłączy, itp.),</li>
                        <li>tyczenia, prace realizacyjne (tyczenia obiektów budowlanych, obiektów liniowych, sieci,
                            przyłączy, itp.),</li>
                        <li>inwentaryzacje powykonawcze (obiektów budowlanych, sieci, przyłączy, itp.),</li>
                        <li>podziały nieruchomości (zurbanizowanych, rolnych/leśnych),</li>
                        <li>połączenia działek ewidencyjnych,</li>
                        <li>rozgraniczenia nieruchomości (ustalenie granic nieruchomości),</li>
                        <li>wznowienia znaków granicznych, wyznaczenia punktów granicznych, ustalenie przebiegu granic
                            działek ewidencyjnych,</li>
                        <li>sporządzanie dokumentacji do celów prawnych (mapy z projektem podziału nieruchomości, mapy
                            do ustalenia służebności gruntowych, inne opracowania geodezyjne do celów prawnych, itp.),
                        </li>
                        <li>geodezyjna obsługa inwestycji,</li>
                        <li>badanie stanu prawnego nieruchomości,</li>
                        <li>sporządzanie wykazów synchronizacyjnych.</li>
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