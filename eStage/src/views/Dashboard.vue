<template>
  <div className="container">
    <Chip />
    <RequestDashboard />
    <OffersDashboard />
  </div>
</template>

<script>
  import Chip from '@/components/Chip.vue';
  import RequestDashboard from '@/components/RequestDashboard.vue';
  import OffersDashboard from '@/components/OffersDashboard.vue';

  export default {
    components: {
      Chip,
      RequestDashboard,
      OffersDashboard,
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