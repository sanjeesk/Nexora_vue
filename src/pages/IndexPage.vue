<template>
  <q-page class="bg-white">
    <!-- Hero Section -->
    <section class="q-px-xl q-pt-xl q-pb-lg row items-center justify-between">
      <div class="col-12 col-md-6">
        <h1 class="text-h3 text-bold q-mb-md text-primary">We Help Brands Stand Out</h1>
        <p class="text-body1 q-mb-md text-dark">
          Nexora is your creative partner for photography, web design, UI/UX and branding solutions.
          Let us help you elevate your story.
        </p>
        <q-btn color="primary" label="View Our Work" to="/portfolio" class="q-mt-sm" unelevated />
      </div>
      <div class="col-12 col-md-5">
        <q-img
          src="../assets/img/hero 1.png"
          alt="Creative Work"
          style="height: 100%; width: 100%; object-fit: cover"
          class="rounded-borders"
        />
      </div>
    </section>

    <!-- Services Section -->
    <section class="q-px-xl q-pt-xl q-pb-lg bg-grey-1 text-center">
      <h2 class="text-h4 text-bold q-mb-md text-primary">Our Services</h2>
      <p class="text-body1 q-mb-xl text-grey-8">
        We offer tailored creative solutions designed to help your brand grow, connect, and lead.
        From strategic planning and brand storytelling to cutting-edge web design, UI/UX
        experiences, and high-impact photography, our services are built to transform your ideas
        into results. Whether you're launching a new brand or elevating an existing one, we're here
        to guide you every step of the way — from concept to execution.
      </p>
      <div class="row justify-center q-col-gutter-md q-gutter-md main_servieces">
        <div
          class="col-12 col-sm-6 col-md-6 service_items"
          v-for="(service, index) in services"
          :key="index"
        >
          <div class="flip-card">
            <div class="flip-card-inner">
              <div
                class="flip-card-front q-pa-md column items-center text-center justify-center bg-primary"
              >
                <q-icon :name="service.icon" size="42px" class="light-blue-1 q-mb-sm" />
                <div class="text-subtitle1 text-bold light-blue-1 q-mb-xs">{{ service.title }}</div>
                <p class="text-body2 light-blue-1 w-80 q-mx-auto">{{ service.desc }}</p>
              </div>
              <div class="flip-card-back column items-center justify-center q-pa-md">
                <q-icon name="link" size="36px" class="text-primary q-mb-sm" />
                <q-btn
                  color="primary"
                  label="Learn More"
                  :to="service.link"
                  unelevated
                  class="q-mt-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="q-px-xl q-pt-xl q-pb-lg">
      <h2 class="text-h4 text-bold text-center q-mb-md text-primary">Our Process</h2>
      <p class="text-body1 text-center q-mb-xl text-grey-8">
        A clear, step-by-step journey from idea to launch.
      </p>

      <!-- Desktop View -->
      <div v-if="isDesktop" class="relative-position q-mb-xl">
        <div class="process-horizontal-line" />
        <div class="row q-col-gutter-lg justify-between text-center">
          <div
            class="col-12 col-md-3 desktop-process-step"
            v-for="(step, i) in processSteps"
            :key="i"
          >
            <q-icon :name="step.icon" size="48px" color="primary" class="q-mb-sm step_border" />
            <div class="text-h6 text-bold text-primary q-mb-xs">
              Step {{ i + 1 }}: {{ step.title }}
            </div>
            <p class="text-body2 text-grey-8">{{ step.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Mobile View -->
      <q-timeline v-else layout="dense" side="left" color="primary">
        <q-timeline-entry
          v-for="(step, i) in processSteps"
          :key="i"
          :title="step.title"
          :icon="step.icon"
          icon-color="primary"
        >
          <template v-slot:subtitle>
            <span class="text-primary text-bold">Step {{ i + 1 }}</span>
          </template>
          <div class="text-body2 text-grey-8">{{ step.desc }}</div>
        </q-timeline-entry>
      </q-timeline>
    </section>

    <!-- Case Studies Section -->
    <section class="q-px-xl q-pt-xl q-pb-xl bg-grey-2">
      <q-carousel
        v-model="caseStudySlide"
        arrows
        navigation
        control-color="primary"
        animated
        height="280px"
        class="bg-white rounded-borders shadow-1 q-pa-md"
      >
        <q-carousel-slide v-for="(caseStudy, i) in caseStudies" :key="i" :name="i" class="">
          <div style="text-align: center; display: block; align-content: center">
            <h2 class="text-h4 text-bold text-center q-mb-sm text-primary">Case Studies</h2>
            <p class="text-body1 text-center text-grey-8">
              Discover how we've transformed brands through design, development, and creative
              direction.
            </p>

            <div class="text-subtitle1 text-bold">{{ caseStudy.client }}</div>
            <p class="text-body2 text-grey-8 q-mb-sm">{{ caseStudy.summary }}</p>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </section>

    <!-- Testimonials Section -->

    <!-- FAQ Section -->
    <section class="q-px-xl q-pt-xl q-pb-lg text-center">
      <h2 class="text-h4 text-bold q-mb-md text-primary">Frequently Asked Questions</h2>
      <q-expansion-item v-for="(faq, i) in faqs" :key="i" :label="faq.q" expand-separator>
        <div class="text-body2 text-grey-8 q-pa-sm">{{ faq.a }}</div>
      </q-expansion-item>
    </section>

    <!-- Call to Action -->
    <section class="q-px-xl q-pt-xl q-pb-xl bg-primary text-white text-center">
      <h2 class="text-h4 text-bold q-mb-md">Ready to Get Started?</h2>
      <p class="q-mb-lg">Let's bring your ideas to life with creative solutions that work.</p>
      <q-btn
        color="white"
        text-color="primary"
        label="Contact Us"
        to="/contact"
        unelevated
        class="q-mt-sm"
      />
    </section>
  </q-page>
</template>

<script setup>
import { QTimeline, QTimelineEntry } from 'quasar'
import { useQuasar } from 'quasar'
import { ref } from 'vue'

const caseStudySlide = ref(0)

import { computed } from 'vue'
const $q = useQuasar()
const isDesktop = computed(() => $q.screen.gt.md)
const services = [
  {
    icon: 'photo_camera',
    title: 'Photography',
    desc: 'Event, wedding, product, and brand shoots that bring your vision to life with cinematic style.',
    link: '/services/photography',
  },
  {
    icon: 'web',
    title: 'Web Development',
    desc: 'Responsive websites built for performance, aesthetics, and results — from landing pages to full platforms.',
    link: '/services/web-dev',
  },
  {
    icon: 'brush',
    title: 'Branding',
    desc: 'Logo design, visual identity, and brand strategy that builds recognition and emotional connection.',
    link: '/services/branding',
  },
  {
    icon: 'design_services',
    title: 'UI/UX Design',
    desc: 'Design systems and interfaces that are functional, beautiful, and user-friendly — mobile to web.',
    link: '/services/uiux',
  },
]

const caseStudies = [
  {
    client: 'Glow Skincare',
    summary: 'Rebranded identity and built a new e-commerce experience.',
    link: '/case-studies/glow-skincare',
  },
  {
    client: 'Urban Vibe Studios',
    summary: 'Improved website UI/UX for 3x faster lead conversion.',
    link: '/case-studies/urban-vibe',
  },
  {
    client: 'Vibe Travel',
    summary: 'Launched a booking portal with real-time availability.',
    link: '/case-studies/vibe-travel',
  },
]

const processSteps = [
  {
    icon: 'lightbulb',
    title: 'Discovery',
    desc: 'We dive deep into your brand goals, audience, and challenges.',
  },
  {
    icon: 'task',
    title: 'Planning',
    desc: 'We create a strategic plan for execution.',
  },
  {
    icon: 'palette',
    title: 'Design',
    desc: 'We design visually engaging experiences.',
  },
  {
    icon: 'rocket_launch',
    title: 'Launch',
    desc: 'We launch and support your product post-release.',
  },
]

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Depending on complexity, it can range from 2 to 8 weeks.',
  },
  { q: 'Do you offer ongoing support?', a: 'Yes, we offer maintenance and support packages.' },
  {
    q: 'Can I request a custom package?',
    a: 'Absolutely! We tailor every service to your needs and goals.',
  },
]
</script>

<style scoped>
.service-card {
  border-radius: 12px;
  min-height: 220px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}
.q-carousel-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
