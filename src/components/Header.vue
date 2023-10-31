<script setup></script>

<template>
   <nav class="sticky top-0 flex w-full gap-3 rounded-b-md bg-teal-950 p-5">
      <router-link
         class="rounded-md border border-teal-700 px-2 py-1 font-semibold transition-colors hover:bg-teal-700"
         active-class="bg-teal-800"
         to="/"
         >Home</router-link
      >
      <router-link
         class="rounded-md border border-teal-700 px-2 py-1 font-semibold transition-colors hover:bg-teal-700"
         active-class="bg-teal-800"
         to="/about"
         >About</router-link
      >
   </nav>
</template>

<style></style>
