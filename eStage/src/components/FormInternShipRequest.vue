<template>
    <div class="bg-gray-100">
        <form class="max-w-5xl p-4 my-0 pt-10 mx-auto" @submit.prevent="validateInternshipRequestForm()">
            <h2 v-if="route.name == 'addinternshiprequest'"
                class="text-4xl font-bold text-slate-600 border-l-[10px] pl-5 border-yellow-500 py-2 mb-20">Ajouter une
                demande de stage</h2>
            <div v-if="route.name == 'addinternshiprequest'">
                <div class="flex justify-end mb-4">
                    <router-link to="/dashboard">
                        <button
                            class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-amber-500 hover:text-white">
                            Annuler
                        </button>
                    </router-link>
                    <button class="btn bg-yellow-500 text-white hover:bg-amber-500">
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
                            placeholder="" v-model="formData.title">
                    </div>
                    <div class="ml-24 mb-4">
                        <span class="label-text-alt text-red-500" v-if="!formValidation.title">{{ errorMessages.title
                            }}</span>
                    </div>
                </div>
            </div>
            <div v-if="route.name == 'editinternshiprequest'">
                <div class="border-l-8 border-yellow-600 pl-2 mb-4">

                    <p class="text-4xl font-bold text-slate-600">Demande de stage</p>
                    <p class="text-2xl font-bold text-slate-600 ">{{ formData.title }}</p>
                </div>
                <div class="flex justify-end mb-4">
                    <router-link to="/dashboard">
                        <button
                            class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-amber-500 hover:text-white">
                            Annuler
                        </button>
                    </router-link>
                    <button class="btn bg-yellow-500 text-white hover:bg-amber-500">
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
                    <label for="enterprise" class="text-slate-600 font-bold mb-1 mt-5">Candidat: </label>
                    <select id="enterprise" name="enterprise"
                        class="select select-bordered w-full bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                        v-model="formData.candidate._id">
                        <option disabled selected>Veuillez effectuer un choix</option>
                        <option v-for="candidate in candidates" :key="candidate._id" :value="candidate._id">{{
            candidate.firstName }} {{ candidate.lastName }}</option>
                        <!-- ajout des entreprises avec l'api -->
                    </select>
                    <button class="btn bg-yellow-500 text-white hover:bg-amber-500 mt-5"
                        onclick="addForm.showModal()">Ajouter un Candidat</button>
                    <dialog id="addForm" className="modal max-h-[90vh] overflow-y-auto">
                        <FormCandidate :isModal="true" className=" bg-white  rounded-lg" />
                    </dialog>
                </div>
                <div class="label">
                    <span class="label-text-alt text-red-500" v-if="!formValidation.candidate">{{
            errorMessages.candidate }}</span>
                </div>
                <div class="flex flex-col">
                    <label for="description" class="text-slate-600 font-bold mb-1 mt-5">Présentation</label>
                    <textarea name="description" id="description"
                        class="textarea textarea-bordered bg-slate-50 border-gray-400 rounded p-2 text-slate-500 h-24"
                        placeholder="" v-model="formData.description"></textarea>
                    <span class="label-text-alt text-red-500" v-if="!formValidation.description">{{
            errorMessages.description }}</span>
                </div>
                <fieldset class="grid grid-cols-2 max-w-5xl mt-8">
                    <div class="col-span-2 sm:col-span-1 mr-0 sm:mr-4">
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
                    <div class="col-span-2 sm:col-span-1">
                        <label for="schoolName" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Établissement Scolaire</span>
                                </div>
                                <input type="text" name="schoolName" id="schoolName" placeholder=""
                                    class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                                    v-model="formData.schoolName" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" v-if="!formValidation.schoolName">{{
            errorMessages.schoolName }}</span>
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
                                    class="select select-bordered w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                                    v-model="formData.activitySector._id">
                                    <option disabled selected>Veuillez effectuer un choix</option>
                                    <option v-for="activitySector in activitySectors" :key="activitySector._id"
                                        :value="activitySector._id">{{ activitySector.value }}</option>
                                    <!-- ajout des secteurs avec l'api -->
                                </select>
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" v-if="!formValidation.activitySector">{{
            errorMessages.activitySector }}</span>
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
                                    class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                                    v-model="formData.city" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" v-if="!formValidation.city">{{
            errorMessages.city }}</span>
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
                                    class="select select-bordered w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                                    v-model="formData.province._id">
                                    <option disabled selected>Veuillez effectuer un choix</option>
                                    <option v-for="province in provinces" :key="province._id" :value="province._id">{{
            province.value }}</option>
                                </select>
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" v-if="!formValidation.province">{{
            errorMessages.province }}</span>
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
                                    placeholder="" v-model="formData.skills"></textarea>
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" v-if="!formValidation.skills"> {{
            errorMessages.skills }}</span>
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
                            <label class="ml-4 text-slate-600" for="DISCRETIONARY">À la discrétion de
                                l'etreprise</label>
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
                        <label for="additionalInformation" class="text-slate-600 font-bold mb-1 mt-5">Informations
                            supplémentaires</label>
                        <textarea name="additionalInformation" id="additionalInformation"
                            class="textarea textarea-bordered bg-slate-50 border-gray-400 rounded p-2 text-slate-500 h-24"
                            placeholder="" v-model="formData.additionalInformation"></textarea>
                        <span class="label-text-alt text-red-500" v-if="!formValidation.additionalInformation">{{
                            errorMessages.additionalInformation }}</span>
                    </div>
                    <FileInput class="mt-4 max-w-md col-span-2" />
                </fieldset>
            </div>
            <div v-if="route.name == 'addinternshiprequest'" class="flex justify-end mb-4 mt-4">
                <router-link to="/dashboard">
                    <button
                        class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-yellow-600 hover:text-white">
                        Annuler
                    </button>
                </router-link>
                <button class="btn bg-yellow-500  text-white hover:bg-yellow-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 -960 960 960"
                        stroke="currentColor">
                        <path
                            d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160v212q-19-8-39.5-10.5t-40.5.5v-169L647-760H200v560h240v80H200Zm0-640v560-560ZM520-40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-260L643-40H520Zm300-263-37-37 37 37ZM580-100h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM240-560h360v-160H240v160Zm240 320h4l116-115v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
                    </svg>
                    Sauvegarder
                </button>
            </div>
            <div v-if="route.name == 'editinternshiprequest'" class="flex justify-end mb-4 mt-4">
                <router-link to="/dashboard">
                    <button
                        class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-yellow-600 hover:text-white">
                        Annuler
                    </button>
                </router-link>
                <button class="btn bg-yellow-500  text-white hover:bg-yellow-600">
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
import ActivitySectors from '../services/ActivitySectors';
import InternshipTypes from '../services/InternshipTypes';
import Candidates from '../services/Candidates';
import InternshipRequests from '../services/InternshipRequests';
import FormCandidate from './FormCandidate.vue';
import FileInput from './FileInput.vue';

import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted, reactive } from 'vue';

const provinces = ref([]);
const activitySectors = ref([]);
const internshipTypes = ref([]);
const candidates = ref([]);
const internshipRequest = ref({});

const route = useRoute();
const vueRouter = useRouter();


const formData = reactive({
    title: '',
    description: '',
    formationProgram: '',
    schoolName: '',
    city: '',
    activitySector: {},
    paid: "DISCRETIONARY",
    candidate: {},
    startDate: '',
    endDate: '',
    weeklyWorkHours: '',
    province: {},
    skills: '',
    internshipType: {},
    additionalInformation: '',
    isActive: true,
});

const formValidation = reactive({
    title: true,
    description: true,
    formationProgram: true,
    schoolName: true,
    city: true,
    activitySector: true,
    paid: true,
    candidate: true,
    startDate: true,
    endDate: true,
    weeklyWorkHours: true,
    province: true,
    skills: true,
    internshipType: true,
    additionalInformation: true,
    isActive: true,
});

const errorMessages = reactive({
    title: 'Le titre est obligatoire',
    description: 'La description est obligatoire',
    formationProgram: 'Le programme de formation est obligatoire',
    schoolName: 'Le nom de l\'établissement scolaire est obligatoire',
    city: 'La ville est obligatoire',
    activitySector: 'Le secteur d\'activité est obligatoire',
    paid: 'La rémunération est obligatoire',
    candidate: 'Le candidat est obligatoire',
    startDate: 'La date de début est obligatoire',
    endDate: 'La date de fin est obligatoire',
    weeklyWorkHours: 'Le nombre d\'heures par semaine est obligatoire',
    province: 'La région est obligatoire',
    skills: 'Les compétences sont obligatoires',
    internshipType: 'Le type de stage est obligatoire',
    additionalInformation: 'Les informations supplémentaires sont obligatoires',
    isActive: 'Le statut est obligatoire',
});

const REQUIRED_SKILLS_REGEX = /^[a-zA-Z]+(?:,[a-zA-Z]+)*$/;
const FULLNAME_REGEX = /^[a-zA-Z-]+ [a-zA-Z-]+$/;

onMounted(async () => {
    provinces.value = await Provinces.FindAll();
    activitySectors.value = await ActivitySectors.FindAll();
    internshipTypes.value = await InternshipTypes.FindAll();
    candidates.value = await Candidates.FindAll();
    if (route.name === 'editinternshiprequest') {
        internshipRequest.value = await InternshipRequests.FindOne(route.params.id);
        getInternshipRequestDetails();
    }
});

const resetErrMessages = () => {
    errorMessages.title = 'Le titre est obligatoire',
        errorMessages.description = 'La description est obligatoire',
        errorMessages.formationProgram = 'Le programme de formation est obligatoire',
        errorMessages.schoolName = 'Le nom de l\'établissement scolaire est obligatoire',
        errorMessages.city = 'La ville est obligatoire',
        errorMessages.activitySector = 'Le secteur d\'activité est obligatoire',
        errorMessages.paid = 'La rémunération est obligatoire',
        errorMessages.candidate = 'Le candidat est obligatoire',
        errorMessages.startDate = 'La date de début est obligatoire',
        errorMessages.endDate = 'La date de fin est obligatoire',
        errorMessages.weeklyWorkHours = 'Le nombre d\'heures par semaine est obligatoire',
        errorMessages.province = 'La région est obligatoire',
        errorMessages.skills = 'Les compétences sont obligatoires',
        errorMessages.internshipType = 'Le type de stage est obligatoire',
        errorMessages.additionalInformation = 'Les informations supplémentaires sont obligatoires',
        errorMessages.isActive = 'Le statut est obligatoire'
}

const validateInternshipRequestForm = () => {
    resetErrMessages();
    Object.entries(formData).forEach(([key, currentValue]) => {
        if (key === 'skills') {
            if (currentValue === '') {
                formValidation.skills = false;
            } else {
                if (typeof currentValue === 'string') {
                    formValidation.skills = REQUIRED_SKILLS_REGEX.test(currentValue);
                    formValidation.skills ? formData.skills.split(',') : errorMessages.skills = 'Les compétences requises doivent être séparées par des virgules';
                } else {
                    formValidation.skills = true;
                }
            }
        } else if (key === 'internshipType') {
            const foundInternship = internshipTypes.value.find(internship => internship._id === currentValue._id);
            if (foundInternship) {
                formData.internshipType.value = foundInternship.value;
                formValidation.internshipType = true;
            } else {
                formValidation.internshipType = false;
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
        } else if (key === 'province') {
            const foundProvince = provinces.value.find(province => province._id === currentValue._id);
            if (foundProvince) {
                formData.province.value = foundProvince.value;
                formValidation.province = true;
            } else {
                formValidation.province = false;
            }
        } else if (key === 'activitySector') {
            const foundActivitySector = activitySectors.value.find(sector => sector._id === currentValue._id);
            if (foundActivitySector) {
                formData.activitySector.value = foundActivitySector.value;
                formValidation.activitySector = true;
            } else {
                formValidation.activitySector = false;
            }
        } else if (key === 'candidate') {
            const foundCandidate = candidates.value.find(candidate => candidate._id === currentValue._id);
            if (foundCandidate) {
                formData.candidate.value = foundCandidate.value;
                formValidation.candidate = true;
            } else {
                formValidation.candidate = false;
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
        formatData();
    }
}

const formatData = () => {
    let formattedDataForApi = {
        title: formData.title,
        description: formData.description,
        candidate: formData.candidate,
        startDate: formData.startDate,
        endDate: formData.endDate,
        weeklyWorkHours: formData.weeklyWorkHours,
        province: formData.province,
        skills: formData.skills,
        internshipType: formData.internshipType,
        additionalInformation: formData.additionalInformation,
        isActive: formData.isActive
    }
    sendDataToApi(formattedDataForApi);
}

const sendDataToApi = async (data) => {
    if (route.name === 'addinternshiprequest') {
        await InternshipRequests.Create(data).then(() => {
            vueRouter.push('/demandes-stage');
        }).catch((error) => {
            console.log(error);
        });
    } else if (route.name === 'editinternshiprequest') {
        data._id = internshipRequest.value._id;
        InternshipRequests.Update(data).then(() => {
            vueRouter.push('/demandes-stage');
        }).catch((error) => {
            console.log(error);
        });
    }
}

const getInternshipRequestDetails = () => { //later use when editing
    //reconvertir le format de date qu'on recoit de l'api
    const startDateISO = new Date(internshipRequest.value.startDate);
    const yearStart = startDateISO.getFullYear();
    const monthStart = String(startDateISO.getMonth() + 1).padStart(2, '0'); // Add 1 to month since it's zero-based
    const dayStart = String(startDateISO.getDate()).padStart(2, '0');
    const formattedStart = `${yearStart}-${monthStart}-${dayStart}`;

    const endDateISO = new Date(internshipRequest.value.endDate);
    const yearEnd = endDateISO.getFullYear();
    const monthEnd = String(endDateISO.getMonth() + 1).padStart(2, '0'); // Add 1 to month since it's zero-based
    const dayEnd = String(endDateISO.getDate()).padStart(2, '0');
    const formattedEnd = `${yearEnd}-${monthEnd}-${dayEnd}`;

    formData.title = internshipRequest.value.title;
    formData.description = internshipRequest.value.description;
    formData.candidate = internshipRequest.value.candidate;
    formData.startDate = formattedStart;
    formData.endDate = formattedEnd;
    formData.weeklyWorkHours = internshipRequest.value.weeklyWorkHours;
    formData.province = internshipRequest.value.province;
    formData.skills = internshipRequest.value.skills;
    formData.internshipType = internshipRequest.value.internshipType;
    formData.additionalInformation = internshipRequest.value.additionalInformation;
    formData.isActive = internshipRequest.value.isActive;
    formData.activitySector = activitySectors.value[0];
    formData.formationProgram = "N'est pas dans L'API";
    formData.schoolName = "N'est pas dans L'API";
    formData.city = "N'est pas dans L'API";
    formData.fullName = "N'est pas dans L'API";
}



</script>

<style scoped>
::-webkit-calendar-picker-indicator {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path fill="" d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>');
}
</style>