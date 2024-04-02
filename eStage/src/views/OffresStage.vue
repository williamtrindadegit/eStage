<template>
    <div className="container">
      <OffersDashboard />
    </div>
  </template>
  
  <script>
    import OffersDashboard from '@/components/OffersDashboard.vue';
  
    export default {
      components: {
        OffersDashboard
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