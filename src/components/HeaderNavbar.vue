<template>
  <q-header elevated class="bg-white text-dark">
    <q-toolbar class="q-px-xl q-py-sm justify-between">
      <!-- Logo -->
      <q-toolbar-title class="text-primary text-bold cursor-pointer" @click="goTo('/')">
        Nexora
      </q-toolbar-title>

      <!-- Desktop Navigation (md and up) -->
      <div class="row items-center q-gutter-md q-hidden-sm-down">
        <q-btn flat label="Home" @click="goTo('/')" />
        <q-btn flat label="About" @click="goTo('/about')" />

        <!-- Services with Hover Dropdown -->
        <div
          class="relative-position"
          @mouseenter="servicesMenu = true"
          @mouseleave="servicesMenu = false"
        >
          <q-btn flat>
            <div class="row items-center">
              Services
              <q-icon name="keyboard_arrow_down" class="q-ml-xs" />
            </div>
          </q-btn>

          <q-menu v-model="servicesMenu" anchor="bottom right" self="top right">
            <q-list style="min-width: 200px">
              <q-item clickable v-ripple @click="goTo('/services/photography')">
                <q-item-section>Photography</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="goTo('/services/web-dev')">
                <q-item-section>Web Services</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="goTo('/services/branding')">
                <q-item-section>Branding</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="goTo('/services/uiux')">
                <q-item-section>UI/UX Design</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="goTo('/services/others')">
                <q-item-section>Others</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>

        <q-btn flat label="Contact" @click="goTo('/contact')" />
      </div>

      <!-- Mobile Hamburger (sm and down) -->
      <q-btn flat dense round icon="menu" class="q-hidden-md-up" @click="drawer = true" />
    </q-toolbar>

    <!-- Mobile Drawer -->
    <q-drawer v-model="drawer" side="right" overlay behavior="mobile">
      <q-scroll-area class="fit">
        <q-list>
          <q-item clickable @click="goTo('/')"><q-item-section>Home</q-item-section></q-item>
          <q-item clickable @click="goTo('/about')"><q-item-section>About</q-item-section></q-item>
          <q-expansion-item icon="design_services" label="Services" expand-separator>
            <q-item clickable @click="goTo('/services/photography')"
              ><q-item-section>Photography</q-item-section></q-item
            >
            <q-item clickable @click="goTo('/services/web-dev')"
              ><q-item-section>Web Services</q-item-section></q-item
            >
            <q-item clickable @click="goTo('/services/branding')"
              ><q-item-section>Branding</q-item-section></q-item
            >
            <q-item clickable @click="goTo('/services/uiux')"
              ><q-item-section>UI/UX Design</q-item-section></q-item
            >
            <q-item clickable @click="goTo('/services/others')"
              ><q-item-section>Others</q-item-section></q-item
            >
          </q-expansion-item>
          <q-item clickable @click="goTo('/contact')"
            ><q-item-section>Contact</q-item-section></q-item
          >
        </q-list>
      </q-scroll-area>
    </q-drawer>
  </q-header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(false)
const servicesMenu = ref(false)

function goTo(path) {
  router.push(path)
  drawer.value = false
  servicesMenu.value = false
}
</script>

<style scoped>
.q-toolbar-title {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
