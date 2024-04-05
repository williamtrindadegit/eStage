<template>
  <div class="container">
    <div class="flex ml-8 mt-8">
      <div class="bg-amber-500 w-1 h-14 "></div>
      <div class="ml-4">
        <h3 class="text-xl">Demande de stage</h3>
        <h4 class="text-3xl text-amber-500">{{ demande.title }}</h4>
      </div>
    </div>
    <div class="flex justify-end mt-16">
      <button class="p-2 w-12">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="#059650"
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
      </button>
      <button class="p-2 w-12">
        <router-link :to="'/editinternshiprequest/' + demande._id">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#FFD43B"
              d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
          </svg>
        </router-link>
      </button>


      <button @click="supprimerDemande(demande._id)" className=" w-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="#b91c50"
            d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
        </svg>
      </button>
    </div>
    <div class="bg-slate-100 w-full mt-4 p-12 rounded-lg">
      <h1 class="text-blue-400 text-3xl">{{ demande.candidate?.firstName }} {{ demande.candidate?.lastName }}
      </h1>
      <p class="pt-8">{{ demande.candidate?.description }}</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">

        <div class="flex">
          <div class="bg-slate-500 w-1 h-12"></div>
          <div class="ml-4">
            <h3 class="text-slate-500">Programme de formation</h3>
            <h5>{{ demande.formationProgram }}</h5>
          </div>
        </div>

        <div class="flex">
          <div class="bg-slate-500 w-1 h-12"></div>
          <div class="ml-4">
            <h3 class="text-slate-500">Établissement d'enseignement</h3>
            <h5>{{ demande.schoolName }}</h5>
          </div>
        </div>

        <div class="flex">
          <div class="bg-slate-500 w-1 h-12"></div>
          <div class="ml-4">
            <h3 class="text-slate-500">Secteur d'activité</h3>
            <h5>{{ demande.activitySector }}</h5>
          </div>
        </div>

        <div class="flex">
          <div class="bg-slate-500 w-1 h-12"></div>
          <div class="ml-4">
            <h3 class="text-slate-500">Ville</h3>
            <h5>{{ demande.city }}</h5>
          </div>
        </div>

        <div class="flex">
          <div class="bg-slate-500 w-1 h-12"></div>
          <div class="ml-4">
            <h3 class="text-slate-500">Compétences</h3>
            <h5>{{ demande.skills?.join(",") }}</h5>
          </div>
        </div>

        <div class="flex">
          <div class="bg-slate-500 w-1 h-12"></div>
          <div class="ml-4">
            <h3 class="text-slate-500">Région</h3>
            <h5>{{ demande.province?.value }}</h5>
          </div>
        </div>
      </div>

      <h2 class="text-blue-400 mt-12">Informations sur le stage recherché</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">

        <div class="flex">
          <div class="bg-slate-500 w-1 h-12"></div>
          <div class="ml-4">
            <h3 class="text-slate-500">Type de stage</h3>
            <h5>{{ demande.internshipType }}</h5>
          </div>
        </div>

        <div class="flex">
          <div class="bg-slate-500 w-1 h-12"></div>
          <div class="ml-4">
            <h3 class="text-slate-500">Date de début</h3>
            <h5>{{ new Date(demande.startDate).toLocaleDateString('fr-CA')
              }}</h5>
          </div>
        </div>
      </div>

      <div class="flex">
        <div class="bg-slate-500 w-1 h-12"></div>
        <div class="ml-4">
          <h3 class="text-slate-500">Nombre d'heure par semaine</h3>
          <h5>{{ demande.weeklyWorkHours }}</h5>
        </div>
      </div>

      <div class="flex">
        <div class="bg-slate-500 w-1 h-12"></div>
        <div class="ml-4">
          <h3 class="text-slate-500">Date de fin</h3>
          <h5>{{ new Date(demande.endDate).toLocaleDateString('fr-CA')
            }}</h5>
        </div>
      </div>

      <div class="flex">
        <div class="bg-slate-500 w-1 h-12"></div>
        <div class="ml-4">
          <h3 class="text-slate-500">Rémunération</h3>
          <h5>{{ demande.salary }}</h5>
        </div>

      </div>

      <div class="flex flex-col">
        <h2 class="text-blue-400 mt-12">Informations suplémentaires</h2>
        <div class="flex flex-row items-center">
          <div class="bg-slate-500 w-1 h-12"></div>
          <p class="mt-8 ml-4">{{ demande.additionalInformation }}</p>
        </div>
      </div>





      <button class="bg-blue-400 text-white flex p-4 rounded-lg font-black mt-12">
        <div class="w-8 mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path fill="#ffffff"
              d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
          </svg>
        </div>
        Télécharger le C.V.
      </button>
    </div>
  </div>
</template>

<script setup>
import service from '@/services/InternshipRequests'


import { useRouter } from "vue-router";
import { ref, onMounted, reactive } from 'vue';

const router = useRouter();
const demande = ref({});


onMounted(async () => {
  try {
    demande.value = await service.FindOne(router.currentRoute.value.params.id);

    demande.value.activitySector = "N'est pas dans L'API";
    demande.value.formationProgram = "N'est pas dans L'API";
    demande.value.schoolName = "N'est pas dans L'API";
    demande.value.city = "N'est pas dans L'API";
    demande.value.internshipType = "N'est pas dans L'API";


  } catch (error) {
    console.error("Une erreur s'est produite lors de la récupération des données :", error);
  }
});

const supprimerDemande = async (id) => {
  // Appelle la méthode Delete du service en passant l'identifiant de la demande
  if (confirm("Desirez-vous vraiment supprimer cela?")) {
    try {
      const response = await service.Delete(id);
      console.log('Demande supprimée avec succès :', response);
    } catch (error) {
      console.error('Erreur lors de la suppression de la demande :', error);
    }
    router.push({ path: '/demandes-stage' })
  }

};
</script>

<style></style>