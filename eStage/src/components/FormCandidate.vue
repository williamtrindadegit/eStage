<template>
    <div class="bg-gray-100">
        <!-- changer pour max-w-5xl dans les autres formulaires -->
        <form class="max-w-5xl p-4 my-0 pt-10 mx-auto" action="#">
            <h2 v-if="route.name == 'addcandidate'" class="text-4xl font-bold text-slate-600 border-l-[10px] pl-5 border-fuchsia-900 py-2 mb-20">Ajouter un Candidat</h2>
            <!-- Ajouter une condition selon la route: Ajouter ou Modifier -->
            <div v-if="route.name == 'addcandidate'">
                <div class="flex justify-end mb-4">
                    <button class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-fuchsia-950 hover:text-white">Annuler</button>
                    <button class="btn bg-fuchsia-900 text-white hover:bg-fuchsia-950">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 -960 960 960" stroke="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160v212q-19-8-39.5-10.5t-40.5.5v-169L647-760H200v560h240v80H200Zm0-640v560-560ZM520-40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-260L643-40H520Zm300-263-37-37 37 37ZM580-100h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM240-560h360v-160H240v160Zm240 320h4l116-115v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/></svg>
                        Sauvegarder
                    </button>
                </div>
                <div>
                    <div class="flex items-center">
                        <label for="fullName" class="text-slate-600 font-bold max-w-36 w-full">Nom et prenom: </label>
                        <input type="text" name="fullName" id="fullName" class="input input-bordered w-full bg-slate-50 border-gray-400 rounded p-2 text-slate-500" placeholder="" />
                    </div>
                    <div class="ml-36 mb-4">
                        <span class="label-text-alt text-red-500">Error message</span>
                    </div>
                    <div class="flex items-center">
                        <label for="skills" class="text-slate-600 font-bold max-w-36 w-full">Compétences: </label>
                        <input type="text" name="skills" id="skills" class="input input-bordered w-full bg-slate-50 border-gray-400 rounded p-2 text-slate-500" placeholder="javascript,css,html ..." />
                    </div>
                    <div class="ml-36 mb-4">
                        <span class="label-text-alt text-red-500">Error message</span>
                    </div>
                </div>
            </div>
            <div v-if="route.name == 'editcandidate'">
                <div class="border-l-8 border-slate-600 pl-2">
                    <p class="font-bold text-slate-600">Candidat</p>
                    <p class="font-bold text-slate-600 text-4xl">{{ formData.firstName }} {{ formData.lastName }}</p>
                    <input type="text" name="fullName" id="fullName" class="hidden input input-bordered w-full bg-slate-50 border-gray-400 rounded p-2 text-slate-500" placeholder="" />
                </div>
                <div class="flex justify-end mb-4">
                    <button class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-fuchsia-950 hover:text-white">Annuler</button>
                    <button class="btn bg-fuchsia-900 text-white hover:bg-fuchsia-950">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 -960 960 960" stroke="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160v212q-19-8-39.5-10.5t-40.5.5v-169L647-760H200v560h240v80H200Zm0-640v560-560ZM520-40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-260L643-40H520Zm300-263-37-37 37 37ZM580-100h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM240-560h360v-160H240v160Zm240 320h4l116-115v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/></svg>
                        Mettre à jour
                    </button>
                </div>
            </div>
            <!-- End block -->
            <div class="bg-white p-5">
                <div class="flex flex-col pb-2">
                    <label for="description" class="text-slate-600 font-bold text-3xl mb-5 mt-5">Courte présentation</label>
                    <textarea name="description" id="description" class="textarea textarea-bordered bg-slate-50 border-gray-400 rounded p-2 text-slate-500 h-24" placeholder=""></textarea>
                    <span class="label-text-alt text-red-500">Error message</span>
                </div>
                <fieldset class="grid grid-cols-2 max-w-5xl mt-8">
                    <legend class="text-slate-600 font-bold mb-6">Informations personnelles</legend>
                    <!-- ajouter mr-0 sm:mr-4 dans les autres formulaires -->
                    <div class="col-span-2 sm:col-span-1 mr-0 sm:mr-4">
                        <label for="address" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Adresse</span>
                                </div>
                                <input type="text" name="address" id="address" placeholder="" class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500">Error Message</span>
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="phone" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Téléphone</span>
                                </div>
                                <input type="tel" name="phone" id="phone" placeholder="" class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500">Error Message</span>
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2 sm:col-span-1 mr-0 sm:mr-4">
                        <label for="city" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Ville</span>
                                </div>
                                <input type="tel" name="city" id="city" placeholder="" class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500">Error Message</span>
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="email" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Courriel</span>
                                </div>
                                <input type="email" name="email" id="email" placeholder="" class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500" />
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
                                    <span class="text-slate-600 font-bold">Province</span>
                                </div>
                                <select name="province" id="province" class="select select-bordered w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500">
                                    <option disabled selected>Veuillez effectuer un choix</option>
                                    <option v-for="province in provinces" :key="province._id" :value="province._id">{{ province.value }}</option>
                                </select>
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500">Error Message</span>
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2">
                        <label for="postalCode" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Code postal</span>
                                </div>
                                <input type="email" name="postalCode" id="postalCode" placeholder="" class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500">Error Message</span>
                            </div>
                        </label>
                    </div>
                </fieldset>
            </div>
            <!-- Ajouter une condition selon la route: Ajouter ou Modifier -->
            <div v-if="route.name == 'addcandidate'" class="flex justify-end mb-4 mt-4">
                <button class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-fuchsia-950 hover:text-white">Annuler</button>
                <button class="btn bg-fuchsia-900 text-white hover:bg-fuchsia-950">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 -960 960 960" stroke="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160v212q-19-8-39.5-10.5t-40.5.5v-169L647-760H200v560h240v80H200Zm0-640v560-560ZM520-40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-260L643-40H520Zm300-263-37-37 37 37ZM580-100h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM240-560h360v-160H240v160Zm240 320h4l116-115v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/></svg>
                    Sauvegarder
                </button>
            </div>
            <div v-if="route.name == 'editcandidate'" class="flex justify-end mb-4 mt-4">
                <button class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-fuchsia-950 hover:text-white">Annuler</button>
                <button class="btn bg-fuchsia-900 text-white hover:bg-fuchsia-950">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 -960 960 960" stroke="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160v212q-19-8-39.5-10.5t-40.5.5v-169L647-760H200v560h240v80H200Zm0-640v560-560ZM520-40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-260L643-40H520Zm300-263-37-37 37 37ZM580-100h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM240-560h360v-160H240v160Zm240 320h4l116-115v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/></svg>
                    Mettre à jour
                </button>
            </div>
            <!-- End block -->
        </form>
        
    </div>

</template>

<script setup>
    import ProvinceServices from '../services/ProvinceServices';
    import Candidates from '@/services/Candidates';

    import { useRoute } from 'vue-router';
    import { ref, onMounted } from 'vue';

    const route = useRoute();


    const formData = {
        description: "",
        email: "",
        firstName: "John",
        lastName: "Doe",
        address: "",
        phone: "",
        city: "",
        skills: [
            ""
        ],
        province: {
            _id: "",
            value: ""
        },
        postalCode: ""
    };

    const formValidation = {
        description: true,
        email: true,
        firstName: true,
        lastName: true,
        address: true,
        phone: true,
        city: true,
        skills: true,
        province: true,
        postalCode: true
    
    };
    
    const provinces = ref([]);

    const candidates = ref([]);

    onMounted(async () => {
        provinces.value = await ProvinceServices.FindAll();
        console.log(provinces.value);
        candidates.value = await Candidates.FindAll();
        console.log(candidates.value);

    });


</script>

<style scoped>

</style>