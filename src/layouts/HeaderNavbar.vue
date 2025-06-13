<template>
  <q-header
    elevated
    class="bg-white text-dark sticky-header"
    :class="$q.platform.is.mobile ? 'fixed' : ''"
    style="z-index: 1000; height: 96px"
  >
    <q-toolbar class="q-px-xl q-py-sm justify-between" style="height: 96px">
      <q-toolbar-title @click="go('/')" class="cursor-pointer">Nexora</q-toolbar-title>

      <!-- Desktop Menu -->
      <div v-if="!$q.screen.lt.md" class="row items-center q-gutter-md">
        <q-btn flat label="Home" :class="{ 'text-primary': isActive('/') }" @click="go('/')" />
        <q-btn
          flat
          label="About"
          :class="{ 'text-primary': isActive('/about') }"
          @click="go('/about')"
        />

        <!-- Services Dropdown -->
        <div
          class="relative-position"
          @mouseenter="openServicesMenu"
          @mouseleave="closeServicesMenuDelayed"
        >
          <q-btn flat class="row items-center no-caps">
            <span :class="{ 'text-primary': isServiceActive }">Services</span>
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

        <q-btn
          flat
          label="Contact"
          :class="{ 'text-primary': isActive('/contact') }"
          @click="go('/contact')"
        />
      </div>

      <!-- Mobile Hamburger -->
      <q-btn
        v-if="$q.screen.lt.md"
        dense
        flat
        icon="menu"
        class="q-hidden-md-and-up"
        @click="drawer = true"
      />
    </q-toolbar>

    <!-- 🔽 Progress bar sits at bottom of the header -->
    <div class="relative-position full-width">
      <BlogProgressBar />
    </div>

    <!-- Mobile Drawer -->
    <q-drawer v-model="drawer" side="right" overlay behavior="mobile">
      <q-list padding>
        <q-item clickable @click="go('/')">
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item clickable @click="go('/about')">
          <q-item-section>About</q-item-section>
        </q-item>
        <q-expansion-item label="Services">
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
        </q-expansion-item>
        <q-item clickable @click="go('/contact')">
          <q-item-section>Contact</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
  </q-header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useQuasar } from 'quasar'
import BlogProgressBar from 'components/BlogProgressBar.vue'

const $q = useQuasar()
const router = useRouter()
const route = useRoute()

const drawer = ref(false)
const servicesMenu = ref(false)
let closeTimer = null

function go(path) {
  router.push(path)
  drawer.value = false
  servicesMenu.value = false
}

function isActive(path) {
  return route.path === path
}

const isServiceActive = computed(() => route.path.startsWith('/services'))

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
.relative-position {
  position: relative;
}

.text-primary {
  color: #1976d2 !important; /* Quasar default primary */
  font-weight: 600;
}

.sticky-header {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>
