<template>
    <div className="container">
      <Candidats />
    </div>
  </template>
  
  <script>
    import Candidats from '@/components/Candidats.vue';
  
    export default {
      components: {
        Candidats
      },
    };
  </script>
  
  <style>
    .container {
      max-width: 1200px;
      width: 90%;
      margin: auto;
      padding: 0;
    }
  </style>