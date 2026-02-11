<script setup lang="ts">
import GroceryTable from '../components/GroceryTable.vue'
import {getInventory } from '../store.ts'

const groceries = getInventory;

</script>

<template>
  <GroceryTable v-model="groceries"/>
</template>

<style scoped></style>
