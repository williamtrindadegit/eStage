<template>
  <div className="flex flex-row">
    <div className="sm:hidden lg:block w-1/6">
      <Sidebar/>
    </div>
    <div className="w-full lg:w-5/6">
    <NavBar />
    <router-view />
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavigationBar.vue';
import Sidebar from '@/components/SideBar.vue';
</script>