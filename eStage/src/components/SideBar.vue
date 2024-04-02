<template>
    <aside className="bg-white h-screen sticky top-0 w-full">
        <router-link to="/">
        <div className="flex flex-row flex-wrap items-center md:justify-center">
            
            <img className="w-20 p-4" src="../assets/img/logo-eStage.svg">
            <h2 className="font-black text-3xl lg:text-4xl text-black">eStage</h2>
        </div>
        </router-link>
    
            <ul tabIndex={0} className="mt-3 pt-20 pl-4">
    
                           <!-- <li className="hover:opacity-75 nowrap flex flex-row justify-between items-center py-4 text-sm lg:text-lg font-bold text-gray-700 "><router-link className="flex flex-row items-center" to="/">
                                <svg className="m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"/>
                                </svg>
    
                                <h4>Accueil</h4></router-link>
                            </li> -->
    
                            <li className="hover:opacity-75 nowrap flex flex-row justify-between items-center py-4 text-sm lg:text-lg font-bold text-teal-700"><router-link className="flex flex-row items-center" to="/dashboard">
                                <svg className="m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v5h18V5a2 2 0 0 0-2-2H5ZM3 14v-2h18v2a2 2 0 0 1-2 2h-6v3h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-3H5a2 2 0 0 1-2-2Z" clip-rule="evenodd"/>
                                </svg>
    
                                <h4>Tableau de bord</h4></router-link>
                            </li>
    
                            <li className="hover:opacity-75 nowrap flex flex-row justify-between items-center py-4 text-sm lg:text-lg font-bold text-yellow-600"><router-link className="flex flex-row items-center" to="/demandes-stage">
                                <svg className="m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 9h6m-6 3h6m-6 3h6M6.996 9h.01m-.01 3h.01m-.01 3h.01M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
                                </svg>
                                <h4>Demandes de stage</h4></router-link>
                            </li>
    
                            <li className="hover:opacity-75 nowrap flex flex-row justify-between items-center py-4 text-sm lg:text-lg font-bold text-red-500"><router-link className="flex flex-row items-center" to="/offres-stage">
                                <svg className="m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"/>
                                </svg>
                                <h4>Offres de stage</h4></router-link></li>
                            <li className="hover:opacity-75 nowrap flex flex-row justify-between items-center py-4 text-sm lg:text-lg font-bold text-purple-700"><router-link className="flex flex-row items-center" to="/candidats">
                                <svg className="m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
                                </svg>
                                <h4>Candidats</h4></router-link></li>
                            <li className="hover:opacity-75 nowrap flex flex-row justify-between items-center py-4 text-sm lg:text-lg font-bold text-blue-800"><router-link className="flex flex-row items-center" to="/entreprises">
                                <svg className="m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M4 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2v14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2V5a1 1 0 0 1-1-1Zm5 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1Zm-5 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1Zm-3 4a2 2 0 0 0-2 2v3h2v-3h2v3h2v-3a2 2 0 0 0-2-2h-2Z" clip-rule="evenodd"/>
    </svg>
    
    <h4>Entreprises</h4></router-link></li>
            </ul>
    
    </aside>
    
    </template>
    
    <script setup>
        
    </script>
    
    <style scoped>
    
    </style>