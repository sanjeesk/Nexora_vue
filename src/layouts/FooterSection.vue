<template>
  <q-footer class="bg-grey-9 text-white">
    <div class="q-px-xl q-pt-xl q-pb-md">
      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-4">
          <div class="text-h6 text-bold">Nexora</div>
          <p class="text-caption">Empowering your digital journey.</p>
        </div>
        <div class="col-6 col-md-2">
          <div class="text-subtitle2 text-bold q-mb-sm">Services</div>
          <q-list dense class="text-caption">
            <q-item clickable to="/services/photography"
              ><q-item-section>Photography</q-item-section></q-item
            >
            <q-item clickable to="/services/web-dev"
              ><q-item-section>Web Services</q-item-section></q-item
            >
            <q-item clickable to="/services/branding"
              ><q-item-section>Branding</q-item-section></q-item
            >
            <q-item clickable to="/services/uiux"
              ><q-item-section>UI/UX Design</q-item-section></q-item
            >
            <q-item clickable to="/services/others"><q-item-section>Others</q-item-section></q-item>
          </q-list>
        </div>
        <div class="col-6 col-md-2">
          <div class="text-subtitle2 text-bold q-mb-sm">Company</div>
          <q-list dense class="text-caption">
            <q-item clickable to="/about"><q-item-section>About</q-item-section></q-item>
            <q-item clickable to="/contact"><q-item-section>Contact</q-item-section></q-item>
          </q-list>
        </div>
        <div class="col-12 col-md-4">
          <div class="text-subtitle2 text-bold q-mb-sm">Follow Us</div>
          <div class="row q-gutter-sm">
            <q-btn flat round icon="mdi-facebook" />
            <q-btn flat round icon="mdi-twitter" />
            <q-btn flat round icon="mdi-linkedin" />
            <q-btn flat round icon="mdi-instagram" />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-grey-8 text-caption text-center q-py-xs">
      © {{ new Date().getFullYear() }} Nexora. All rights reserved.
    </div>
  </q-footer>
</template>

<script setup />
<style scoped></style>
