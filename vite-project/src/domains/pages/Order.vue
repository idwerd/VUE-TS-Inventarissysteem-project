<script setup lang="ts">
import { computed } from 'vue';
import GroceryTable from '../components/GroceryTable.vue'
import { getInventory } from '../store';

const orderGroceries = computed(() => getInventory.value.filter(grocery => grocery.actualAmount < grocery.minimumAmount));

</script>

<template>
  <GroceryTable v-model="orderGroceries"/>
</template>

<style scoped></style>