<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header elevated class="bg-white text-dark">
      <q-toolbar class="q-px-xl q-py-sm justify-between">
        <q-toolbar-title @click="go('/')">Nexora</q-toolbar-title>

        <!-- ✅ Desktop Navigation - Hidden on mobile -->
        <div class="row items-center q-gutter-md gt-sm">
          <q-btn flat label="Home" @click="go('/')" />
          <q-btn flat label="About" @click="go('/about')" />
          <div
            class="relative-position"
            @mouseenter="openServicesMenu"
            @mouseleave="closeServicesMenuDelayed"
          >
            <q-btn flat class="row items-center no-caps">
              <span>Services</span>
              <q-icon name="keyboard_arrow_down" class="q-ml-xs" />
            </q-btn>
            <q-menu
              v-model="servicesMenu"
              anchor="bottom right"
              self="top right"
              @mouseenter="cancelClose"
              @mouseleave="closeServicesMenuDelayed"
            >
              <q-list style="min-width: 200px">
                <q-item clickable @click="go('/services/photography')">
                  <q-item-section>Photography</q-item-section>
                </q-item>
                <q-item clickable @click="go('/services/web-dev')">
                  <q-item-section>Web Services</q-item-section>
                </q-item>
                <q-item clickable @click="go('/services/branding')">
                  <q-item-section>Branding</q-item-section>
                </q-item>
                <q-item clickable @click="go('/services/uiux')">
                  <q-item-section>UI/UX Design</q-item-section>
                </q-item>
                <q-item clickable @click="go('/services/others')">
                  <q-item-section>Others</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </div>
          <q-btn flat label="Contact" @click="go('/contact')" />
        </div>

        <!-- ✅ Mobile Hamburger Button - Hidden on desktop -->
        <q-btn dense flat icon="menu" class="lt-md" @click="drawer = true" />
      </q-toolbar>
    </q-header>

    <!-- ✅ Drawer for Mobile -->
    <q-drawer v-model="drawer" side="right" overlay behavior="mobile" :width="250">
      <q-list padding>
        <q-item clickable @click="go('/')">
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item clickable @click="go('/about')">
          <q-item-section>About</q-item-section>
        </q-item>
        <q-expansion-item label="Services">
          <q-list>
            <q-item clickable @click="go('/services/photography')">
              <q-item-section>Photography</q-item-section>
            </q-item>
            <q-item clickable @click="go('/services/web-dev')">
              <q-item-section>Web Services</q-item-section>
            </q-item>
            <q-item clickable @click="go('/services/branding')">
              <q-item-section>Branding</q-item-section>
            </q-item>
            <q-item clickable @click="go('/services/uiux')">
              <q-item-section>UI/UX Design</q-item-section>
            </q-item>
            <q-item clickable @click="go('/services/others')">
              <q-item-section>Others</q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
        <q-item clickable @click="go('/contact')">
          <q-item-section>Contact</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Main content -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(false)
const servicesMenu = ref(false)
let closeTimer = null

function go(path) {
  router.push(path)
  drawer.value = false
  servicesMenu.value = false
}

function openServicesMenu() {
  clearTimeout(closeTimer)
  servicesMenu.value = true
}

function closeServicesMenuDelayed() {
  clearTimeout(closeTimer)
  closeTimer = setTimeout(() => {
    servicesMenu.value = false
  }, 200)
}

function cancelClose() {
  clearTimeout(closeTimer)
}
</script>

<style scoped>
.q-toolbar-title {
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
}
.relative-position {
  position: relative;
}
</style>
