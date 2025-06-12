<template>
  <q-header elevated class="bg-white text-dark">
    <q-toolbar class="q-px-xl q-py-sm justify-between">
      <q-toolbar-title @click="go('/')">Nexora</q-toolbar-title>

      <!-- Desktop menu -->
      <div class="row q-gutter-md items-center q-hidden-sm-down">
        <q-btn flat label="Home" @click="go('/')" />
        <q-btn flat label="About" @click="go('/about')" />

        <!-- Hoverable dropdown -->
        <div @mouseenter="servicesMenu = true" @mouseleave="servicesMenu = false">
          <q-btn flat class="row items-center">
            Services
            <q-icon name="keyboard_arrow_down" class="q-ml-xs" />
          </q-btn>
          <q-menu v-if="servicesMenu" anchor="bottom right" self="top right">
            <q-list style="min-width: 200px">
              <q-item clickable @click="go('/services/photography')"
                ><q-item-section>Photography</q-item-section></q-item
              >
              <q-item clickable @click="go('/services/web-dev')"
                ><q-item-section>Web Services</q-item-section></q-item
              >
              <q-item clickable @click="go('/services/branding')"
                ><q-item-section>Branding</q-item-section></q-item
              >
              <q-item clickable @click="go('/services/uiux')"
                ><q-item-section>UI/UX Design</q-item-section></q-item
              >
              <q-item clickable @click="go('/services/others')"
                ><q-item-section>Others</q-item-section></q-item
              >
            </q-list>
          </q-menu>
        </div>

        <q-btn flat label="Contact" @click="go('/contact')" />
      </div>

      <!-- Mobile hamburger -->
      <q-btn dense round icon="menu" class="q-hidden-md-up" @click="drawer = true" />
    </q-toolbar>

    <q-drawer v-model="drawer" side="right" overlay behavior="mobile">
      <q-list>
        <q-item clickable @click="go('/')"><q-item-section>Home</q-item-section></q-item>
        <q-item clickable @click="go('/about')"><q-item-section>About</q-item-section></q-item>
        <q-expansion-item icon="design_services" label="Services">
          <q-item clickable @click="go('/services/photography')"
            ><q-item-section>Photography</q-item-section></q-item
          >
          <q-item clickable @click="go('/services/web-dev')"
            ><q-item-section>Web Services</q-item-section></q-item
          >
          <q-item clickable @click="go('/services/branding')"
            ><q-item-section>Branding</q-item-section></q-item
          >
          <q-item clickable @click="go('/services/uiux')"
            ><q-item-section>UI/UX Design</q-item-section></q-item
          >
          <q-item clickable @click="go('/services/others')"
            ><q-item-section>Others</q-item-section></q-item
          >
        </q-expansion-item>
        <q-item clickable @click="go('/contact')"><q-item-section>Contact</q-item-section></q-item>
      </q-list>
    </q-drawer>
  </q-header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(false)
const servicesMenu = ref(false)

function go(path) {
  router.push(path)
  drawer.value = false
  servicesMenu.value = false
}
</script>

<style scoped>
.q-toolbar-title {
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
