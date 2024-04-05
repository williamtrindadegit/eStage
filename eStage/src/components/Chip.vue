<template>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div className="">
      <router-link to="/demandes-stage">
        <div className="bg-amber-500 text-white m-2 p-4 flex rounded-lg items-center">
          <div className="w-14 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path fill="#ffffff"
                d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
            </svg>
          </div>
          <div>
            <h2>Demandes de stage</h2>
            <span className="stat-value">
              {{ nbInternshipRequests }}
            </span>
          </div>
        </div>
      </router-link>
    </div>

    <div className="">
      <router-link to="/offres-stage">
        <div className="bg-red-700 text-white m-2 p-4 flex rounded-lg items-center">
          <div className="w-10 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#ffffff"
                d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
            </svg>
          </div>
          <div>
            <h2>Offres de stage</h2>
            <span className="stat-value">
              {{ nbInternshipOffers }}
            </span>
          </div>
        </div>
      </router-link>
    </div>

    <div className="m-2 flex">
      <div className="w-1/2">
        <router-link to="/candidats">
          <div className="bg-violet-700 text-white py-4 pl-4 flex rounded-l-lg items-center">
            <div className="w-6 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="#ffffff"
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </div>
            <div>
              <h2>Candidats</h2>
              <span className="stat-value">
                {{ nbCandidats }}
              </span>
            </div>
          </div>
        </router-link>
      </div>
      <div className="w-1/2">
        <router-link to="/entreprises">
          <div className="bg-blue-400 text-blue-950 py-4 pl-4 flex rounded-r-lg items-center">
            <div className="w-6 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="rgb(23 37 84)"
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </div>
            <div>
              <h2>entreprises</h2>
              <span className="stat-value">
                {{ nbEnterprises }}
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import CandidatService from "@/services/Candidates";
import OfferService from '@/services/InternshipOffers';
import RequestsService from '@/services/InternshipRequests';
import EnterprisesService from '@/services/Enterprises';
import { useRouter } from "vue-router";



const nbCandidats = ref(0);
const nbEnterprises = ref(0);
const nbInternshipRequests = ref(0);
const nbInternshipOffers = ref(0);

onMounted(async () => {
  const candidats = await CandidatService.FindAll();
  const enterprises = await EnterprisesService.FindAll();
  const internshipRequests = await RequestsService.FindAll();
  const internshipOffers = await OfferService.FindAll();

  nbCandidats.value = candidats.length;
  nbEnterprises.value = enterprises.length;
  nbInternshipRequests.value = internshipRequests.length;
  nbInternshipOffers.value = internshipOffers.length;
});

</script>

<style></style>