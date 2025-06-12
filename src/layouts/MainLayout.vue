<script setup>
import HeaderNavbar from 'components/HeaderNavbar.vue'
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <HeaderNavbar />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
