<template>
  <div class="p-20 flex flex-col items-start space-y-5">

    <button class="btn">Hello daisyui</button>

    <div class="bg-base-300 rounded-b-box rounded-se-box relative overflow-x-auto">
      <div
        class="preview border-base-300 bg-base-100 rounded-b-box rounded-se-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 [border-width:var(--tab-border)] undefined"
        style="">
        <div class="badge">default</div>
        <div class="badge badge-neutral">neutral</div>
        <div class="badge badge-primary">primary</div>
        <div class="badge badge-secondary">secondary</div>
        <div class="badge badge-accent">accent</div>
        <div class="badge badge-ghost">ghost</div>
      </div>
    </div>

    <div>
      <p>Nom de la province : {{ provinceData.value }}</p>
      <!-- Autres éléments de vue ici -->
    </div>
    <div class="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
      <div class="dropdown dropdown-end mb-32">
        <div tabindex="0" role="button" class="m-1 btn">Click</div>
        <ul tabindex="0" class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li v-for="province in provincesData" :key="province._id">
            <a>{{ province.value }}</a>
          </li>
        </ul>
      </div>
    </div>



  </div>
</template>


<script setup>
import { ref } from 'vue';

import ProvinceService from "@/services/Provinces";



const provinceData = ref(null); // Initialiser avec null ou une valeur par défaut
const provincesData = ref(null); //

fetchProvinceData('65e4dfcb2951efc25ce318d7');
fetchProvincesData();
async function fetchProvinceData(id) {
  try {
    const data = await ProvinceService.FindOne(id);
    provinceData.value = data; // Stockez les données dans votre composant
  } catch (error) {
    console.error("Erreur lors de l'appel à l'API :", error);
  }
}

async function fetchProvincesData() {
  try {
    const data = await ProvinceService.FindAll();
    provincesData.value = data; // Stockez les données dans votre composant
  } catch (error) {
    console.error("Erreur lors de l'appel à l'API :", error);
  }
}

</script>@/services/Province