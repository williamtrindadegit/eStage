<template>
        <div class="bg-gray-100">
        <!-- changer pour max-w-5xl dans les autres formulaires -->
        <form class="max-w-5xl p-4 my-0 pt-10 mx-auto" @submit.prevent="validateCandidateForm()">
            <h2 
                class="text-4xl font-bold text-slate-600 border-l-[10px] pl-5 border-fuchsia-900 py-2 mb-20">Détail sur le candidat</h2>
            <!-- Ajouter une condition selon la route: Ajouter ou Modifier -->
            <div >
                <div>
                    <div class="flex items-center">
                        <label for="fullName" class="text-slate-600 font-bold max-w-36 w-full">Nom et prenom: </label>
                        <input type="text" name="fullName" id="fullName"
                            class="input input-bordered w-full bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                            placeholder="" />
                    </div>
                    <div class="flex items-center">
                        <label for="skills" class="text-slate-600 font-bold max-w-36 w-full">Post desiré: </label>
                        <input type="text" name="skills" id="skills"
                            class="input input-bordered w-full bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                            placeholder="Developpeur Front-End"/>
                    </div>
                    <div class="flex items-center">
                        <label for="skills" class="text-slate-600 font-bold max-w-36 w-full">Compétences: </label>
                        <input type="text" name="skills" id="skills"
                            class="input input-bordered w-full bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                            placeholder="javascript,css,html ..." />
                    </div>
                </div>
            </div>
            <div>
                <div class="border-l-8 border-slate-600 pl-2">
                    <p class="font-bold text-slate-600">Candidat</p>
                    <p class="font-bold text-slate-600 text-4xl">full ame</p>
                </div>
            </div>
            <!-- End block -->
            <div class="bg-white p-5">
                <div class="flex flex-col pb-2">
                    <label for="description" class="text-slate-600 font-bold text-3xl mb-5 mt-5">Courte
                        présentation</label>
                    <textarea name="description" id="description"
                        class="textarea textarea-bordered bg-slate-50 border-gray-400 rounded p-2 text-slate-500 h-24"
                        placeholder="">
                    </textarea>
                </div>
                <fieldset class="grid grid-cols-2 max-w-5xl mt-8">
                    <legend class="text-slate-600 font-bold mb-6">Informations personnelles</legend>
                    
                    <div class="col-span-2 sm:col-span-1 mr-0 sm:mr-4">
                        <label for="address" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Adresse</span>
                                </div>
                                <input type="text" name="address" id="address" placeholder=""
                                    class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                                   />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500">Veuillez
                                    renseigner le champ.</span>
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="phone" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Téléphone</span>
                                </div>
                                <input type="tel" name="phone" id="phone" placeholder="555-123-4567"
                                    class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                                   />
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2 sm:col-span-1 mr-0 sm:mr-4">
                        <label for="city" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Ville</span>
                                </div>
                                <input type="text" name="city" id="city" placeholder=""
                                    class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                                    />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" >Veuillez
                                    renseigner le champ.</span>
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="email" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Courriel</span>
                                </div>
                                <input type="text" name="email" id="email" placeholder=""
                                    class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                                     />
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2">
                        <label for="province" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Province</span>
                                </div>
                                <select name="province" id="province"
                                    class="select select-bordered w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                                    >
                                    
                                    
                                </select>
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500">Veuillez
                                    sélectionner une province.</span>
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2">
                        <label for="postalCode" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Code postal</span>
                                </div>
                                <input type="text" name="postalCode" id="postalCode" placeholder=""
                                    class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                                    />
                            </div>
                        </label>
                    </div>
                </fieldset>
            </div>
            
   
        </form>

    </div>
    
</template>
<script setup>
import { ref, onMounted, defineProps } from 'vue';
import CandidatService from "@/services/Candidates";

const props = defineProps(['route']);
const candidatDetails = ref({});

onMounted(async () => {
  try {
    const candidatId = props.route.params.id;
    const response = await CandidatService.FindOne(candidatId);
    candidatDetails.value = response.data;
    console.log(response);
  } catch (error) {
    console.error("Erreur lors de la récupération des détails du candidat:", error);
  }
});
</script>