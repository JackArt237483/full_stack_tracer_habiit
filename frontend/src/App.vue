<script setup>
import Footer from './components/FooterName.vue';
import Header from '@/components/HeaderName.vue'
import HabitForm from '@/components/HabitForm.vue'
</script>

<template>
  <div class="app">
    <Header />
    <main>
      <HabitForm></HabitForm>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
main {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
}
</style>
