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
        <q-img src="../assets/img/hero 1.png" alt="Creative Work" :ratio="16 / 9" />
      </div>
    </section>

    <!-- Services Section -->
    <section class="q-px-xl q-pt-xl q-pb-lg bg-grey-1 text-center">
      <h2 class="text-h4 text-bold q-mb-md text-primary">Our Services</h2>
      <p class="text-body1 q-mb-xl text-grey-8">
        We offer tailored creative solutions to help your brand grow and stand out — from strategy
        to execution.
      </p>
      <div class="row justify-center q-col-gutter-md q-gutter-md main_servieces">
        <div
          class="col-12 col-sm-6 col-md-3 service_items"
          v-for="(service, index) in services"
          :key="index"
        >
          <q-card class="service-card q-pa-md column items-center text-center">
            <q-icon :name="service.icon" size="42px" class="light-blue-1 q-mb-sm" />
            <div class="text-subtitle1 text-bold light-blue-1 q-mb-xs">{{ service.title }}</div>
            <p class="text-body2 light-blue-1">{{ service.desc }}</p>
          </q-card>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="q-px-xl q-pt-xl q-pb-lg text-center">
      <h2 class="text-h4 text-bold q-mb-md text-primary">Our Process</h2>
      <p class="text-body1 q-mb-xl text-grey-8">
        From idea to execution, we follow a streamlined, client-focused process.
      </p>
      <div class="row justify-center q-col-gutter-lg">
        <div class="col-12 col-sm-6 col-md-3" v-for="(step, i) in processSteps" :key="i">
          <q-card flat class="q-pa-md text-center">
            <q-icon :name="step.icon" size="40px" class="text-primary q-mb-sm" />
            <div class="text-subtitle1 text-bold q-mb-xs">{{ step.title }}</div>
            <p class="text-body2 text-grey-8">{{ step.desc }}</p>
          </q-card>
        </div>
      </div>
    </section>

    <!-- Case Studies Section -->
    <section class="q-px-xl q-pt-xl q-pb-lg">
      <h2 class="text-h4 text-bold text-center q-mb-lg text-primary">Case Studies</h2>
      <div class="row q-col-gutter-md justify-center">
        <div class="col-12 col-sm-6 col-md-4" v-for="(caseStudy, i) in caseStudies" :key="i">
          <q-card class="q-pa-md column items-start shadow-1 rounded-borders">
            <div class="text-subtitle1 text-bold q-mb-xs">{{ caseStudy.client }}</div>
            <p class="text-body2 text-grey-8 q-mb-sm">{{ caseStudy.summary }}</p>
            <q-btn
              label="Read More"
              color="primary"
              flat
              size="sm"
              class="q-mt-sm"
              :to="caseStudy.link"
            />
          </q-card>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="q-px-xl q-pt-xl q-pb-lg bg-grey-1">
      <h2 class="text-h4 text-bold q-mb-lg text-center text-primary">What Our Clients Say</h2>
      <q-carousel
        animated
        swipeable
        navigation
        height="200px"
        class="bg-white rounded-borders shadow-1"
      >
        <q-carousel-slide v-for="(t, index) in testimonials" :key="index">
          <div class="q-pa-md text-center">
            <q-icon name="format_quote" size="40px" class="text-primary q-mb-md" />
            <p class="text-body1 italic">"{{ t.quote }}"</p>
            <p class="text-bold q-mt-sm">- {{ t.name }}, {{ t.company }}</p>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </section>

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
const services = [
  {
    icon: 'photo_camera',
    title: 'Photography',
    desc: 'Event, wedding, product, and brand shoots that bring your vision to life with cinematic style.',
  },
  {
    icon: 'web',
    title: 'Web Development',
    desc: 'Responsive websites built for performance, aesthetics, and results — from landing pages to full platforms.',
  },
  {
    icon: 'brush',
    title: 'Branding',
    desc: 'Logo design, visual identity, and brand strategy that builds recognition and emotional connection.',
  },
  {
    icon: 'design_services',
    title: 'UI/UX Design',
    desc: 'Design systems and interfaces that are functional, beautiful, and user-friendly — mobile to web.',
  },
]

const testimonials = [
  {
    quote: 'Nexora helped us refresh our brand image and boosted engagement.',
    name: 'Amanda Lee',
    company: 'Glow Skincare',
  },
  {
    quote: 'Professional, creative and reliable. Highly recommended!',
    name: 'David Tan',
    company: 'Urban Vibe Studios',
  },
  {
    quote: 'From idea to launch, the team made it seamless.',
    name: 'Sarah Lim',
    company: 'Vibe Travel',
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
    desc: 'We begin by understanding your goals and challenges.',
  },
  {
    icon: 'task',
    title: 'Planning',
    desc: 'We develop strategies and design roadmaps tailored to your brand.',
  },
  {
    icon: 'palette',
    title: 'Design',
    desc: 'Our team brings ideas to life with visually compelling designs.',
  },
  {
    icon: 'rocket_launch',
    title: 'Launch',
    desc: 'We deploy and monitor to ensure quality and performance.',
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
