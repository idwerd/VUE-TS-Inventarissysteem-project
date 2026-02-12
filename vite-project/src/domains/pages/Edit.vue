<script setup lang="ts">
import GroceryForm from '../components/GroceryForm.vue'
import { useRoute } from 'vue-router'
import { updateGrocery, getGroceryById } from '../store';
import type { Grocery } from '../store';

const route = useRoute();
const groceryId = Number(route.params.id);
const grocery = getGroceryById(groceryId);

</script>

<template>
  <GroceryForm v-if="grocery" :grocery="grocery" @updateList="updateGrocery"/>
</template>

<style scoped></style>