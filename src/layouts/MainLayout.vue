<template>
  <q-layout view="hHh lpR fFf">
    <!-- Scroll Progress Bar -->
    <BlogProgressBar />

    <!-- Header -->
    <HeaderNavbar />

    <!-- Main content wrapper -->
    <q-page-container class="main-content-wrapper">
      <div class="content-inner">
        <router-view />
      </div>
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

<style scoped>
.main-content-wrapper {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 64px - 200px); /* Adjust header/footer height */
}

.content-inner {
  flex: 1 0 auto;
}
</style>
