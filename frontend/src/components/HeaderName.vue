
<template>
  <header class="header">
    <h1>Habit tracer</h1>
    <button @click="toggleTheme">Switch task</button>
  </header>
</template>

<script setup>
function toggleTheme() {
  console.log('Switch theme!');
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #6200ea;
  color: #fff;
}
button {
  background: none;
  border: 1px solid #fff;
  color: #fff;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
