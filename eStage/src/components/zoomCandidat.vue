<template>
        <div class="bg-gray-100">
        <div class="max-w-5xl p-4 my-0 pt-10 mx-auto">
            <h2 
                class="text-4xl font-bold text-slate-600 border-l-[10px] pl-5 border-fuchsia-900 py-2 mb-20">Détail sur le candidat</h2>
            <div>
                <div class="border-l-8 border-slate-600 pl-2 my-4">
                    <p class="font-bold text-slate-600">Candidat</p>
                    <p class="font-bold text-slate-600 text-4xl">{{ firstName }} {{ lastName }} </p>
                </div>
            </div>
            <div class="bg-white p-5">
                <div class="flex flex-col pb-2">
                    <label for="description" class="text-slate-600 font-bold text-3xl mb-5 mt-5">Courte
                        présentation</label>
                        {{ description }}
                </div>
                <div class="flex flex-col pb-2">
                    <label for="description" class="text-slate-600 font-bold text-3xl mb-5 mt-5">Compétences</label>
                        <ul>
                            <li v-for="skill in skills" :key="skill">{{ skill }}</li>
                        </ul>
                </div>
                <fieldset class="grid grid-cols-2 max-w-5xl mt-8">
                    <legend class="text-slate-600 font-bold mb-6">Informations personnelles</legend>
                    
                    <div class="col-span-2 sm:col-span-1 mr-0 sm:mr-4">
                        <label for="address" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    
                                    <span class="text-slate-600 font-bold">Adresse</span>
                                </div>
                                {{ address }}
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2 sm:col-span-1 mb-6">
                        <label for="phone" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Téléphone</span>
                                </div>
                                {{ phone }}
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2 sm:col-span-1 mr-0 sm:mr-4">
                        <label for="city" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Ville</span>
                                </div>
                                {{ city }}
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2 sm:col-span-1  mb-6">
                        <label for="email" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Courriel</span>
                                </div>
                                {{ email }}
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2">
                        <label for="province" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Province</span>
                                </div>
                                {{ province }}
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2  mt-6">
                        <label for="postalCode" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Code postal</span>
                                </div>
                                {{ postalCode }}
                            </div>
                        </label>
                    </div>
                </fieldset>
            </div>
            
   
        </div>

    </div>
    
</template>
<script setup>


import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import CandidatService from "@/services/Candidates";

const router = useRouter();


const description = ref("");
const email = ref("");
const firstName = ref("");
const lastName = ref("");
const address = ref("");
const phone = ref("");
const city = ref("");
const skills = ref([]);
const province = ref({});
const postalCode = ref("");


onMounted(async () => {

  const _id = router.currentRoute.value.params.id;
  console.log(_id);

  try {

    const candidat = await CandidatService.FindOne(_id);
    description.value = candidat.description;
    email.value = candidat.email;
    firstName.value = candidat.firstName;
    lastName.value = candidat.lastName;
    address.value = candidat.address;
    phone.value = candidat.phone;
    city.value = candidat.city;
    skills.value = candidat.skills;
    postalCode.value = candidat.postalCode;
    province.value = candidat.province.value;
  } catch (error) {
    console.error("Erreur lors de la récupération du candidat:", error);
  }
});



</script>