<template>
  <q-layout view="hHh lpR fFf">
    <!-- Scroll Progress Bar -->
    <BlogProgressBar />

    <!-- Header -->
    <HeaderNavbar />

    <!-- Main content -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <FooterSection />
  </q-layout>
</template>

<script setup>
import HeaderNavbar from 'layouts/HeaderNavbar.vue'
import FooterSection from 'layouts/FooterSection.vue'
import BlogProgressBar from 'components/BlogProgressBar.vue'
</script>
