
<template>
<router-view />
<div class="flex">
        <div class="connexion-img">
                <img src="./../assets/images/bg.jpg" alt="Connexion">
        </div>
        <div class="connexion-form">
                <h1 class="text-5xl mb-4">Authentification</h1>
            <p class="text-xs mb-16 w-64">Lorem ipsum magna aliqua, Lorem ipsum magna aliqua Lorem ipsum magna aliqua Lorem ipsum magna aliqua.</p>
                <form class="mb-2">
                    <div>
                            <input type="text" id="nom" class="w-60 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Votre nom et prénom" required />
                    </div>
                    <div class="my-6">
                            <input type="email" id="email" class="w-60 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Votre courriel" required />
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><routerLink to="/Accueil">Accéder maintenant</routerLink></button>
                </form>
        </div>
</div>



</template>
<script>

</script>

<style scoped>
        @import "./../assets/main.css";
</style>
