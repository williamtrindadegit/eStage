<template>
    <div class="bg-blue-100 mx-2 my-16 p-8 rounded-lg">
        <div class="flex justify-between">
            <div>
                
                <h2 class="text-black font-semibold">Dernières <span class="text-red-600">offres</span> de stage</h2>
                <p class="text-red-500">En attente de validation</p>
            </div>
            <button class="btn bg-teal-500 border-teal-500 text-white">Valider toutes les offres</button>
        </div>

        <!-- Grid header -->
        <div class="grid mt-20 grid-cols-4 gap-4">
            <div>Profil</div>
            <div>Ville</div>
            <div>Date</div>
            <div>Actions</div>
        </div>

        <!-- Grid -->

        <div>

            <p>{{ $route.query.name }}</p> <!--pour tester et afficher le nom de la page aceuille-->
        </div>
        <div v-for="offre in computedOffers" class="grid grid-cols-4 gap-4">
            <div class="grid grid-cols-12 grid-rows-1 gap-12">
                <div class="bg-red-600 p-3 w-12 rounded-lg col-start-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="#ffffff"
                            d="M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" />
                    </svg>
                </div>
                <div class="text-black text-xs ml-2 my-auto col-start-2 ">
                    <h3 class="font-semibold">{{ offre?.title }}</h3>
                    <h4>{{ offre?.entreprise?.name }}</h4>
                </div>
            </div>
            <div class="text-black text-xs flex items-center">{{ offre?.province?.value }}</div>
            <div class="text-black text-xs flex items-center">{{ offre?.startDate }}</div>
            <div class="text-xs flex justify-between items-center">
                <button class="btn bg-emerald-200 border-emerald-200 text-emerald-600 font-light"
                    @click="goTo()">Accepter</button>
                <button class="w-6">
                    <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                        <path fill="rgb(20 184 166)"
                            d="M6,12v15c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V12H6z M12,25c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9  c0-0.552,0.448-1,1-1s1,0.448,1,1V25z M17,25c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9c0-0.552,0.448-1,1-1s1,0.448,1,1V25z M22,25  c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9c0-0.552,0.448-1,1-1s1,0.448,1,1V25z"
                            id="XMLID_237_" />
                        <path fill="rgb(20 184 166)"
                            d="M27,6h-6V5c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v1H5C3.897,6,3,6.897,3,8v1c0,0.552,0.448,1,1,1h24  c0.552,0,1-0.448,1-1V8C29,6.897,28.103,6,27,6z M13,5c0-0.551,0.449-1,1-1h4c0.551,0,1,0.449,1,1v1h-6V5z"
                            id="XMLID_243_" />
                    </svg>
                </button>
                <button class="w-6" @click="edit(offre)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="#f59e50"
                            d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V299.6l-94.7 94.7c-8.2 8.2-14 18.5-16.8 29.7l-15 60.1c-2.3 9.4-1.8 19 1.4 27.8H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM549.8 235.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 417L441.1 287.8l71 71L382.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z" />
                    </svg>
                </button>
                <button class="w-6" @click="deleteMe(offre._id)">
                    <svg enable-background="new 0 0 32 32" id="Glyph" version="1.1" viewBox="0 0 32 32"
                        xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path fill="rgb(220 38 38)"
                            d="M6,12v15c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V12H6z M12,25c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9  c0-0.552,0.448-1,1-1s1,0.448,1,1V25z M17,25c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9c0-0.552,0.448-1,1-1s1,0.448,1,1V25z M22,25  c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9c0-0.552,0.448-1,1-1s1,0.448,1,1V25z"
                            id="XMLID_237_" />
                        <path fill="rgb(220 38 38)"
                            d="M27,6h-6V5c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v1H5C3.897,6,3,6.897,3,8v1c0,0.552,0.448,1,1,1h24  c0.552,0,1-0.448,1-1V8C29,6.897,28.103,6,27,6z M13,5c0-0.551,0.449-1,1-1h4c0.551,0,1,0.449,1,1v1h-6V5z"
                            id="XMLID_243_" />
                    </svg>
                </button>
            </div>
            <br>
        </div>

    </div>
</template>




<script setup>
import InternshipOffers from '@/services/InternshipOffers'
import InternshipTypes from '@/services/InternshipTypes'

import { ref, onMounted, computed } from 'vue'


const offres = ref([]);
const deleted = ref(0);
const offreCurrent = ref({});


const computedOffers = computed(() => {
    return offres.value;
})

const demandes = [
    {
        "jobTitle": "Intégrateur Web",
        "nom": "Acolyte communication",
        "ville": "Trois-Rivières",
        "date": "2024-03-03"
    },
    {
        "jobTitle": "Développeur front-end",
        "nom": "Novatize",
        "ville": "Québec",
        "date": "2024-04-04"
    },
    {
        "jobTitle": "Développeur front-end",
        "nom": "Norda Stello",
        "ville": "Québec",
        "date": "2024-08-08"
    },
    {
        "jobTitle": "Développeur back-end",
        "nom": "Devrun",
        "ville": "Montréal",
        "date": "2024-05-05"
    },
    {
        "jobTitle": "Développeur fullstack",
        "nom": "InnovMetric",
        "ville": "Lévis",
        "date": "2024-06-06"
    },
];



onMounted(async () => {
    const response = InternshipOffers.FindAll();
    if (response > 0) {
        offres.value = response;
    }
    else {
        offres.value = getData(3);
    }
    console.log(offres.value)
});

function edit(offre) {
    offreCurrent.value = offre;
    console.log(offreCurrent.value);
    const response = InternshipOffers.Update(offre);
}

function deleteMe(id) {
    deleted.value++; // effacer apres apres l'api es rempli
    offres.value = getData(3 - deleted.value); // effacer apres l'api es rempli
    //offres.value = getInternShipOffers();  // de commenter ceci quand l'api sera rempli
}

function getData(data) {
    return [{
        _id: "1",
        title: "string",
        description: "string",
        enterprise: {
            _id: "string",
            image: "string",
            name: "string",
            address: "string",
            postalCode: "string",
            city: "string",
            province: {
                _id: "string",
                value: "string"
            },
            phone: "string",
            email: "string",
            description: "string",
            activitySector: {
                _id: "string",
                value: "string"
            },
            website: "string"
        },
        startDate: "2024-03-18T23:59:32.657Z",
        endDate: "2024-03-18T23:59:32.657Z",
        weeklyWorkHours: 0,
        salary: 0,
        province: {
            _id: "string",
            value: "string"
        },
        requiredSkills: [
            "string"
        ],
        internshipType: {
            _id: "string",
            value: "string"
        },
        paid: "DISCRETIONARY",
        isActive: true
    }, {
        _id: "2",
        title: "string",
        description: "string",
        enterprise: {
            _id: "string",
            image: "string",
            name: "string",
            address: "string",
            postalCode: "string",
            city: "string",
            province: {
                _id: "string",
                value: "string"
            },
            phone: "string",
            email: "string",
            description: "string",
            activitySector: {
                _id: "string",
                value: "string"
            },
            website: "string"
        },
        startDate: "2024-03-18T23:59:32.657Z",
        endDate: "2024-03-18T23:59:32.657Z",
        weeklyWorkHours: 0,
        salary: 0,
        province: {
            _id: "string",
            value: "string"
        },
        requiredSkills: [
            "string"
        ],
        internshipType: {
            _id: "string",
            value: "string"
        },
        paid: "DISCRETIONARY",
        isActive: true
    },
    {
        _id: "3",
        title: "string",
        description: "string",
        enterprise: {
            _id: "string",
            image: "string",
            name: "string",
            address: "string",
            postalCode: "string",
            city: "string",
            province: {
                _id: "string",
                value: "string"
            },
            phone: "string",
            email: "string",
            description: "string",
            activitySector: {
                _id: "string",
                value: "string"
            },
            website: "string"
        },
        startDate: "2024-03-18T23:59:32.657Z",
        endDate: "2024-03-18T23:59:32.657Z",
        weeklyWorkHours: 0,
        salary: 0,
        province: {
            _id: "string",
            value: "string"
        },
        requiredSkills: [
            "string"
        ],
        internshipType: {
            _id: "string",
            value: "string"
        },
        paid: "DISCRETIONARY",
        isActive: true
    }].slice(0, data);

};

</script>

<style></style>