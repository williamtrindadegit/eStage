<template>
    <div class="bg-gray-100">
        <div class="max-w-5xl p-4 my-0 pt-10 mx-auto">
            <h2 class="text-4xl font-bold text-slate-600 border-l-[10px] pl-5 border-fuchsia-900 py-2 mb-20">Détail sur
                l'entreprise</h2>
            <div>
                <div class="border-l-8 border-slate-600 pl-2 my-4">
                    <p class="font-bold text-slate-600">Entreprise</p>
                    <p class="font-bold text-slate-600 text-4xl">{{ name }} </p>
                </div>
            </div>
            <div class="bg-white p-5">
                <div class="flex justify-end mt-16">

                    <button class="p-2 w-12">
                        <router-link :to="'/editenterprise/' + router.currentRoute.value.params.id">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#FFD43B"
                                    d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                            </svg>
                        </router-link>
                    </button>
                    <button @click="supprimerEntreprise(router.currentRoute.value.params.id)" className="p-2 w-12">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="#b91c50"
                                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                        </svg>
                    </button>
                </div>

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
        address.value = entreprise.address;
        postalCode.value = entreprise.postalCode;
        city.value = entreprise.city;
        province.value = entreprise.province.value;
        phone.value = entreprise.phone;
        email.value = entreprise.email;
        description.value = entreprise.description;
        activitySector.value = entreprise.activitySector.value;
        website.value = entreprise.website;

    } catch (error) {
        console.error("Erreur lors de la récupération de l'entreprise:", error);
    }
});

const supprimerEntreprise = async (id) => {
    if (confirm("Desirez-vous vraiment supprimer cela?")) {
        try {
            const response = await EntrepriseService.Delete(id);
            console.log('Entreprise supprimée avec succès :', response);
        } catch (error) {
            console.error(`Erreur lors de la suppression de l'entreprise :`, error);
        }
        router.push({ path: '/entreprises' })
    }
};


</script>