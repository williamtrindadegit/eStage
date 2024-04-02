<template>
  <section className="m-5 p-10 bg-gray-100 rounded-lg">
    <h1 className="text-4xl font-bold mt-20">Demandes de stage</h1>
  
    <router-link to="/addinternshiprequest" className="mt-20 btn btn-ghost text-md m-1 p-2 border-solid border-2 text-white bg-yellow-600 mx-2">
      <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
      </svg>
      Ajouter une demande de stage</router-link
    >

    <div className="bg-white mx-2 mt-4 mb-16 p-8 rounded-lg">
    <div className="grid grid-cols-1 md:flex justify-between">
      <div>
        <h2 className="text-black font-semibold">Dernière <span className="text-amber-500">demandes</span> de stage</h2>
        <p className="text-red-500">En attente de validation</p>
      </div>
      <button className="btn mt-4 md:mt-0 bg-teal-500 border-teal-500 text-white">Valider toutes les demandes</button>
    </div>

    <!-- Grid header -->
    <div className="hidden md:grid mt-20 grid-cols-4 gap-4">
      <div>Profil</div>
      <div>Établissement</div>
      <div>Date</div>
      <div>Actions</div>
    </div>

    <!-- Grid -->
    <div className="mt-6 md:grid md:grid-cols-4 gap-4" v-for="demande in demandes">
      <div className="flex">
        <div class="bg-amber-500 w-1 h-12 mr-2 md:mr-6"></div>
        <div className="hidden md:block bg-amber-500 p-2 w-12 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ffffff" d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/></svg>
        </div>
        <div className="text-black text-xs md:ml-2 my-auto">
          <h3 className="font-semibold">{{ demande.jobTitle }}</h3>
          <h4>{{ demande.nom }}</h4>
        </div>
      </div>
      <div className="text-black text-xs flex items-center">{{ demande.etablissement }}</div>
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
  const demandes = [
    {
      "jobTitle": "Intégrateur Web",
      "nom": "Jean-Sébastien Tremblay", 
      "etablissement": "Cégep de Trois-Rivières",
      "date": "2024-03-03"
    },
    {
      "jobTitle": "Développeur front-end",
      "nom": "Bob Gustave", 
      "etablissement": "Cégep de Lévis",
      "date": "2024-04-04"
    },
    {
      "jobTitle": "Développeur front-end",
      "nom": "Chantale Moores", 
      "etablissement": "Cégep de Montréal",
      "date": "2024-08-08"
    },
    {
      "jobTitle": "Développeur back-end",
      "nom": "Evan Evans", 
      "etablissement": "Cégep de Ste-Foy",
      "date": "2024-05-05"
    },
    {
      "jobTitle": "Développeur fullstack",
      "nom": "Caroline Massé", 
      "etablissement": "Cégep de Limoilou",
      "date": "2024-06-06"
    },
  ]
</script>

<style>

</style>