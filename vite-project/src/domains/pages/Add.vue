<script setup lang="ts">

import GroceryForm from '../components/GroceryForm.vue'
import type { Grocery } from '../store.ts'
import { getInventory, addGrocery } from '../store.ts'

const generateID = (): number => {
    if (getInventory.value.length === 0){
        return 1;
    } else {
        return Number(getInventory.value.at(-1)!.id + 1);
    }
}

const newGrocery: Grocery = {
    id: generateID(),
    name: '',
    actualAmount: 0,
    minimumAmount: 0,
}


</script>

<template>
  <GroceryForm :grocery="newGrocery" @updateList="addGrocery"/>
</template>

<style scoped></style>
