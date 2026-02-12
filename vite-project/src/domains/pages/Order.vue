<script setup lang="ts">
import GroceryTable from '../components/GroceryTable.vue'
import { getInventory } from '../store';
import type { Grocery } from '../store';

const orderGroceries = getInventory.value.filter(checkInventory);

function checkInventory(grocery: Grocery) {
  if (grocery.actualAmount < grocery.minimumAmount) {
    return grocery;
  }
  
}
</script>

<template>
  <GroceryTable v-model="orderGroceries"/>
</template>

<style scoped></style>