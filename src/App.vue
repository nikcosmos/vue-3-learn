<script setup>
import Header from './components/Header.vue';
</script>

<template>
   <Header />
   <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&&display=swap');
@tailwind base;
@layer base {
   body {
      @apply scroll-smooth bg-gray-900  font-inter text-16 text-gray-50;
   }
}
@tailwind components;
@tailwind utilities;
</style>
