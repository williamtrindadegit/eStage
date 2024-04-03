<template>
    <div class="bg-gray-100">
    <div class="max-w-5xl p-4 my-0 pt-10 mx-auto">
        <h2 
            class="text-4xl font-bold text-slate-600 border-l-[10px] pl-5 border-fuchsia-900 py-2 mb-20">Détail sur l'entreprise</h2>
        <div>
            <div class="border-l-8 border-slate-600 pl-2 my-4">
                <p class="font-bold text-slate-600">Entreprise</p>
                <p class="font-bold text-slate-600 text-4xl">{{ name }} </p>
            </div>
        </div>
        <div class="bg-white p-5">
            <div class="flex flex-col pb-2">
                <label for="description" class="text-slate-600 font-bold text-3xl mb-5 mt-5">Courte
                    présentation</label>
                    {{ description }}
            </div>
            <fieldset class="grid grid-cols-2 max-w-5xl mt-8">
                <legend class="text-slate-600 font-bold mb-6">Informations sur l'entreprise</legend>
                
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

                <div class="col-span-2 sm:col-span-1 mr-0 sm:mr-4 mb-6">
                    <label for="city" class="form-control w-full max-w-md">
                        <div class="border-l-8 border-slate-600 pl-2">
                            <div class="label pt-0">
                                <span class="text-slate-600 font-bold">Province</span>
                            </div>
                            {{ province }}
                        </div>
                    </label>
                </div>
                <div class="col-span-2 sm:col-span-1">
                    <label for="email" class="form-control w-full max-w-md">
                        <div class="border-l-8 border-slate-600 pl-2">
                            <div class="label pt-0">
                                <span class="text-slate-600 font-bold">WebSite</span>
                            </div>
                            {{ website }}
                        </div>
                    </label>
                </div>

                <div class="col-span-2 sm:col-span-1 mr-0 sm:mr-4 ">
                    <label for="city" class="form-control w-full max-w-md">
                        <div class="border-l-8 border-slate-600 pl-2">
                            <div class="label pt-0">
                                <span class="text-slate-600 font-bold">Code postal</span>
                            </div>
                            {{ postalCode }}
                        </div>
                    </label>
                </div>
                <div class="col-span-2 sm:col-span-1">
                    <label for="email" class="form-control w-full max-w-md">
                        <div class="border-l-8 border-slate-600 pl-2">
                            <div class="label pt-0">
                                <span class="text-slate-600 font-bold">Secteur d'activité</span>
                            </div>
                            {{ activitySector }}
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

import EntrepriseService from "@/services/Enterprises";

const router = useRouter();


const image = ref("");
const name = ref("");
const address = ref("");
const postalCode = ref("");
const city = ref("");
const province = ref({});
const phone = ref("");
const email = ref("");
const description = ref("");
const activitySector = ref({});
const website = ref("");



onMounted(async () => {

const _id = router.currentRoute.value.params.id;
console.log(_id);

try {

const entreprise = await EntrepriseService.FindOne(_id);

image.value = entreprise.image;
name.value = entreprise.name;
address.value =  entreprise.address;
postalCode.value =  entreprise.postalCode;
city.value =  entreprise.city;
province.value =  entreprise.province.value;
phone.value =  entreprise.phone;
email.value =  entreprise.email;
description.value =  entreprise.description;
activitySector.value =  entreprise.activitySector.value;
website.value =  entreprise.website;

} catch (error) {
console.error("Erreur lors de la récupération de l'entreprise:", error);
}
});



</script>