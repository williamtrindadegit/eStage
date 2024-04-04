<template>
  <header className="bg-white p-2 pb-4 sticky top-0 shadow-sm">
    <div className="flex justify-center">
      <router-link to="/">
        <div className="md:hidden inline-flex items-center m-1">
          <img className="w-5" src="../assets/img/logo-eStage.svg" />
          <h2 className="p-2 font-black text-md text-black">eStage</h2>
        </div>
      </router-link>
    </div>
    <nav className="flex items-center justify-between w-full ">
      <div className="justify-start pr-4">
        <div className="dropdown">
          <div tabIndex="{0}" role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul tabIndex="{0}"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <!--<li className="hover:opacity-75 py-2 text-lg font-bold text-gray-700 ">
                <router-link className="flex flex-row items-center" to="/">
                  <svg class="w-6 h-6 m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                      clip-rule="evenodd" />
                  </svg>
    
                  Accueil</router-link
                >
              </li> -->

            <li className="hover:opacity-75 py-2 text-lg font-bold text-teal-700">
              <router-link className="flex flex-row items-center" to="/dashboard">
                <svg class="w-6 h-6 m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M5 3a2 2 0 0 0-2 2v5h18V5a2 2 0 0 0-2-2H5ZM3 14v-2h18v2a2 2 0 0 1-2 2h-6v3h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-3H5a2 2 0 0 1-2-2Z"
                    clip-rule="evenodd" />
                </svg>

                Tableau de bord</router-link>
            </li>

            <li className="hover:opacity-75 py-2 text-lg font-bold text-yellow-700">
              <router-link className="flex flex-row items-center" to="/demandes-stage">
                <svg class="w-6 h-6 m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 9h6m-6 3h6m-6 3h6M6.996 9h.01m-.01 3h.01m-.01 3h.01M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                </svg>
                Demandes de stage</router-link>
            </li>

            <li className="hover:opacity-75 py-2 text-lg font-bold text-red-500">
              <router-link className="flex flex-row items-center" to="/offres-stage">
                <svg class="w-6 h-6 m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5" />
                </svg>
                Offres de stage</router-link>
            </li>
            <li className="hover:opacity-75 py-2 text-lg font-bold text-purple-700">
              <router-link className="flex flex-row items-center" to="/candidats">
                <svg class="w-6 h-6 m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                    clip-rule="evenodd" />
                </svg>
                Candidats</router-link>
            </li>
            <li className="hover:opacity-75 py-2 text-lg font-bold text-blue-800">
              <router-link className="flex flex-row items-center" to="/entreprises">
                <svg class="w-6 h-6 m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M4 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2v14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2V5a1 1 0 0 1-1-1Zm5 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1Zm-5 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1Zm-3 4a2 2 0 0 0-2 2v3h2v-3h2v3h2v-3a2 2 0 0 0-2-2h-2Z"
                    clip-rule="evenodd" />
                </svg>

                Entreprises</router-link>
            </li>
          </ul>
        </div>
      </div>

      <div className="dropdown xl:hidden">
        <div tabIndex="{0}" role="button"
          className=" hover:bg-gray-400 justify-center items-center border-solid border-2 border-gray-600 rounded-lg p-1 inline-flex">
          <svg class="w-10 text-gray-600 pl-1 py-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
          </svg>

          <h4 class="text-sm font-semibold pl-1 pr-2">Actions</h4>
        </div>
        <ul tabIndex="{0}"
          className="flex flex-wrap leading-5 text-xs dropdown-content mt-3 z-[1] pr-4 shadow bg-base-100 rounded-box w-80">

          <li className="w-full"> <router-link to="/addinternshipoffer"
              className="btn btn-ghost w-full my-1 border-solid border-2 justify-start text-red-500 border-red-500 mx-2">
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 12h14m-7 7V5" />
              </svg>
              Ajouter une offre de stage
            </router-link> </li>
          <li className="w-full"> <router-link to="/addinternshiprequest"
              className="btn btn-ghost w-full my-1 border-solid border-2 justify-start text-yellow-600 border-yellow-600 mx-2">
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 12h14m-7 7V5" />
              </svg>
              Ajouter une demande de stage
            </router-link>
          </li>
          <li className="w-full">
            <router-link to="/addenterprise"
              className="btn btn-ghost w-full my-1 border-solid border-2 justify-start text-blue-800 border-blue-800 mx-2">
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 12h14m-7 7V5" />
              </svg>
              Ajouter une entreprise
            </router-link>


          </li>
          <li className="w-full"> <router-link to="/addcandidate"
              className="btn btn-ghost w-full my-1 border-solid border-2 justify-start text-purple-800 border-purple-800 mx-2">
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 12h14m-7 7V5" />
              </svg>
              Ajouter un candidat
            </router-link>

          </li>
        </ul>
      </div>

      <div className="hidden xl:flex flex-wrap justify-start w-full">

        <router-link to="/addinternshipoffer"
          class="btn btn-ghost text-xs m-1 p-2 border-solid border-2 text-red-500 border-red-500 mx-2">
          <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
            viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 12h14m-7 7V5" />
          </svg>
          Ajouter une offre de stage
        </router-link>
        <router-link to="/addinternshiprequest"
          class="btn btn-ghost text-xs m-1 p-2 border-solid border-2 text-yellow-600 border-yellow-600 mx-2">
          <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
            viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 12h14m-7 7V5" />
          </svg>
          Ajouter une demande de stage
        </router-link>
        <router-link to="/addenterprise"
          class="btn btn-ghost text-xs m-1 p-2 border-solid border-2 text-blue-800 border-blue-800 mx-2">
          <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
            viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 12h14m-7 7V5" />
          </svg>
          Ajouter une entreprise
        </router-link>

        <router-link to="/addcandidate"
          class="btn btn-ghost text-xs m-1 p-2 border-solid border-2 text-purple-800 border-purple-800 mx-2">
          <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
            viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 12h14m-7 7V5" />
          </svg>
          Ajouter un candidat
        </router-link>
      </div>

      <div className="justify-end w-full xl:w-1/6 flex m-1">
        <button
          className="flex flex-row cursor-pointer select-none sm:flex-wrap md:flex-nowrap justify-center rounded-lg border-transparent md:px-4 text-center text-sm gap-2 no-underline hover:bg-slate-100 items-center">
          <div className="flex flex-col">
            <h3 className="font-black text-black hover:text-gray-400">{{ userName }}</h3>
            <h4 className="text-gray-400 font-semibold hover:text-black">Admin</h4>
          </div>
          <div className="btn btn-ghost btn-circle">
            <div className="badge w-10 h-10 badge-xs badge-primary bg-gray-300 p-0">
              <img className="w-full rounded-full p-0 m-0" src="https://api.dicebear.com/8.x/thumbs/svg?seed=Mittens"
                alt="avatar" />
            </div>
          </div>
        </button>
        <button @click="handleLogout" class="btn btn-ghost">Déconnexion</button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useSession } from '@/stores/session';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const session = useSession();
const router = useRouter();

const userName = computed(() => session.user ? session.user.fullName : '');

const handleLogout = () => {
  session.logout();
  router.push('/'); // Retour à l'accueil / connection.
};
</script>




<style scoped></style>