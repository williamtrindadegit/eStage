<template>
    <div class="bg-gray-100">
        <!-- changer pour max-w-5xl dans les autres formulaires -->
        <form class="max-w-5xl p-4 my-0 pt-10 mx-auto" @submit.prevent="validateCandidateForm()">
            <h2 v-if="route.name == 'addcandidate' || route.name == 'addinternshiprequest' || route.name == 'editinternshiprequest'"
                class="text-4xl font-bold text-slate-600 border-l-[10px] pl-5 border-purple-700 py-2 mb-20">Ajouter
                un
                Candidat</h2>
            <!-- Ajouter une condition selon la route: Ajouter ou Modifier -->
            <div v-if="route.name == 'addcandidate' || route.name == 'addinternshiprequest' || route.name == 'editinternshiprequest'">
                <div class="flex justify-end mb-4">
                    <router-link to="/dashboard">
                        <button
                            class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-fuchsia-950 hover:text-white">
                            Annuler
                        </button>
                    </router-link>

                    <button class="btn bg-purple-700 text-white hover:bg-fuchsia-950">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 -960 960 960"
                            stroke="currentColor">
                            <path
                                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160v212q-19-8-39.5-10.5t-40.5.5v-169L647-760H200v560h240v80H200Zm0-640v560-560ZM520-40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-260L643-40H520Zm300-263-37-37 37 37ZM580-100h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM240-560h360v-160H240v160Zm240 320h4l116-115v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
                        </svg>Sauvegarder
                    </button>
                </div>
                <div>
                    <div class="flex items-center">
                        <label for="fullName" class="text-slate-600 font-bold max-w-36 w-full">Nom et prenom: </label>
                        <input type="text" name="fullName" id="fullName"
                            class="input input-bordered w-full bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                            placeholder="" v-model="formData.fullName" />
                    </div>
                    <div class="ml-36 mb-4">
                        <span class="label-text-alt text-red-500" v-if="!formValidation.fullName">{{
            errorMessages.errName }}</span>
                    </div>
                    <div class="flex items-center">
                        <label for="skills" class="text-slate-600 font-bold max-w-36 w-full">Compétences: </label>
                        <input type="text" name="skills" id="skills"
                            class="input input-bordered w-full bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                            placeholder="javascript,css,html ..." v-model="formData.skills" />
                    </div>
                    <div class="ml-36 mb-4">
                        <span class="label-text-alt text-red-500" v-if="!formValidation.skills">{{
            errorMessages.errSkills }}</span>
                    </div>
                </div>
            </div>
            <div v-if="route.name == 'editcandidate'">
                <div class="border-l-8 border-slate-600 pl-2">
                    <p class="font-bold text-slate-600">Candidat</p>
                    <p class="font-bold text-slate-600 text-4xl">{{ formData.fullName }}</p>
                </div>
                <div class="flex justify-end mb-4">
                    <router-link to="/dashboard">
                        <button
                            class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-fuchsia-950 hover:text-white">
                            Annuler
                        </button>
                    </router-link>
                    <button class="btn bg-purple-700 text-white hover:bg-fuchsia-950">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 -960 960 960"
                            stroke="currentColor">
                            <path
                                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160v212q-19-8-39.5-10.5t-40.5.5v-169L647-760H200v560h240v80H200Zm0-640v560-560ZM520-40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-260L643-40H520Zm300-263-37-37 37 37ZM580-100h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM240-560h360v-160H240v160Zm240 320h4l116-115v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
                        </svg>
                        Mettre à jour
                    </button>
                </div>
            </div>
            <!-- End block -->
            <div class="bg-white p-5">
                <div class="flex flex-col pb-2">
                    <label for="description" class="text-purple-700 font-bold text-3xl mb-5 mt-5">Courte
                        présentation</label>
                    <textarea name="description" id="description"
                        class="textarea textarea-bordered bg-slate-50 border-gray-400 rounded p-2 text-slate-500 h-24"
                        placeholder="" v-model="formData.description">
                    </textarea>
                    <span class="label-text-alt text-red-500" v-if="!formValidation.description">Veuillez renseigner le
                        champ.</span>
                </div>
                <fieldset class="grid grid-cols-2 max-w-5xl mt-8">
                    <legend class="text-purple-700 font-bold mb-6">Informations personnelles</legend>
                    <!-- ajouter mr-0 sm:mr-4 dans les autres formulaires -->
                    <div class="col-span-2 sm:col-span-1 mr-0 sm:mr-4">
                        <label for="address" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Adresse</span>
                                </div>
                                <input type="text" name="address" id="address" placeholder=""
                                    class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                                    v-model="formData.address" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" v-if="!formValidation.address">Veuillez
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
                                    v-model="formData.phone" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" v-if="!formValidation.phone">{{
            errorMessages.errPhone }}</span>
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
                                    v-model="formData.city" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" v-if="!formValidation.city">Veuillez
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
                                    v-model="formData.email" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" v-if="!formValidation.email">{{
            errorMessages.errEmail }}</span>
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
                                    v-model="formData.province._id">
                                    <option disabled selected>Veuillez effectuer un choix</option>
                                    <option v-for="province in provinces" :key="province._id" :value="province._id">{{
            province.value }}</option>
                                </select>
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" v-if="!formValidation.province">Veuillez
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
                                    v-model="formData.postalCode" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" v-if="!formValidation.postalCode">{{
            errorMessages.errPostalCode }}</span>
                            </div>
                        </label>
                    </div>
                </fieldset>
            </div>
            <!-- Ajouter une condition selon la route: Ajouter ou Modifier -->
            <div v-if="route.name == 'addcandidate' || route.name == 'addinternshiprequest' || route.name == 'editinternshiprequest'"
                class="flex justify-end mb-4 mt-4">
                <router-link to="/dashboard">
                    <button
                        class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-fuchsia-950 hover:text-white">
                        Annuler
                    </button>
                </router-link>
                <button class="btn bg-purple-700 text-white hover:bg-fuchsia-950">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 -960 960 960"
                        stroke="currentColor">
                        <path
                            d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160v212q-19-8-39.5-10.5t-40.5.5v-169L647-760H200v560h240v80H200Zm0-640v560-560ZM520-40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-260L643-40H520Zm300-263-37-37 37 37ZM580-100h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM240-560h360v-160H240v160Zm240 320h4l116-115v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
                    </svg>
                    Sauvegarder
                </button>
            </div>
            <div v-if="route.name == 'editcandidate'" class="flex justify-end mb-4 mt-4">
                <router-link to="/dashboard">
                    <button
                        class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-fuchsia-950 hover:text-white">
                        Annuler
                    </button>
                </router-link>
                <button class="btn bg-purple-700 text-white hover:bg-fuchsia-950">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 -960 960 960"
                        stroke="currentColor">
                        <path
                            d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160v212q-19-8-39.5-10.5t-40.5.5v-169L647-760H200v560h240v80H200Zm0-640v560-560ZM520-40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-260L643-40H520Zm300-263-37-37 37 37ZM580-100h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM240-560h360v-160H240v160Zm240 320h4l116-115v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
                    </svg>
                    Mettre à jour
                </button>
            </div>
            <!-- End block -->
        </form>

    </div>

</template>

<script setup>
import Provinces from '../services/Provinces';
import Candidates from '../services/Candidates';

import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted, reactive } from 'vue';

const route = useRoute();
const vueRouter = useRouter();

//should reflect the UI from the form
//any data formatting should be done afterwards
//before sending it to the API
const formData = reactive({
    description: "",
    email: "",
    fullName: "",
    address: "",
    phone: "",
    city: "",
    post: "",
    skills: [
        ""
    ],
    province: {
        _id: "",
        value: ""
    },
    postalCode: ""
});

const formValidation = reactive({
    description: true,
    email: true,
    fullName: true,
    address: true,
    phone: true,
    city: true,
    skills: true,
    province: true,
    postalCode: true
})

const candidateMock = {
    _id: "65f235a364349dd39512ea83",
    description: "Passionate web developer with a knack for creating intuitive user interfaces and improving website efficiency.",
    email: "jane.doe@example.com",
    firstName: "Jane",
    lastName: "Doe",
    address: "1234 Maple Street",
    phone: "514-966-4567",
    city: "Techville",
    skills: [
        "React",
        "Vue.js",
        "CSS"
    ],
    province: null,
    postalCode: "K1A 0B1",
    __v: 0
};

const errorMessages = reactive({
    errName: "Votre nom et prénom doivent être séparés par un espace.",
    errSkills: "Veuillez renseigner vos compétences.",
    errPhone: "Veuillez renseigner un numéro de téléphone valide.",
    errEmail: "Veuillez renseigner une adresse courriel valide.",
    errPostalCode: "Veuillez renseigner un code postal valide."
});

const provinces = ref([]);

const candidate = ref([]);

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PHONE_REGEX = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
const POSTAL_CODE_REGEX = /^[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]$/;
const FULLNAME_REGEX = /^[a-zA-Z-]+ [a-zA-Z-]+$/;

//FIXME: v-model data (formData) is not updated on the frontend when using the edit route.
onMounted(async () => {
    provinces.value = await Provinces.FindAll();

    if (route.name === 'editcandidate') {
        candidate.value = await Candidates.FindOne(route.params.id);
        getCandidateDetails();
    }
});

const validateCandidateForm = () => {
    resetErrMessages();
    Object.entries(formData).forEach(([key, currentValue]) => {
        if (key === 'email') {
            if (currentValue === "") {
                formValidation.email = false;
                errorMessages.errEmail = 'Veuillez renseigner une adresse courriel.';
            } else {
                formValidation.email = EMAIL_REGEX.test(currentValue);
                formValidation.email ? '' : errorMessages.errEmail = 'Veuillez renseigner une adresse courriel qui respecte le format suivant : exemple@exemple.com';
            }
        } else if (key === 'phone') {
            if (currentValue === "") {
                formValidation.phone = false;
                errorMessages.errPhone = 'Veuillez renseigner un numéro de téléphone.';
            } else {
                formValidation.phone = PHONE_REGEX.test(currentValue);
                formValidation.phone ? '' : errorMessages.errPhone = 'Veuillez renseigner un numéro de téléphone qui respecte le format suivant : 555-123-4567.';
            }
        } else if (key === 'skills') {
            if (currentValue === "") {
                formValidation.skills = false;
                errorMessages.errSkills = 'Veuillez renseigner vos compétences en les séparant par une virgule.';
            } else {
                formValidation.skills = true;
                formValidation.post = true;
            }
        } else if (key === 'postalCode') {
            if (currentValue === "") {
                formValidation.postalCode = false;
                errorMessages.errPostalCode = 'Veuillez renseigner un code postal.';
            } else {
                formValidation.postalCode = POSTAL_CODE_REGEX.test(currentValue);
                formValidation.postalCode ? '' : errorMessages.errPostalCode = 'Veuillez renseigner un code postal qui respecte le format suivant : A1A 1A1.';
            }
        } else if (key === 'fullName') {
            if (currentValue === "") {
                formValidation.fullName = false;
                errorMessages.errName = 'Veuillez renseigner votre nom et prénom.';
            } else {
                formValidation.fullName = FULLNAME_REGEX.test(currentValue);
                formValidation.fullName ? '' : errorMessages.errName = 'Votre nom et prénom doivent être séparés par un espace.';
            }
        } else if (key === 'province') {
            const foundProvince = provinces.value.find(province => province._id === currentValue._id);
            if (foundProvince) {
                formData.province.value = foundProvince.value;
                formValidation.province = true;
            } else {
                formValidation.province = false;
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
        formatDataForAPI();
    }
};

const resetErrMessages = () => {
    errorMessages.errName = "Votre nom et prénom doivent être séparés par un espace.";
    errorMessages.errSkills = "Veuillez renseigner vos compétences.";
    errorMessages.errPhone = "Veuillez renseigner un numéro de téléphone valide.";
    errorMessages.errEmail = "Veuillez renseigner une adresse courriel valide.";
    errorMessages.errPostalCode = "Veuillez renseigner un code postal valide.";
}

const getCandidateDetails = () => {
    formData.description = candidate.value.description;
    formData.email = candidate.value.email;
    formData.fullName = `${candidate.value.firstName} ${candidate.value.lastName}`;
    formData.address = candidate.value.address;
    formData.phone = candidate.value.phone;
    formData.city = candidate.value.city;
    formData.skills = candidate.value.skills;
    formData.post = candidate.value.skills[0];
    if (candidate.value.province === null) {
        candidate.value.province = {
            _id: "",
            value: ""
        }
    } else {
        formData.province._id = candidate.value.province._id;
        formData.province.value = candidate.value.province.value;
    }

    formData.postalCode = candidate.value.postalCode;
}

const formatDataForAPI = async () => {
    if (formValidation.skills) {
        if (typeof (formData.skills) === 'string') {
            formData.skills = formData.skills.split(',');
        }
    }
    if (formValidation.fullName) {
        formData.fullName = formData.fullName.split(' ');
        formData.firstName = formData.fullName[0];
        formData.lastName = formData.fullName[1];
        delete formData.fullName;
    }

    if (route.name === 'editcandidate') {
        formData._id = route.params.id; //as in the backend api (candidate object as _id property)
        formData.id = route.params.id; //as needed for api.js (id instead of _id)
        Candidates.Update(formData).then(async () => {
            await vueRouter.push({ path: '/candidats' });
        }).catch(error => {
            console.log(error);
        });
    } else if (route.name === 'addcandidate') {
        Candidates.Create(formData).then(async () => {
            await vueRouter.push({ path: '/candidats' });
        }).catch(error => {
            console.log(error);
        });
    } else if (route.name === 'addinternshiprequest') {
        try {
            await Candidates.Create(formData);
            showDialog.value = false;
            await vueRouter.push({ path: '/addinternshiprequest' });
        } catch (error) {
            console.log(error);
        }
    }
}


</script>

<style scoped></style>