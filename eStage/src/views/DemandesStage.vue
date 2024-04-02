<template>
    <div className="container">
      <RequestDashboard />
    </div>
  </template>
  
  <script>
    import RequestDashboard from '@/components/RequestDashboard.vue';
  
    export default {
      components: {
        RequestDashboard
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