<template>
  <div className="container">
    <InternshipOfferDashboard />
  </div>
</template>

<script>
import InternshipOfferDashboard from "@/components/InternshipOfferDashboard.vue";

export default {
  components: {
    InternshipOfferDashboard
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