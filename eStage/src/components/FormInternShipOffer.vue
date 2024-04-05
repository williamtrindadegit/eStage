<template>
    <div class="bg-gray-100">
        <form class="max-w-5xl p-4 my-0 pt-10 mx-auto" @submit.prevent="validateInternshipOfferForm()">
            <h2 v-if="route.name == 'addinternshipoffer'"
                class="text-4xl font-bold text-slate-600 border-l-[10px] pl-5 border-red-500 py-2 mb-20">Ajouter
                une offre de stage</h2>
            <div v-if="route.name == 'addinternshipoffer'">
                <div class="flex justify-end mb-4">
                    <router-link to="/dashboard">
                        <button
                            class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-red-600 hover:text-white">
                            Annuler
                        </button>
                    </router-link>
                    <button class="btn bg-red-500 text-white hover:bg-red-600">
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
                            placeholder="" v-model="formData.title" />
                    </div>
                    <div class="ml-24 mb-4">
                        <span class="label-text-alt text-red-500" v-if="!formValidation.title">{{ errorMessages.title
                            }}</span>
                    </div>
                    <div class="flex items-center">
                        <label for="enterprise" class="text-slate-600 font-bold max-w-24 w-full">Entreprise: </label>
                        <select id="enterprise" name="enterprise"
                            class="select select-bordered w-full bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                            v-model="formData.enterprise._id">
                            <option disabled selected>Veuillez effectuer un choix</option>
                            <option v-for="enterprise in enterprises" :key="enterprise._id" :value="enterprise._id">{{
            enterprise.name }}</option>
                            <!-- ajout des entreprises avec l'api -->
                        </select>
                    </div>
                    <div class="ml-24 mb-4">
                        <span class="label-text-alt text-red-500" v-if="!formValidation.enterprise">{{
            errorMessages.enterprise }}</span>
                    </div>
                </div>
            </div>
            <div v-if="route.name == 'editinternshipoffer'">
                <div class="border-l-8 border-red-500 pl-2">
                    <p class="text-4xl font-bold text-slate-600">Offre de stage</p>
                    <p class="text-2xl font-bold text-slate-600 mb-6">{{ formData.title }}</p>
                    <p class="py-1 px-3 ml-3 bg-white inline-block rounded font-bold text-slate-600">{{
            formData.enterprise.name }}</p>
                </div>
                <div class="flex justify-end mb-4">
                    <router-link to="/dashboard">
                        <button
                            class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-red-600 hover:text-white">
                            Annuler
                        </button>
                    </router-link>
                    <button class="btn bg-red-500 text-white hover:bg-red-600">
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
                    <label for="description" class="text-red-500 font-bold mt-5 text-3xl mb-3">Description de la
                        tâche</label>
                    <textarea name="description" id="description"
                        class="textarea textarea-bordered bg-slate-50 border-gray-400 rounded p-2 text-slate-500 h-24"
                        placeholder="" v-model="formData.description"></textarea>
                    <span class="label-text-alt text-red-500" v-if="!formValidation.description">{{
            errorMessages.description }}</span>
                </div>
                <fieldset class="grid grid-cols-2 max-w-5xl mt-8">
                    <div class="col-span-2">
                        <label for="formationProgram" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Programme de formation</span>
                                </div>
                                <input type="text" name="formationProgram" id="formationProgram" placeholder=""
                                    class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                                    v-model="formData.formationProgram" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" v-if="!formValidation.formationProgram">{{
            errorMessages.formationProgram }}</span>
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2">
                        <label for="requiredSkills" class="form-control w-full">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Exigences</span>
                                </div>
                                <textarea name="requiredSkills" id="requiredSkills"
                                    class="w-full textarea textarea-bordered bg-slate-50 border-gray-400 rounded p-2 text-slate-500 h-24"
                                    placeholder="" v-model="formData.requiredSkills"></textarea>
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" v-if="!formValidation.requiredSkills">{{
            errorMessages.requiredSkills }}</span>
                            </div>
                        </label>
                    </div>
                </fieldset>
                <fieldset class="grid grid-cols-2 max-w-5xl mt-8">
                    <legend class="text-red-500 font-bold mb-6">Informations sur le stage recherché</legend>
                    <div class="col-span-2 sm:col-span-1 mr-0 sm:mr-4">
                        <label for="intershipType" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Type de stage</span>
                                </div>
                                <select name="intershipType" id="intershipType"
                                    class="select select-bordered w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                                    v-model="formData.internshipType._id">
                                    <option disabled selected>Veuillez effectuer un choix</option>
                                    <option v-for="internshipType in internshipTypes" :key="internshipType._id"
                                        :value="internshipType._id">{{ internshipType.value }}</option>
                                    <!-- ajout du type avec l'api -->
                                </select>
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" v-if="!formValidation.internshipType">{{
            errorMessages.internshipType }}</span>
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
                                    class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                                    v-model="formData.startDate" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" v-if="!formValidation.startDate">{{
            errorMessages.startDate }}</span>
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
                                    class="select select-bordered w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                                    v-model="formData.weeklyWorkHours">
                                    <option disabled selected>Veuillez effectuer un choix</option>
                                    <option value="10">10 heures</option>
                                    <option value="20">20 heures</option>
                                    <option value="30">30 heures</option>
                                    <option value="40">40 heures</option>
                                </select>
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" v-if="!formValidation.weeklyWorkHours">{{
            errorMessages.weeklyWorkHours }}</span>
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
                                    class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                                    v-model="formData.endDate" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" v-if="!formValidation.endDate">{{
            errorMessages.endDate }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col border-l-8 border-slate-600 pl-2 mt-4 col-span-2">
                        <p class="text-slate-600 font-bold mb-2 ">Rémunération</p>
                        <div class="flex mb-2">
                            <input type="radio" id="DISCRETIONARY" name="remuneration" value="DISCRETIONARY"
                                class="checkbox border-slate-600" checked v-model="formData.paid" />
                            <label class="ml-4 text-slate-600" for="DISCRETIONARY">À discuter</label>
                        </div>
                        <div class="flex mb-2">
                            <input type="radio" id="PAID" name="remuneration" value="PAID"
                                class="checkbox border-slate-600" v-model="formData.paid" />
                            <label class="ml-4 text-slate-600" for="PAID">Stage rémunéré</label>
                        </div>
                        <div class="flex">
                            <input type="radio" id="UNPAID" name="remuneration" value="UNPAID"
                                class="checkbox border-slate-600" v-model="formData.paid" />
                            <label class="ml-4 text-slate-600" for="UNPAID">Stage non rémunéré</label>
                        </div>
                    </div>
                    <div class="flex flex-col col-span-2">
                        <label for="additionalInformation" class="text-red-500 font-bold mb-1 mt-5">Informations
                            supplémentaires</label>
                        <textarea name="additionalInformation" id="additionalInformation"
                            class="textarea textarea-bordered bg-slate-50 border-gray-400 rounded p-2 text-slate-500 h-24"
                            placeholder="" v-model="formData.additionalInformation"></textarea>
                        <span class="label-text-alt text-red-500" v-if="!formValidation.additionalInformation">{{
            errorMessages.additionalInformation }}</span>
                    </div>
                </fieldset>
            </div>
            <div v-if="route.name == 'addinternshipoffer'" class="flex justify-end mb-4 mt-4">
                <router-link to="/dashboard">
                    <button
                        class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-red-600 hover:text-white">
                        Annuler
                    </button>
                </router-link>
                <button class="btn bg-red-500 text-white hover:bg-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 -960 960 960"
                        stroke="currentColor">
                        <path
                            d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160v212q-19-8-39.5-10.5t-40.5.5v-169L647-760H200v560h240v80H200Zm0-640v560-560ZM520-40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-260L643-40H520Zm300-263-37-37 37 37ZM580-100h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM240-560h360v-160H240v160Zm240 320h4l116-115v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
                    </svg>
                    Sauvegarder
                </button>
            </div>
            <div v-if="route.name == 'editinternshipoffer'" class="flex justify-end mb-4 mt-4">
                <router-link to="/dashboard">
                    <button
                        class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-red-600 hover:text-white">
                        Annuler
                    </button>
                </router-link>
                <button class="btn bg-red-500 text-white hover:bg-red-600">
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
import Enterprises from '../services/Enterprises';
import InternshipTypes from '../services/InternshipTypes';
import InternshipOffers from '../services/InternshipOffers';

import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted, reactive } from 'vue';

const route = useRoute();
const vueRouter = useRouter();

const mockInternshipOffer = {
    title: "Software Development Internship",
    description: "Join our team as a software development intern and gain hands-on experience in building cutting-edge applications.",
    enterprise: {
        _id: "660ca8adbfd81e04d73fb0f2",
        image: "aHR0cHM6Ly9wbGFjZWhvbGQuY28vNjAweDQwMC9FRUUvMzEzNDND",
        name: "Test edition",
        address: "747 Rue du Chanoine Groulx, 201",
        postalCode: "G1X 3V1",
        city: "Québec",
        province: {
            _id: "65e4dfcb2951efc25ce318e1",
            value: "PRINCE EDWARD ISLAND"
        },
        phone: "418-905-2287",
        email: "jessy.stpierre@live.com",
        description: "test from frontend with province fix",
        activitySector: {
            _id: "660334e85526fb10bf2aae4a",
            value: "Front-End development"
        },
        website: "https://examplecompany.com",
        contactName: "John Doe"
    },
    startDate: "2024-05-01T00:00:00.000Z",
    endDate: "2024-08-31T00:00:00.000Z",
    weeklyWorkHours: 40,
    salary: 2000,
    province: {
        _id: "65e4dfcb2951efc25ce318e1",
        value: "PRINCE EDWARD ISLAND"
    },
    requiredSkills: [
        "Java",
        "JavaScript",
        "HTML",
        "CSS"
    ],
    internshipType: {
        _id: "65e4dfc22951efc25ce318c0",
        value: "FULL"
    },
    paid: "DISCRETIONARY",
    isActive: true
}

const formData = reactive({
    title: '',
    description: '',
    formationProgram: 'Formation en frontend',
    additionalInformation: '',
    enterprise: {},
    startDate: '',
    endDate: '',
    weeklyWorkHours: 0,
    salary: 2000,
    province: {},
    requiredSkills: '',
    internshipType: {},
    paid: "DISCRETIONARY",

    isActive: true
});

const formValidation = reactive({
    title: true,
    description: true,
    formationProgram: true,
    additionalInformation: true,
    enterprise: true,
    startDate: true,
    endDate: true,
    weeklyWorkHours: true,
    salary: true,
    province: true,
    requiredSkills: true,
    internshipType: true,
    paid: true,
    isActive: true
});

const errorMessages = reactive({
    title: 'Le titre est requis',
    description: 'La description est requise',
    formationProgram: 'Le programme de formation est requis',
    additionalInformation: 'Les informations supplémentaires sont requises',
    enterprise: 'L\'entreprise est requise',
    startDate: 'La date de début est requise',
    endDate: 'La date de fin est requise',
    weeklyWorkHours: 'Le nombre d\'heures par semaine est requis',
    salary: 'La rémunération est requise',
    province: 'La province est requise',
    requiredSkills: 'Les compétences requises sont requises',
    internshipType: 'Le type de stage est requis',
    paid: 'La rémunération est requise',
    isActive: 'Le statut est requis'
});

const provinces = ref([]);
const enterprises = ref([]);
const internshipTypes = ref([]);
const internshipOffers = ref([]);

const REQUIRED_SKILLS_REGEX = /^[a-zA-Z]+(?:,[a-zA-Z]+)*$/;

onMounted(async () => {
    provinces.value = await Provinces.FindAll();
    enterprises.value = await Enterprises.FindAll();
    internshipTypes.value = await InternshipTypes.FindAll();
    if (route.name === 'editinternshipoffer') {
        internshipOffers.value = await InternshipOffers.FindOne(route.params.id);
        getInternShipOfferDetails();
    }
});

const resetErrMessages = () => {
    errorMessages.title = 'Le titre est requis';
    errorMessages.description = 'La description est requise';
    errorMessages.formationProgram = 'Le programme de formation est requis';
    errorMessages.additionalInformation = 'Les informations supplémentaires sont requises';
    errorMessages.enterprise = 'L\'entreprise est requise';
    errorMessages.startDate = 'La date de début est requise';
    errorMessages.endDate = 'La date de fin est requise';
    errorMessages.weeklyWorkHours = 'Le nombre d\'heures par semaine est requis';
    errorMessages.salary = 'La rémunération est requise';
    errorMessages.province = 'La province est requise';
    errorMessages.requiredSkills = 'Les compétences requises sont requises';
    errorMessages.internshipType = 'Le type de stage est requis';
    errorMessages.paid = 'La rémunération est requise';
    errorMessages.isActive = 'Le statut est requis';
}

const validateInternshipOfferForm = () => {
    resetErrMessages();
    Object.entries(formData).forEach(([key, currentValue]) => {
        if (key === 'requiredSkills') {
            if (currentValue === '') {
                formValidation.requiredSkills = false;
            } else {
                if (typeof currentValue === 'string') {
                    formValidation.requiredSkills = REQUIRED_SKILLS_REGEX.test(currentValue);
                    formValidation.requiredSkills ? formData.requiredSkills.split(',') : errorMessages.requiredSkills = 'Les compétences requises doivent être séparées par des virgules';
                } else {
                    formValidation.requiredSkills = true;
                }
            }
        } else if (key === 'internshipType' && currentValue._id !== "") {
            const foundInternship = internshipTypes.value.find(internship => internship._id === currentValue._id);

            if (foundInternship) {
                formData.internshipType.value = foundInternship.value;
                formValidation.internshipType = true;
            } else {
                formValidation.internshipType = false;
            }
        } else if (key === 'enterprise' && currentValue._id !== "") {
            const foundEnterprise = enterprises.value.find(enterprise => enterprise._id === currentValue._id);
            if (foundEnterprise) {
                formData.enterprise = foundEnterprise;
                formData.province = foundEnterprise.province;
                formValidation.enterprise = true;
            } else {
                formValidation.enterprise = false;
            }
        } else if (key === 'endDate') {
            if (currentValue !== "") {
                let date = new Date(currentValue);
                formData.endDate = date.toISOString();
                formValidation.endDate = true;
            } else {
                formValidation.endDate = false;
            }
        } else if (key === 'startDate') {
            if (currentValue !== "") {
                let date = new Date(currentValue);
                formData.startDate = date.toISOString();
                formValidation.startDate = true;
            } else {
                formValidation.startDate = false;
            }
        } else if (key === 'weeklyWorkHours') {
            if (currentValue !== "" && currentValue > 0) {
                formData.weeklyWorkHours = parseInt(currentValue);
                formValidation.weeklyWorkHours = true;
            } else {
                formValidation.weeklyWorkHours = false;
            }
        } else {
            formValidation[key] = (currentValue !== "" && currentValue !== undefined && currentValue !== null) ? true : false;
        }
    });

    let isFormValid = true;
    Object.entries(formValidation).forEach(([key, value]) => {
        if (!key.startsWith('_') || !key.startsWith('__')) {
            if (!value) {
                isFormValid = false; // If any value is false, set form validity to false
            }
        }
    });

    if (isFormValid) {
        sendDataToApi();
    }
};

const sendDataToApi = () => {
    formData._id = route.params.id;
    if (route.name === 'addinternshipoffer') {
        InternshipOffers.Create(formData).then(async () => {
            await vueRouter.push({ path: '/offres-stage' });
        }).catch(error => {
            console.log(error);
        });;
    } else if (route.name === 'editinternshipoffer') {
        InternshipOffers.Update(formData).then(async () => {
            await vueRouter.push({ path: '/offres-stage' });
        }).catch(error => {
            console.log(error);
        });;
    }
};

const getInternShipOfferDetails = () => {
    //reconvertir le format de date qu'on recoit de l'api
    //... en tk
    const startDateISO = new Date(internshipOffers.value.startDate);
    const yearStart = startDateISO.getFullYear();
    const monthStart = String(startDateISO.getMonth() + 1).padStart(2, '0'); // Add 1 to month since it's zero-based
    const dayStart = String(startDateISO.getDate()).padStart(2, '0');
    const formattedStart = `${yearStart}-${monthStart}-${dayStart}`;

    const endDateISO = new Date(internshipOffers.value.endDate);
    const yearEnd = endDateISO.getFullYear();
    const monthEnd = String(endDateISO.getMonth() + 1).padStart(2, '0'); // Add 1 to month since it's zero-based
    const dayEnd = String(endDateISO.getDate()).padStart(2, '0');
    const formattedEnd = `${yearEnd}-${monthEnd}-${dayEnd}`;

    formData.title = internshipOffers.value.title;
    formData.description = internshipOffers.value.description;
    formData.startDate = formattedStart;
    formData.endDate = formattedEnd;
    formData.weeklyWorkHours = internshipOffers.value.weeklyWorkHours;
    formData.salary = internshipOffers.value.salary;
    formData.requiredSkills = internshipOffers.value.requiredSkills;
    formData.internshipType._id = internshipOffers.value.internshipType._id;
    formData.paid = internshipOffers.value.paid;
    formData.isActive = internshipOffers.value.isActive;
    formData.enterprise = internshipOffers.value.enterprise;

}
</script>

<style scoped>
::-webkit-calendar-picker-indicator {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path fill="" d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>');
}
</style>