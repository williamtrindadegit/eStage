<template>
   
   <div class="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="../assets/images/scott-graham-5fNmWej4tAA-unsplash7.png" alt="Album"/></figure>
  <div class="card-body">
    
<div class="grid grid-cols-12 grid-rows-4 gap-4">
        <div class="col-span-8 col-start-3">
            <h1>Identification</h1>
        </div>
    <div class="col-span-8 row-span-2 col-start-3 row-start-3">
        <div>
    <label for="name">Votre nom et prénom:</label>
    <input type="text" id="name" v-model="fullName"><br>
    <label for="email">Courriel:</label>
    <input type="email" id="email" v-model="email"><br>
    <button @click="saveAndNavigate">Accéder maintenant</button>
  </div>
    </div>
</div>
    
  
  </div>
</div>



  </template>
  
  
  
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const fullName = ref('');
  const email = ref('');
  const savedName = ref('');

  const saveName = () => {
    savedName.value = fullName.value;
  };


  const saveAndNavigate = () => {
  saveName();
  
  router.push({ path: '/InternshipDashboard', query: { name: savedName.value } });
};
</script>

  
  <style>
  
  </style>