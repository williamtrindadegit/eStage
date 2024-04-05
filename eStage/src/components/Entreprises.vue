<template>
    <section class="m-5 p-10 bg-gray-100 rounded-lg">
      <h1 class="text-4xl font-bold mt-20">Entreprises</h1>
  
      <router-link to="/addenterprise" class="mt-20 btn btn-ghost text-md m-1 p-2 border-solid border-2 text-white hover:text-black bg-blue-400 mx-2">
        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
        </svg>
        Ajouter une entreprise
      </router-link>
  
      <div class="grid sm:grid-cols-1 lg:grid-cols-2 mt-8">
        <div v-for="enterprise in enterprises" :key="enterprise._id" class="rounded overflow-hidden shadow-lg m-2 cursor-pointer" @click="onDetails(enterprise._id)" >
          <div className="bg-white hover:bg-slate-200 flex flex-row items-center p-4">
            <div>
            <img className="w-24 h-24 p-0 m-2 rounded-md"
            src="https://api.dicebear.com/8.x/icons/svg?seed=Casper&backgroundColor=90caf9&icon=building"
            alt="avatar" />
          <!-- <img class="w-24 h-24" :src="enterprise.image" :alt="enterprise.name"> Puisque non fonctionnel dans l'API -->
         </div>
          <div class="px-6 py-4">
            <button class="font-bold text-xl mb-2">
                <span class="pr-2 mdi mdi-eye-circle text-slate-800 text-lg mr-4">{{ enterprise.name }}</span>
            </button>
            <p>{{ enterprise.address }}</p>
            <p>{{ enterprise.city }} {{ enterprise.postalCode }}</p>
            <br>
            <p>Téléphone : {{ enterprise.phone }}</p>
            <p>Courriel : {{ enterprise.email }}</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import EnterpriseService from "@/services/Enterprises";
  import { useRouter } from "vue-router";

const router = useRouter();
  const enterprises = ref([]);
  
  onMounted(async () => {
    try {
      const response = await EnterpriseService.FindAll();
      enterprises.value = response;
      console.log(enterprises.value);
    } catch (error) {
      console.error("Erreur lors de la récupération des entreprises:", error);
    }
  });

  function onDetails(idString) {
    router.push({ name: "zoomEnterprise", params: { id: idString } });
  }
  </script>
  
  <style>

  </style>
  