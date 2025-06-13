<template>
  <q-footer class="bg-white text-dark q-pt-xl q-pb-lg shadow-up">
    <div class="container q-px-md">
      <!-- Top Grid -->
      <div class="row q-col-gutter-lg q-mb-xl">
        <!-- Company Info -->
        <div class="col-12 col-md-3">
          <div class="text-h6 text-primary q-mb-sm">Nexora</div>
          <p class="text-body2 text-grey-8">
            Building innovative digital experiences that drive growth and value. We create with
            purpose, passion, and precision.
          </p>
          <!-- Social Icons Under Company Info -->
          <div class="row q-mt-md q-gutter-sm">
            <q-btn
              flat
              dense
              round
              icon="mdi-facebook"
              href="https://www.facebook.com/nexoradigital"
              target="_blank"
            />
            <q-btn
              flat
              dense
              round
              icon="mdi-instagram"
              href="https://www.instagram.com/nexoradigital/"
              target="_blank"
            />
          </div>
        </div>

        <!-- Company Links -->
        <div class="col-6 col-md-3 footer-column">
          <div class="footer-section-title text-subtitle2 text-weight-bold q-mb-sm">Company</div>
          <div class="footer-links text-body2 text-grey-7">
            <a href="#about" class="block q-mb-xs">About Us</a>
            <a href="#work" class="block q-mb-xs">Our Work</a>
            <a href="#careers" class="block q-mb-xs">Careers</a>
            <a href="#contact" class="block">Contact</a>
          </div>
        </div>

        <!-- Services Links -->
        <div class="col-6 col-md-3 footer-column">
          <div class="footer-section-title text-subtitle2 text-weight-bold q-mb-sm">Services</div>
          <div class="footer-links text-body2 text-grey-7">
            <a href="#branding" class="block q-mb-xs">Branding</a>
            <a href="#web" class="block q-mb-xs">Web Design</a>
            <a href="#uiux" class="block q-mb-xs">UI/UX Strategy</a>
            <a href="#photo" class="block">Photography</a>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="col-12 col-md-3">
          <div class="text-subtitle2 text-weight-bold q-mb-sm">Stay Updated</div>
          <p class="text-body2 text-grey-8 q-mb-sm">
            Subscribe to get the latest news, case studies, and insights.
          </p>
          <q-input
            outlined
            dense
            placeholder="Your email"
            type="email"
            v-model="email"
            class="q-mb-sm"
          />
          <q-btn
            label="Subscribe"
            color="primary"
            no-caps
            unelevated
            class="full-width"
            @click="subscribe"
          />
        </div>
      </div>

      <!-- Divider -->
      <q-separator color="grey-3" spaced />

      <!-- Bottom Row -->
      <div class="row items-center justify-between q-pt-sm q-pb-none">
        <div class="col-12 col-md-auto text-caption text-grey-7 q-mb-sm q-mb-md-none">
          © {{ currentYear }} Nexora. All rights reserved.
        </div>
        <div class="col-12 col-md-auto text-caption text-grey-7 text-right">
          Designed with ❤️ by
          <a href="https://nexora-web.netlify.app/" class="text-primary" target="_blank"
            >Nexora Team</a
          >
        </div>
      </div>
    </div>
  </q-footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = new Date().getFullYear()
const email = ref('')

function subscribe() {
  if (email.value) {
    console.log('Subscribed:', email.value)
    // Replace with actual subscribe API
    email.value = ''
  }
}
</script>

<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
}

@media (min-width: 1440px) {
  .container {
    max-width: 1440px;
    padding-left: 24px;
    padding-right: 24px;
  }
}

/* other footer styles */
.footer-column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.footer-links a {
  text-decoration: none;
  color: inherit;
}
.footer-links a:hover {
  color: #1d4ed8; /* primary hover */
}
</style>
