<template>
  <div className="container">
    <InternshipRequestDashboard />
  </div>
</template>

<script>

import InternshipRequestDashboard from "@/components/InternshipRequestDashboard.vue";

export default {
  components: {
    InternshipRequestDashboard
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