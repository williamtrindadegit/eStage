<template>
  <div v-if="isLoggedIn" class="flex flex-row">
    <div class="hidden md:block w-1/6">
      <Sidebar />
    </div>
    <div class="w-full lg:w-5/6">
      <NavBar />
      <router-view />
    </div>
  </div>
  <div v-else class="w-full">
    <MinimalNavBar />
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useSession } from '@/stores/session';
import NavBar from '@/components/NavigationBar.vue';
import Sidebar from '@/components/SideBar.vue';
import MinimalNavBar from '@/components/MinimalNavBar.vue'; // This is a hypothetical component for the minimal nav bar

const sessionStore = useSession();

const isLoggedIn = computed(() => sessionStore.loggedIn);

// If you need to redirect to the homepage when not logged in, consider using a navigation guard or a watcher on isLoggedIn
</script>
