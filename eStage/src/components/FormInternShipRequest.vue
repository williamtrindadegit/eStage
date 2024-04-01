<template>
    <div class="bg-gray-100">
        <form class="max-w-5xl p-4 my-0 pt-10 mx-auto" action="#">
            <h2 v-if="route.name == 'addinternshiprequest'"
                class="text-4xl font-bold text-slate-600 border-l-[10px] pl-5 border-fuchsia-900 py-2 mb-20">Ajouter une
                demande</h2>
            <div v-if="route.name == 'addinternshiprequest'">
                <div class="flex justify-end mb-4">
                    <button
                        class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-fuchsia-950 hover:text-white">Annuler</button>
                    <button class="btn bg-fuchsia-900 text-white hover:bg-fuchsia-950">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 -960 960 960"
                            stroke="currentColor">
                            <path
                                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160v212q-19-8-39.5-10.5t-40.5.5v-169L647-760H200v560h240v80H200Zm0-640v560-560ZM520-40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-260L643-40H520Zm300-263-37-37 37 37ZM580-100h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM240-560h360v-160H240v160Zm240 320h4l116-115v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
                        </svg>
                        Sauvegarder
                    </button>
                </div>
                <div>
                    <div class="flex items-center">
                        <label for="title" class="text-slate-600 font-bold max-w-24 w-full">Titre: </label>
                        <input type="text" name="title" id="title"
                            class="input input-bordered w-full bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                            placeholder="" />
                    </div>
                    <div class="ml-24 mb-4">
                        <span class="label-text-alt text-red-500">Error message</span>
                    </div>
                </div>
            </div>
            <div v-if="route.name == 'editinternshiprequest'">
                <div class="border-l-8 border-slate-600 pl-2 mb-4">
                    <p class="font-bold text-slate-600">Demande de stage</p>
                    <p class="font-bold text-slate-600 text-4xl">{{ formData.title }}</p>
                    <input type="text" name="title" id="title"
                        class="hidden input input-bordered w-full bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                        placeholder="" :value="formData.title" />
                </div>
                <div class="flex justify-end mb-4">
                    <button
                        class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-fuchsia-950 hover:text-white">Annuler</button>
                    <button class="btn bg-fuchsia-900 text-white hover:bg-fuchsia-950">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 -960 960 960"
                            stroke="currentColor">
                            <path
                                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160v212q-19-8-39.5-10.5t-40.5.5v-169L647-760H200v560h240v80H200Zm0-640v560-560ZM520-40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-260L643-40H520Zm300-263-37-37 37 37ZM580-100h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM240-560h360v-160H240v160Zm240 320h4l116-115v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
                        </svg>
                        Mettre à jour
                    </button>
                </div>
            </div>
            <div class="bg-white p-5">
                <div class="flex flex-col">
                    <label for="fullName" class="text-slate-600 font-bold mb-1 mt-5">Nom et prénom</label>
                    <input type="text" name="fullName" id="fullName"
                        class="input input-bordered w-full bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                        placeholder="" />
                    <span class="label-text-alt text-red-500">Error message</span>
                </div>
                <div class="flex flex-col">
                    <label for="description" class="text-slate-600 font-bold mb-1 mt-5">Présentation</label>
                    <textarea name="description" id="description"
                        class="textarea textarea-bordered bg-slate-50 border-gray-400 rounded p-2 text-slate-500 h-24"
                        placeholder=""></textarea>
                    <span class="label-text-alt text-red-500">Error message</span>
                </div>
                <fieldset class="grid grid-cols-2 max-w-5xl mt-8">
                    <div class="col-span-2 sm:col-span-1 mr-0 sm:mr-4">
                        <label for="formationProgram" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Programme de formation</span>
                                </div>
                                <input type="text" name="formationProgram" id="formationProgram" placeholder=""
                                    class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500">Error Message</span>
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="schoolName" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Établissement Scolaire</span>
                                </div>
                                <input type="text" name="schoolName" id="schoolName" placeholder=""
                                    class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500">Error Message</span>
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2 sm:col-span-1 mr-0 sm:mr-4">
                        <label for="activity-sectors" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Secteur d'activité</span>
                                </div>
                                <select name="activity-sectors" id="activity-sectors"
                                    class="select select-bordered w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500">
                                    <option disabled selected>Veuillez effectuer un choix</option>
                                    <!-- ajout des secteurs avec l'api -->
                                </select>
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500">Error Message</span>
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="city" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Ville</span>
                                </div>
                                <input type="text" name="city" id="city" placeholder=""
                                    class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500">Error Message</span>
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2">
                        <label for="province" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Région</span>
                                </div>
                                <select name="province" id="province"
                                    class="select select-bordered w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500">
                                    <option disabled selected>Veuillez effectuer un choix</option>
                                    <option v-for="province in provinces" :key="province._id" :value="province._id">{{
                province.value }}</option>
                                </select>
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500">Error Message</span>
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2">
                        <label for="skills" class="form-control w-full">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Compétences</span>
                                </div>
                                <textarea name="skills" id="skills"
                                    class="w-full textarea textarea-bordered bg-slate-50 border-gray-400 rounded p-2 text-slate-500 h-24"
                                    placeholder=""></textarea>
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500">Error Message</span>
                            </div>
                        </label>
                    </div>
                </fieldset>
                <fieldset class="grid grid-cols-2 max-w-5xl mt-2">
                    <legend class="font-bold mb-2">Informations sur le stage recherché</legend>
                    <div class="col-span-2 sm:col-span-1 mr-0 sm:mr-4">
                        <label for="intershipType" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Type de stage</span>
                                </div>
                                <select name="intershipType" id="intershipType"
                                    class="select select-bordered w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500">
                                    <option disabled selected>Veuillez effectuer un choix</option>
                                    <!-- ajout du type avec l'api -->
                                </select>
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500">Error Message</span>
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <div for="startDate" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Date de début</span>
                                </div>
                                <input type="date" name="startDate" id="startDate" placeholder=""
                                    class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500">Error Message</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2 sm:col-span-1 mr-0 sm:mr-4 -order-1 sm:order-none">
                        <label for="weeklyWorkHours" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Heures par semaine</span>
                                </div>
                                <select name="weeklyWorkHours" id="weeklyWorkHours"
                                    class="select select-bordered w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500">
                                    <option disabled selected>Veuillez effectuer un choix</option>
                                    <option value="10">10 heures</option>
                                    <option value="20">20 heures</option>
                                    <option value="30">30 heures</option>
                                    <option value="40">40 heures</option>
                                </select>
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500">Error Message</span>
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <div for="endDate" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Date de fin</span>
                                </div>
                                <input type="date" name="endDate" id="endDate" placeholder=""
                                    class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500">Error Message</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col border-l-8 border-slate-600 pl-2 mt-4 col-span-2">
                        <p class="text-slate-600 font-bold mb-2 ">Rémunération</p>
                        <div class="flex mb-2">
                            <input type="radio" id="discretion" name="remuneration" value="discretion"
                                class="checkbox border-slate-600" checked />
                            <label class="ml-4 text-slate-600" for="discretion">À la discrétion de l'etreprise</label>
                        </div>
                        <div class="flex mb-2">
                            <input type="radio" id="paid" name="remuneration" value="paid"
                                class="checkbox border-slate-600" />
                            <label class="ml-4 text-slate-600" for="paid">Stage rémunéré</label>
                        </div>
                        <div class="flex">
                            <input type="radio" id="unpaid" name="remuneration" value="unpaid"
                                class="checkbox border-slate-600" />
                            <label class="ml-4 text-slate-600" for="unpaid">Stage non rémunéré</label>
                        </div>
                    </div>
                    <div class="flex flex-col col-span-2">
                        <label for="additionalInformation" class="text-slate-600 font-bold mb-1 mt-5">Informations
                            supplémentaires</label>
                        <textarea name="additionalInformation" id="additionalInformation"
                            class="textarea textarea-bordered bg-slate-50 border-gray-400 rounded p-2 text-slate-500 h-24"
                            placeholder=""></textarea>
                        <span class="label-text-alt text-red-500">Error message</span>
                    </div>
                    <FileInput class="mt-4 max-w-md col-span-2" />
                </fieldset>
            </div>
            <div v-if="route.name == 'addinternshiprequest'" class="flex justify-end mb-4 mt-4">
                <button
                    class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-fuchsia-950 hover:text-white">Annuler</button>
                <button class="btn bg-fuchsia-900 text-white hover:bg-fuchsia-950">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 -960 960 960"
                        stroke="currentColor">
                        <path
                            d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160v212q-19-8-39.5-10.5t-40.5.5v-169L647-760H200v560h240v80H200Zm0-640v560-560ZM520-40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-260L643-40H520Zm300-263-37-37 37 37ZM580-100h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM240-560h360v-160H240v160Zm240 320h4l116-115v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
                    </svg>
                    Sauvegarder
                </button>
            </div>
            <div v-if="route.name == 'editinternshiprequest'" class="flex justify-end mb-4 mt-4">
                <button
                    class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-fuchsia-950 hover:text-white">Annuler</button>
                <button class="btn bg-fuchsia-900 text-white hover:bg-fuchsia-950">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 -960 960 960"
                        stroke="currentColor">
                        <path
                            d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160v212q-19-8-39.5-10.5t-40.5.5v-169L647-760H200v560h240v80H200Zm0-640v560-560ZM520-40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-260L643-40H520Zm300-263-37-37 37 37ZM580-100h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM240-560h360v-160H240v160Zm240 320h4l116-115v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
                    </svg>
                    Mettre à jour
                </button>
            </div>
        </form>
    </div>

</template>

<script setup>
import Provinces from '../services/Provinces';
import FileInput from './FileInput.vue';

import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();

const formData = {
    title: 'Développeur Front-End'
};

const formValidation = {

};

const provinces = ref([]);

const formulaireAjout = true;

onMounted(async () => {
    provinces.value = await Provinces.FindAll();
    console.log(provinces.value);
});

</script>

<style scoped>
::-webkit-calendar-picker-indicator {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path fill="" d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>');
}
</style>