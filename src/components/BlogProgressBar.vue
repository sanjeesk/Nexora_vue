<template>
  <div class="progress-bar" :style="{ width: scrollProgress + '%' }" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollProgress = ref(0)

function updateScrollProgress() {
  const scrollTop = window.scrollY
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress)
  updateScrollProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})
</script>

<style scoped>
.progress-bar {
  height: 5px;
  background-color: #1976d2; /* Quasar primary */
  position: absolute;
  top: 0;
  left: 0;
  transition: width 0.2s ease;
  border-radius: 5px;
}
</style>
