<template>
  <section class="m-5 p-10 bg-gray-100 rounded-lg">
    <h1 class="text-4xl font-bold mt-20">Candidats</h1>

    <router-link to="/addcandidate"
      class="mt-20 btn btn-ghost text-md m-1 p-2 border-solid border-2 text-white bg-purple-700 mx-2">
      <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
        viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M5 12h14m-7 7V5" />
      </svg>
      Ajouter un candidat
    </router-link>

    <div class=" mx-2 mt-4 mb-16 p-8 rounded-lg">
      <div class="grid sm:grid-cols-1 lg:grid-cols-2 auto-cols-max">
        <div v-for="candidat in candidats" :key="candidat._id" class="overflow-hidden shadow-lg m-2 ">
          <div class="px-6 py-4 flex flex-row bg-white hover:bg-slate-200 hover:m-1 cursor-pointer"
            @click="onDetails(candidat._id)">
            <div>
              <img className="w-24 h-24 p-0 m-0 rounded-md"
                src="https://api.dicebear.com/8.x/icons/svg?seed=Casper&backgroundColor=7E22CE&icon=emojiSmile"
                alt="avatar" />

            </div>
            <div className="pl-4">
              <button @click="onDetails(candidat._id)" class="font-bold text-xl mb-2">
                <span class="pr-2 text-slate-900 text-xl mr-4">{{ candidat.firstName }} {{ candidat.lastName }}</span>
              </button>
              <p class="text-gray-700 text-sm">{{ candidat.description }}</p>
              <p>{{ candidat.email }}</p>
              <p>{{ candidat.phone }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CandidatService from "@/services/Candidates";
import { useRouter } from "vue-router";

const router = useRouter();
const candidats = ref([]);

onMounted(async () => {
  try {
    const response = await CandidatService.FindAll();
    candidats.value = response;
    console.log(candidats.value);
  } catch (error) {
    console.error("Erreur lors de la récupération des candidats:", error);
  }
});

function onDetails(idString) {
  router.push({ name: "zoomCandidat", params: { id: idString } });
}
</script>

<style></style>
