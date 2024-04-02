<template>
  <section className="m-5 p-10 bg-gray-100 rounded-lg">
  <h1 className="text-4xl font-bold mt-20">Offres de stage</h1>

  <router-link to="/addinternshipoffer" className="mt-20 btn btn-ghost text-md m-1 p-2 border-solid border-2 text-white bg-red-500 mx-2">
    <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
    </svg>
    Ajouter une offre de stage</router-link>


  <div className="bg-white mx-2 mt-4 mb-16 p-8 rounded-lg">
    <div className="grid grid-cols-1 md:flex justify-between">
      <div>

        <h2 className="text-black font-semibold">Dernière <span className="text-red-600">offres</span> de stage</h2>
        <p className="text-red-500">En attente de validation</p>
      </div>
      <button className="btn mt-4 md:mt-0 bg-teal-500 border-teal-500 text-white">Valider toutes les offres</button>
    </div>

    <!-- Grid header -->
    <div className="hidden md:grid mt-20 grid-cols-4 gap-4">
      <div>Profil</div>
      <div>Ville</div>
      <div>Date</div>
      <div>Actions</div>
    </div>

    <!-- Grid -->
    <div className="mt-6 md:grid md:grid-cols-4 gap-4" v-for="demande in demandes">
      <div className="flex">
        <div class="bg-red-600 w-1 h-12 mr-2 md:mr-6"></div>
        <div className="hidden md:block bg-red-600 p-3 w-12 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"/></svg>
        </div>
        <div className="text-black text-xs md:ml-2 my-auto">
          <h3 className="font-semibold">{{ demande.jobTitle }}</h3>
          <h4>{{ demande.nom }}</h4>
        </div>
      </div>
      <div className="text-black text-xs flex items-center">{{ demande.ville }}</div>
      <div className="text-black text-xs flex items-center">{{ demande.date }}</div>
      <div className="text-xs flex justify-between items-center">
        <button className="w-6 md:w-8 lg:hidden xl:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#059650" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </button>
        <button className="hidden lg:block btn bg-emerald-200 border-emerald-200 text-emerald-600 font-light">Accepter</button>
        <button className="w-6">
          <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path fill="rgb(20 184 166)" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"/></svg>
        </button>
        <button className="w-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FFD43B" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
        </button>
        <button className="w-6">
          <svg enable-background="new 0 0 32 32" id="Glyph" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="rgb(220 38 38)" d="M6,12v15c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V12H6z M12,25c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9  c0-0.552,0.448-1,1-1s1,0.448,1,1V25z M17,25c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9c0-0.552,0.448-1,1-1s1,0.448,1,1V25z M22,25  c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9c0-0.552,0.448-1,1-1s1,0.448,1,1V25z" id="XMLID_237_"/><path fill="rgb(220 38 38)" d="M27,6h-6V5c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v1H5C3.897,6,3,6.897,3,8v1c0,0.552,0.448,1,1,1h24  c0.552,0,1-0.448,1-1V8C29,6.897,28.103,6,27,6z M13,5c0-0.551,0.449-1,1-1h4c0.551,0,1,0.449,1,1v1h-6V5z" id="XMLID_243_"/></svg>
        </button>
      </div>
      <hr className="w-full bg-slate-300 h-1">
    </div>
  </div>
</section>
</template>

<script setup>
import RequestDashboard from './RequestDashboard.vue';

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
  ]
</script>

<style>

</style>