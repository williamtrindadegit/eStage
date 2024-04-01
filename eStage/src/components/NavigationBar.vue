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
                    <li><a>Homepage</a></li>
                    <li><router-link to="/dashboard">Tableau de bord</router-link></li>
                    <li><router-link to="/zoomUser">Zoom User</router-link></li>
                    <li><router-link to="/zoomStage">Zoom Stage</router-link></li>
                    <li><a>About</a></li>
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