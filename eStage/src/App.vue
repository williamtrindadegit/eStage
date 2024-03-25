<template>
  <div className="flex flex-row">
    <div className="w-1/6">
      <Sidebar/>
    </div>
    <div className="w-5/6">
    <NavBar />
    <router-view />
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavigationBar.vue';
import Sidebar from '@/components/SideBar.vue';
</script>