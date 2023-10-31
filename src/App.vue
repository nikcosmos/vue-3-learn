<template>
   <nav>
      <router-link
         class="text-lg bg-teal-700 rounded-md p-3"
         to="/"
         >Home</router-link
      >
      |
      <router-link to="/about">About</router-link>
   </nav>
   <router-view />
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
