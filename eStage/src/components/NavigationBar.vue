<!-- <template>

    <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </div>
                <ul tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Homepage</a></li>
                    <li><router-link to="/dashboard">Tableau de bord</router-link></li>
                    <li><a>About</a></li>
                </ul>
            </div>
        </div>
        <div className="navbar-center">
            <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
            <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
            </button>
        </div>
    </div>

</template>

<script setup>
    
</script>

<style scoped>

</style> -->


<template>
    <nav className="navbar bg-white p-5 sticky top-0">
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
                    <li><router-link to="/accueil">Accueil</router-link></li>
                    <li><router-link to="/dashboard">Tableau de bord</router-link></li>
                    <li><router-link to="/demandes-stages">Demandes de stages</router-link></li>
                    <li><router-link to="/offres-stage">Offres de stage</router-link></li>
                    <li><router-link to="/candidats">Candidats</router-link></li>
                    <li><router-link to="/entreprises">Entreprises</router-link></li>
                </ul>
            </div>
        </div>
        <div className="flex justify-start w-4/5">
            
            <a className="btn btn-ghost text-xl border-black border-2 text-red-500 border-red-500 mx-2">
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/> </svg>
                Ajouter une offre de stage</a>
            <a className="btn btn-ghost text-xl border-black border-2 text-yellow-500 border-yellow-500 mx-2">
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/> </svg>
                Ajouter une demande de stage</a>
            <a className="btn btn-ghost text-xl border-black border-2 text-blue-800 border-blue-800 mx-2">
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/> </svg>
                Ajouter une entreprise</a>
            <a className="btn btn-ghost text-xl border-black border-2 text-purple-800 border-purple-800 mx-2">
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/> </svg>
                Ajouter un candidat</a>
        </div>
        <div className="navbar-end w-1/5">
            <button className="btn btn-ghost flex-col">
                <h3 className="font-black text-black">John Doe</h3>
                <h4 className="text-gray-400">Admin</h4>
            </button>
            <button className="btn btn-ghost btn-circle">
                <div>
                    <div className="badge w-10 h-10 badge-xs badge-primary bg-gray-300">
                        <img className="" href="" alt="">
                    </div>
                </div>
            </button>
        </div>
    </nav>

</template>

<script setup>
    
</script>

<style scoped>

</style>