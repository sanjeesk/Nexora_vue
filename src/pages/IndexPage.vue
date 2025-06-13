<template>
  <q-page class="bg-white">
    <!-- Hero Section -->
    <section class="q-px-xl q-py-xl row items-center justify-between">
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
          src="https://source.unsplash.com/featured/?creative,design"
          alt="Creative Work"
          :ratio="16 / 9"
        />
      </div>
    </section>

    <!-- Services Section -->
    <section class="q-px-xl q-py-xl bg-grey-1">
      <h2 class="text-h4 text-bold q-mb-lg text-center text-primary">Our Services</h2>
      <div class="row q-col-gutter-lg">
        <q-card class="col-12 col-md-3">
          <q-card-section>
            <q-icon name="photo_camera" size="40px" class="text-primary q-mb-md" />
            <h3 class="text-subtitle1 text-bold text-dark">Photography</h3>
            <p>Professional shoots that bring your brand's vision to life.</p>
          </q-card-section>
        </q-card>

        <q-card class="col-12 col-md-3">
          <q-card-section>
            <q-icon name="web" size="40px" class="text-primary q-mb-md" />
            <h3 class="text-subtitle1 text-bold text-dark">Web Development</h3>
            <p>Modern, responsive websites built for performance and impact.</p>
          </q-card-section>
        </q-card>

        <q-card class="col-12 col-md-3">
          <q-card-section>
            <q-icon name="brush" size="40px" class="text-primary q-mb-md" />
            <h3 class="text-subtitle1 text-bold text-dark">Branding</h3>
            <p>Build a brand identity that sets you apart from the competition.</p>
          </q-card-section>
        </q-card>

        <q-card class="col-12 col-md-3">
          <q-card-section>
            <q-icon name="design_services" size="40px" class="text-primary q-mb-md" />
            <h3 class="text-subtitle1 text-bold text-dark">UI/UX Design</h3>
            <p>Delight your users with intuitive and aesthetic digital experiences.</p>
          </q-card-section>
        </q-card>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="q-px-xl q-py-xl">
      <h2 class="text-h4 text-bold q-mb-lg text-center text-primary">What Our Clients Say</h2>
      <q-carousel animated swipeable navigation height="200px" class="bg-grey-2 rounded-borders">
        <q-carousel-slide v-for="(t, index) in testimonials" :key="index">
          <div class="q-pa-md text-center">
            <q-icon name="format_quote" size="40px" class="text-primary q-mb-md" />
            <p class="text-body1 italic">"{{ t.quote }}"</p>
            <p class="text-bold q-mt-sm">- {{ t.name }}, {{ t.company }}</p>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </section>

    <!-- Call to Action -->
    <section class="q-px-xl q-py-xl bg-primary text-white text-center">
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
</script>

<style scoped>
.q-carousel-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
