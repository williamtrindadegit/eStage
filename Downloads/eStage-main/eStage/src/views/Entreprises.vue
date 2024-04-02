<template>
    <div className="container">
      <Entreprises />
    </div>
  </template>
  
  <script>
    import Entreprises from '@/components/Entreprises.vue';
  
    export default {
      components: {
        Entreprises
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