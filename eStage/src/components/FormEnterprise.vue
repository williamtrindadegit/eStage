<template>
    <div class="bg-gray-100">
        <form class="max-w-5xl p-4 my-0 pt-10 mx-auto" @submit.prevent="validateEnterpriseForm()">
            <h2 v-if="route.name == 'addenterprise'"
                class="text-4xl font-bold text-slate-600 border-l-[10px] pl-5 border-blue-400 py-2 mb-20">Ajouter une
                entreprise</h2>
            <div v-if="route.name == 'addenterprise'">
                <div class="flex justify-end mb-4">
                    <router-link to="/dashboard">
                        <button
                            class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-blue-800 hover:text-white">
                            Annuler
                        </button>
                    </router-link>
                    <button class="btn bg-blue-400 text-white hover:bg-blue-900">
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
                        <label for="name" class="text-slate-600 font-bold max-w-24 w-full">Entreprise: </label>
                        <input type="text" name="name" id="name" v-model="formData.name"
                            class="input input-bordered w-full bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                            placeholder="" />
                    </div>
                    <div class="ml-24 mb-4">
                        <span class="label-text-alt text-red-500" v-if="!formValidation.name">{{ errorMessages.name
                            }}</span>
                    </div>
                    <div class="flex items-center mb-8">
                        <label class="text-slate-600 font-bold max-w-24 w-full">Logo: </label>
                        <FileInput class="w-full min-w-[280px]" />
                    </div>
                </div>
            </div>
            <div v-if="route.name == 'editenterprise'">
                <div class="border-l-8 border-slate-600 pl-2">
                    <p class="font-bold text-slate-600">Entreprise</p>
                    <p class="font-bold text-slate-600 text-4xl">{{ formData.name }}</p>
                </div>
                <div class="flex justify-end mb-4">
                    <router-link to="/dashboard">
                        <button
                            class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-blue-800 hover:text-white">
                            Annuler
                        </button>
                    </router-link>
                    <button class="btn bg-blue-400 text-white hover:bg-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 -960 960 960"
                            stroke="currentColor">
                            <path
                                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160v212q-19-8-39.5-10.5t-40.5.5v-169L647-760H200v560h240v80H200Zm0-640v560-560ZM520-40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-260L643-40H520Zm300-263-37-37 37 37ZM580-100h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM240-560h360v-160H240v160Zm240 320h4l116-115v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
                        </svg>
                        Mettre à jour
                    </button>
                </div>
                <div>
                    <div class="flex items-center">
                        <label for="name" class="text-slate-600 font-bold max-w-24 w-full">Entreprise: </label>
                        <input type="text" name="name" id="name" v-model="formData.name"
                            class="input input-bordered w-full bg-slate-50 border-gray-400 rounded p-2 text-slate-500"
                            placeholder="" />
                    </div>
                    <div class="ml-24 mb-4">
                        <span class="label-text-alt text-red-500" v-if="!formValidation.name">{{ errorMessages.name
                            }}</span>
                    </div>
                    <div class="flex items-center mb-8">
                        <label class="text-slate-600 font-bold max-w-24 w-full">Logo: </label>
                        <FileInput class="w-full min-w-[280px]" />
                        <!-- TODO manage this  -->
                    </div>
                </div>
            </div>
            <div class="bg-white p-5">
                <div class="flex flex-col pb-2">
                    <label for="description" class="text-blue-400  font-bold text-3xl mb-5 mt-5">Courte
                        présentation</label>
                    <textarea name="description" id="description" v-model="formData.description"
                        class="textarea textarea-bordered bg-slate-50 border-gray-400 rounded p-2 text-slate-500 h-24"
                        placeholder=""></textarea>
                    <span class="label-text-alt text-red-500" v-if="!formValidation.description">{{
            errorMessages.description }}</span>
                </div>
                <div class="col-span-2 sm:col-span-1 mt-5">
                    <label for="contactName" class="form-control w-full max-w-md">
                        <div class="border-l-8 border-slate-600 pl-2">
                            <!-- Personne contacte manquant dans l'API. On ne prend pas en compte la donnée. -->
                            <div class="label pt-0">
                                <span class="text-slate-600 font-bold">Personne contact</span>
                            </div>
                            <input type="text" name="contactName" id="contactName" placeholder=""
                                v-model="formData.contactName"
                                class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500" />
                        </div>
                        <div class="label pl-5">
                            <span class="label-text-alt text-red-500" v-if="!formValidation.contactName">{{
            errorMessages.contactName }}</span>
                        </div>
                    </label>
                </div>
                <fieldset class="grid grid-cols-2 max-w-5xl mt-8">
                    <legend class="text-blue-400 font-bold mb-6">Informations de contact</legend>
                    <div class="col-span-2 sm:col-span-1 mr-0 sm:mr-4">
                        <label for="address" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Adresse</span>
                                </div>
                                <input type="text" name="address" id="address" placeholder="" v-model="formData.address"
                                    class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" v-if="!formValidation.address">{{
            errorMessages.address }}</span>
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="phone" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Téléphone</span>
                                </div>
                                <input type="tel" name="phone" id="phone" placeholder="" v-model="formData.phone"
                                    class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" v-if="!formValidation.phone">{{
            errorMessages.phone }}</span>
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2 sm:col-span-1 mr-0 sm:mr-4">
                        <label for="city" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Ville</span>
                                </div>
                                <input type="text" name="city" id="city" placeholder="" v-model="formData.city"
                                    class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" v-if="!formValidation.city">{{
            errorMessages.city }}</span>
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="email" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Courriel</span>
                                </div>
                                <input type="text" name="email" id="email" placeholder="" v-model="formData.email"
                                    class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" v-if="!formValidation.email">{{
            errorMessages.email }}</span>
                            </div>
                        </label>
                    </div>
                    <div class="col-span-2">
                        <label for="province" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Province</span>
                                </div>
                                <select name="province" id="province" v-model="formData.province._id"
                                    class="select select-bordered w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500">
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
                        <label for="postalCode" class="form-control w-full max-w-md">
                            <div class="border-l-8 border-slate-600 pl-2">
                                <div class="label pt-0">
                                    <span class="text-slate-600 font-bold">Code postal</span>
                                </div>
                                <input type="text" name="postalCode" id="postalCode" placeholder=""
                                    v-model="formData.postalCode"
                                    class="input w-full max-w-md bg-slate-50 border-gray-400 rounded p-2 text-slate-500" />
                            </div>
                            <div class="label pl-5">
                                <span class="label-text-alt text-red-500" v-if="!formValidation.postalCode">{{
                                    errorMessages.postalCode }}</span>
                            </div>
                        </label>
                    </div>
                </fieldset>
            </div>
            <div v-if="route.name == 'addenterprise'" class="flex justify-end mb-4 mt-4">
                <router-link to="/dashboard">
                    <button
                        class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-blue-800 hover:text-white">
                        Annuler
                    </button>
                </router-link>
                <button class="btn bg-blue-400 text-white hover:bg-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 -960 960 960"
                        stroke="currentColor">
                        <path
                            d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160v212q-19-8-39.5-10.5t-40.5.5v-169L647-760H200v560h240v80H200Zm0-640v560-560ZM520-40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-260L643-40H520Zm300-263-37-37 37 37ZM580-100h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM240-560h360v-160H240v160Zm240 320h4l116-115v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
                    </svg>
                    Sauvegarder
                </button>
            </div>
            <div v-if="route.name == 'editenterprise'" class="flex justify-end mb-4 mt-4">
                <router-link to="/dashboard">
                    <button
                        class="btn mr-2 bg-transparent text-slate-600 border-gray-400 hover:bg-blue-800 hover:text-white">
                        Annuler
                    </button>
                </router-link>
                <button class="btn bg-blue-400 text-white hover:bg-blue-800">
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
import Enterprises from '../services/Enterprises';
import Provinces from '../services/Provinces';
import FileInput from './FileInput.vue';

import { useRoute, useRouter } from 'vue-router';
import { ref, reactive, onMounted } from 'vue';

const route = useRoute();
const vueRouter = useRouter();

//Mock to be used when sending data to the API that is not in the designed form
const mockEnterprise = {
    image: "aHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvZ29sZGVuLWJsdWUtZGlhbW9uZC1zaGFwZS1sb2dvLWJ1c2luZXNzLXRlbXBsYXRlXzIzLTIxNDg3MDc2NDguanBnP3c9NzQwJnQ9c3Q9MTcxMjE4MjgxOX5leHA9MTcxMjE4MzQxOX5obWFjPWQyNTVhNmE3MWM5MzZhMGMzMzIzMGU4YzA3YjNlM2UwNmE2NjUyNDU0YjlhMmMzYWU3NjNhZjdlMzBiNjVmYzc=",
    name: "Example Company Inc.",
    address: "123 Main St",
    postalCode: "h0h 0h0",
    city: "Example City",
    province: {
        _id: "65e4dfcb2951efc25ce318cf",
        value: "BRITISH COLUMBIA"
    },
    phone: "819-990-2217",
    email: "info@examplecompany.com",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    activitySector: {
        _id: "660334e85526fb10bf2aae4a",
        value: "Front-End development"
    },
    website: "https://examplecompany.com",
    contactName: "John Doe"
}

const formData = reactive({
    image: mockEnterprise.image,
    name: "",
    address: "",
    postalCode: "",
    city: "",
    province: {
        _id: "",
        value: ""
    },
    phone: "",
    email: "",
    description: "",
    activitySector: {
        _id: mockEnterprise.activitySector._id,
        value: mockEnterprise.activitySector.value
    },
    website: mockEnterprise.website,
    contactName: "" //this wont be sent to the API. validation purposes only
});

const formValidation = reactive({
    image: true,
    name: true,
    address: true,
    postalCode: true,
    city: true,
    province: true,
    phone: true,
    email: true,
    description: true,
    activitySector: true,
    website: true,
    contactName: true
});

const errorMessages = reactive({
    image: "Vous devez ajouter un logo",
    name: "Vous devez ajouter un nom",
    address: "Vous devez ajouter une adresse",
    postalCode: "Vous devez ajouter un code postal",
    city: "Vous devez ajouter une ville",
    province: "Vous devez choisir une province",
    phone: "Vous devez ajouter un numéro de téléphone",
    email: "Vous devez ajouter un courriel",
    description: "Vous devez ajouter une description",
    activitySector: "Vous devez choisir un secteur d'activité",
    website: "Vous devez ajouter un site web",
    contactName: "Vous devez ajouter un nom de contact"
});

const provinces = ref([]);
const enterprises = ref([]);

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PHONE_REGEX = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
const POSTAL_CODE_REGEX = /^[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]$/;
const NAME_REGEX = /^[a-zA-Z\s-]+$/;

onMounted(async () => {
    provinces.value = await Provinces.FindAll();

    if (route.name === 'editenterprise') {
        enterprises.value = await Enterprises.FindOne(route.params.id);
        getEnterpriseDetails();
    }
});

const resetErrMessages = () => {
    errorMessages.image = "Vous devez ajouter un logo";
    errorMessages.name = "Vous devez ajouter un nom";
    errorMessages.address = "Vous devez ajouter une adresse";
    errorMessages.postalCode = "Vous devez ajouter un code postal";
    errorMessages.city = "Vous devez ajouter une ville";
    errorMessages.province = "Vous devez choisir une province";
    errorMessages.phone = "Vous devez ajouter un numéro de téléphone";
    errorMessages.email = "Vous devez ajouter un courriel";
    errorMessages.description = "Vous devez ajouter une description";
    errorMessages.activitySector = "Vous devez choisir un secteur d'activité";
    errorMessages.website = "Vous devez ajouter un site web";
    errorMessages.contactName = "Vous devez ajouter un nom de contact";
}

const validateEnterpriseForm = () => {
    resetErrMessages();
    Object.entries(formData).forEach(([key, currentValue]) => {

        if (key === 'email') {
            if (currentValue === "") {
                formValidation.email = false;
                errorMessages.email = 'Veuillez renseigner une adresse courriel.';
            } else {
                formValidation.email = EMAIL_REGEX.test(currentValue);
                formValidation.email ? '' : errorMessages.email = 'Veuillez renseigner une adresse courriel qui respecte le format suivant : exemple@exemple.com';
            }
        } else if (key === 'phone') {
            if (currentValue === "") {
                formValidation.phone = false;
                errorMessages.phone = 'Veuillez renseigner un numéro de téléphone.';
            } else {
                formValidation.phone = PHONE_REGEX.test(currentValue);
                formValidation.phone ? '' : errorMessages.phone = 'Veuillez renseigner un numéro de téléphone qui respecte le format suivant : 555-123-4567.';
            }
        } else if (key === 'postalCode') {
            if (currentValue === "") {
                formValidation.postalCode = false;
                errorMessages.postalCode = 'Veuillez renseigner un code postal.';
            } else {
                formValidation.postalCode = POSTAL_CODE_REGEX.test(currentValue);
                formValidation.postalCode ? '' : errorMessages.postalCode = 'Veuillez renseigner un code postal qui respecte le format suivant : A1A 1A1.';
            }
        } else if (key === 'name') {
            if (currentValue === "") {
                formValidation.name = false;
                errorMessages.name = 'Veuillez renseigner le nom de votre entreprise.';
            } else {
                formValidation.name = NAME_REGEX.test(currentValue);
                formValidation.name ? '' : errorMessages.name = 'Votre nom d\'entreprise ne doit pas contenir de charactère spéciaux ni de chiffres.';
            }
        } else if (key === 'contactName') {
            if (currentValue === "") {
                formValidation.contactName = false;
                errorMessages.contactName = 'Veuillez renseigner le nom de la personne contacte de votre entreprise.';
            } else {
                formValidation.contactName = NAME_REGEX.test(currentValue);
                formValidation.contactName ? '' : errorMessages.contactName = 'Le nom de la personne contacte de votre entreprise ne peut pas contenir de charactères spéciaux ni de chiffres.';
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
        sendDataToApi();
    }
};

const sendDataToApi = () => {
    formData._id = route.params.id;
    if (route.name === 'editenterprise') {
        Enterprises.Update(formData).then(async () => {
            await vueRouter.push({ path: '/entreprises' });
        }).catch(error => {
            console.log(error);
        });
    } else if (route.name === 'addenterprise') {
        Enterprises.Create(formData).then(async () => {
            await vueRouter.push({ path: '/entreprises' });
        }).catch(error => {
            console.log(error);
        });
    }
};

const getEnterpriseDetails = () => {
    formData.description = enterprises.value.description;
    formData.email = enterprises.value.email;
    formData.name = enterprises.value.name;
    formData.address = enterprises.value.address;
    formData.phone = enterprises.value.phone;
    formData.city = enterprises.value.city;
    formData.contactName = mockEnterprise.contactName;

    if (enterprises.value.province === null) {
        enterprises.value.province = {
            _id: "",
            value: ""
        }
    } else {
        formData.province._id = enterprises.value.province._id;
        formData.province.value = enterprises.value.province.value;
    }

    formData.postalCode = enterprises.value.postalCode;
}


</script>

<style scoped></style>