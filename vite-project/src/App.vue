<script setup lang="ts">
</script>

<template>
  <nav>
    <RouterLink class="main-nav-item" id="home" :to="{name: 'inventory.overview'}">Overview</RouterLink>
    <RouterLink class="main-nav-item" :to="{name: 'inventory.add'}">Add</RouterLink>
    <RouterLink class="main-nav-item" :to="{name: 'inventory.order'}">Order</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
