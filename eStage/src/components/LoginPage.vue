<template>
  <main>
  <div class="card lg:card-side bg-base-100 shadow-xl">
    <figure><img src="../assets/images/scott-graham-5fNmWej4tAA-unsplash7.png" alt="Album" /></figure>
    <div class="card-body">

      <div class="grid grid-cols-12 grid-rows-1 gap-4">
        <div class="col-span-8 col-start-3">
          <div class="input-container">
            <div class="text">
              <h1 class="h1">Identification </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id itaque odit aspernatur exercitationem
                incidunt cumque quas eius voluptates aut sapiente!</p>
            </div>

            <input type="text" id="name" v-model="fullName" placeholder="Votre nom et prénom">
          </div>

          <div class="input-container">
            <label for="email"></label>
            <input type="email" id="email" v-model="email" placeholder="Courriel">
          </div>

          <button class="btn" @click="saveAndNavigate">Accéder maintenant</button>
        </div>
      </div>
    </div>
  </div>
  <footerComponent/>
</main>

</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useSession } from '@/stores/session'; 
import footerComponent from '@/components/FooterComponent.vue';
const router = useRouter();
const session = useSession();
const fullName = ref('');
const email = ref('');


const saveAndNavigate = () => {

// Validation champs
  const isValidEmail = (email) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};

  if (fullName.value.trim() === '') {
    alert('Le champ du nom ne peut pas être vide. Veuillez réessayer.'); // À voir si on l'inclus sous les champs de forumulaire.
    return;
  }

  if (!isValidEmail(email.value)) {
    alert('Veuillez entrer une adresse courriel valide.'); // À voir si on l'inclus sous les champs de forumulaire.
    return;
  }

  const user = { fullName: fullName.value, email: email.value };

  session.login({ user });

  router.push({ path: '/Dashboard'});
};


</script>

<style>
.input-container {
  padding-bottom: 20px;
}

.input-container input {
  width: 100%;
  padding: 10px;
  border: 2px solid #056ff8;
  border-radius: 5px;
}

.input-container input::placeholder {
  color: #999;
}

.btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

}

.btn:hover {
  background-color: #223141;
}

.h1 {
  font-size: 40px;
  color: rgb(0, 0, 0);
  font-weight: bold;
}

.text {
  width: 500px;
  margin-bottom: 50px;
}
</style>