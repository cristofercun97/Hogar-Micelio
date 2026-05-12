<template>
  <MicelioCanvas />
  <TheNavbar />

  <main>
    <HeroSection />
    <AboutSection />
    <EssenceSection />
    <SpaceSection />
    <WeekendSection />
    <ActivitiesSection />
    <MassageSection />
    <TestimonialsSection />
    <FaqSection />
    <ContactSection />
  </main>

  <TheFooter />
</template>

<script setup>
import MicelioCanvas     from '@/components/MicelioCanvas.vue'
import TheNavbar         from '@/components/TheNavbar.vue'
import TheFooter         from '@/components/TheFooter.vue'
import HeroSection       from '@/sections/HeroSection.vue'
import AboutSection      from '@/sections/AboutSection.vue'
import EssenceSection    from '@/sections/EssenceSection.vue'
import SpaceSection      from '@/sections/SpaceSection.vue'
import WeekendSection    from '@/sections/WeekendSection.vue'
import ActivitiesSection from '@/sections/ActivitiesSection.vue'
import MassageSection    from '@/sections/MassageSection.vue'
import TestimonialsSection from '@/sections/TestimonialsSection.vue'
import FaqSection        from '@/sections/FaqSection.vue'
import ContactSection    from '@/sections/ContactSection.vue'
import { useGlobalFadeObserver } from '@/composables/useFadeObserver'

// Single observer for the entire document — replaces 6 per-section instances
useGlobalFadeObserver()
</script>
