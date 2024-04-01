<template>
    <nav className="flex items-center w-full bg-white p-5 sticky top-0 shadow-sm">
        <div className="navbar-start w-1/5">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </div>
                <ul tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li className="hover:opacity-75 py-2 text-lg font-bold text-gray-700 "><router-link
                            className="flex flex-row items-center" to="/accueil">
                            <svg class="w-6 h-6 m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                                    clip-rule="evenodd" />
                            </svg>

                            Accueil</router-link>
                    </li>


                    <li className="hover:opacity-75 py-4 text-lg font-bold text-teal-700"><router-link
                            className="flex flex-row items-center" to="/dashboard">
                            <svg class="w-6 h-6 m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M5 3a2 2 0 0 0-2 2v5h18V5a2 2 0 0 0-2-2H5ZM3 14v-2h18v2a2 2 0 0 1-2 2h-6v3h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-3H5a2 2 0 0 1-2-2Z"
                                    clip-rule="evenodd" />
                            </svg>

                            Tableau de bord</router-link>
                    </li>

                    <li className="hover:opacity-75 py-4 text-lg font-bold text-yellow-700"><router-link
                            className="flex flex-row items-center" to="/demandes-stages">
                            <svg class="w-6 h-6 m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11 9h6m-6 3h6m-6 3h6M6.996 9h.01m-.01 3h.01m-.01 3h.01M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                            </svg>
                            Demandes de stages</router-link>
                    </li>

                    <li className="hover:opacity-75 py-4 text-lg font-bold text-red-500"><router-link
                            className="flex flex-row items-center" to="/offres-stage">
                            <svg class="w-6 h-6 m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5" />
                            </svg>
                            Offres de stage</router-link></li>
                    <li className="hover:opacity-75 py-4 text-lg font-bold text-purple-700"><router-link
                            className="flex flex-row items-center" to="/candidats">
                            <svg class="w-6 h-6 m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                                    clip-rule="evenodd" />
                            </svg>
                            Candidats</router-link></li>
                    <li className="hover:opacity-75 py-4 text-lg font-bold text-blue-800"><router-link
                            className="flex flex-row items-center" to="/entreprises">
                            <svg class="w-6 h-6 m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M4 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2v14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2V5a1 1 0 0 1-1-1Zm5 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1Zm-5 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1Zm-3 4a2 2 0 0 0-2 2v3h2v-3h2v3h2v-3a2 2 0 0 0-2-2h-2Z"
                                    clip-rule="evenodd" />
                            </svg>

                            Entreprises</router-link></li>
                </ul>
            </div>
        </div>
        <div className="hidden xl:block flex justify-start w-4/5">
            <a className="btn btn-ghost text-md border-black border-2 text-red-500 border-red-500 mx-2">
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 12h14m-7 7V5" />
                </svg>
                Ajouter une offre de stage</a>
            <a className="btn btn-ghost text-md border-black border-2 text-yellow-700 border-yellow-700 mx-2">
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 12h14m-7 7V5" />
                </svg>
                Ajouter une demande de stage</a>
            <a className="btn btn-ghost text-md border-black border-2 text-blue-800 border-blue-800 mx-2">
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 12h14m-7 7V5" />
                </svg>
                Ajouter une entreprise</a>
            <a className="btn btn-ghost text-md border-black border-2 text-purple-800 border-purple-800 mx-2">
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 12h14m-7 7V5" />
                </svg>
                Ajouter un candidat</a>
        </div>
        <div className="navbar-end w-1/5">
            <button className="btn btn-ghost flex-col">
                <h3 className="font-black text-black">{{ $route.query.name }}</h3>
                <!-- valider avec Anel lorsque merged in the main-->
                <h4 className="text-gray-400">Admin</h4>
            </button>
            <button className="btn btn-ghost btn-circle">
                <div>
                    <div className="badge w-10 h-10 badge-xs badge-primary bg-gray-300">
                        <img className="" src="" alt="">
                    </div>
                </div>
            </button>
        </div>
    </nav>

</template>

<script setup>

</script>

<style scoped></style>