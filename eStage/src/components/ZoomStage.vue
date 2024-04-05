<template>
  <div class="container">
    <div class="flex">
      <div class="bg-red-500 w-1 h-28"></div>
      <div class="ml-4">
        <h3>Offre de stage</h3>
        <h4 class="text-3xl text-slate-200">{{ offer.title }}</h4>
        <h5 class="bg-white text-slate-900 w-48 px-2 rounded-sm mt-4">{{ offer.enterprise.name }}</h5>
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
        <router-link :to="'/editinternshipoffer/' + offer._id">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#FFD43B"
              d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
          </svg>
        </router-link>
      </button>


      <button @click="supprimerOffre(offer._id)" className=" w-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="#b91c50"
            d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
        </svg>
      </button>
    </div>
    <div class="bg-slate-100 w-full mt-4 p-12 rounded-lg">
      <h1 class="text-red-500 text-3xl">Description de la tâche</h1>
      <p class="pt-8">{{ offer.description }}</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">


        <div class="flex">
          <div class="bg-slate-500 w-1 h-12"></div>
          <div class="ml-4">
            <h3 class="text-slate-500">Formations demandés</h3>
            <h5>{{ offer.formationProgram }}</h5>
          </div>
        </div>

        <div class="flex">
          <div class="bg-slate-500 w-1 h-12"></div>
          <div class="ml-4">
            <h3 class="text-slate-500">Exigences</h3>
            <h5>{{ offer.requiredSkills?.join(", ") || "Aucunes exigences" }}</h5>

          </div>
        </div>
      </div>

      <h2 class="text-red-500 mt-12">Informations sur le stage</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">

        <div class="flex">
          <div class="bg-slate-500 w-1 h-12"></div>
          <div class="ml-4">
            <h3 class="text-slate-500">Type de stage</h3>
            <h5>{{ offer.internshipType.value }}</h5>
          </div>
        </div>

        <div class="flex">
          <div class="bg-slate-500 w-1 h-12"></div>
          <div class="ml-4">
            <h3 class="text-slate-500">Date de début</h3>
            <h5>{{ new Date(offer.startDate).toLocaleDateString('fr-CA')
              }}</h5>
          </div>
        </div>

        <div class="flex">
          <div class="bg-slate-500 w-1 h-12"></div>
          <div class="ml-4">
            <h3 class="text-slate-500">Nombre d'heure par semaine</h3>
            <h5>{{ offer.weeklyWorkHours }}</h5>
          </div>
        </div>

        <div class="flex">
          <div class="bg-slate-500 w-1 h-12"></div>
          <div class="ml-4">
            <h3 class="text-slate-500">Date de fin</h3>
            <h5>{{ new Date(offer.endDate).toLocaleDateString('fr-CA')
              }}</h5>
          </div>
        </div>

        <div class="flex">
          <div class="bg-slate-500 w-1 h-12"></div>
          <div class="ml-4">
            <h3 class="text-slate-500">Rémunération</h3>
            <h5>{{ offer.salary }}</h5>
          </div>
        </div>

      </div>

      <h2 class="text-red-500 mt-12">Informations suplémentaires</h2>

      <p class="mt-8">{{ offer.additionalInformation }}</p>

    </div>
  </div>
</template>

<script setup>
import service from '@/services/InternshipOffers';

import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";


const router = useRouter();
const offer = ref({
  "additionalInformation": "thunder",
  "candidate": {
    "address": "thunder",
    "city": "thunder",
    "description": "thunder",
    "email": "thunder",
    "firstName": "thunder",
    "lastName": "thunder",
    "phone": "thunder",
    "postalCode": "thunder",
    "province": {
      "_id": "thunder",
      "value": "thunder"
    },
    "requiredSkills": [
      "thunder"
    ]
  },
  "enterprise": {
    "_id": 0,
    "image": "aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvZ29sZGVuLWJsdWUtZGlhbW9uZC1zaGFwZS1sb2dvLWJ1c2luZXNzLXRlbXBsYXRlXzIzLTIxNDg3MDc2NDguanBnP3c9NzQwJnQ9c3Q9MTcxMjE4MjgxOX5leHA9MTcxMjE4MzQxOX5obWFjPWQyNTVhNmE3MWM5MzZhMGMzMzIzMGU4YzA3YjNlM2UwNmE2NjUyNDU0YjlhMmMzYWU3NjNhZjdlMzBiNjVmYzc=",
    "name": "Example Company Inc.",
    "address": "123 Main St",
    "postalCode": "h0h 0h0",
    "city": "Example City",
    "province": "65e4dfcb2951efc25ce318cf",
    "phone": "819-990-2217",
    "email": "info@examplecompany.com",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "activitySector": "660334e85526fb10bf2aae4a",
    "website": "https://examplecompany.com",
    "__v": 0
  },
  "description": "thunder",
  "endDate": "2024-03-07T02:33:11.825Z",
  "internshipType": {
    "_id": "thunder",
    "value": "thunder"
  },
  "isActive": true,
  "province": {
    "_id": "thunder",
    "value": "thunder"
  },
  "skills": [
    "thunder"
  ],
  "startDate": "2024-03-07T02:33:11.825Z",
  "title": "thunder",
  "weeklyWorkHours": 10
});

onMounted(async () => {
  try {
    const fetchedOffer = await service.FindOne(router.currentRoute.value.params.id);
    if (fetchedOffer) {
      offer.value = fetchedOffer;
    } else {
      console.error("Offre non trouvée");
    }
  } catch (error) {
    console.error("Error fetching offer:", error);
  }
});

const supprimerOffre = async (id) => {
  if (confirm("Desirez-vous vraiment supprimer cela?")) {
    // Appelle la méthode Delete du service en passant l'identifiant de l'offre
    try {
      const response = await service.Delete(id);
      console.log('Offre supprimée avec succès :', response);
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'offre :`, error);
    }
    router.push({ path: '/offres-stage' })
  }
};



</script>

<style></style>