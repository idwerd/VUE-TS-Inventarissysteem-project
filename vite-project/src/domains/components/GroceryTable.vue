<script setup lang="ts">
import type { Grocery } from '../store';
import { useRouter } from 'vue-router';

const router = useRouter();

const groceries = defineModel<Grocery[]>();

</script>

<template>
    <table id="grocerytable">
        <tr>
            <th class="product-name">Product</th>
            <th>Amount</th>
            <th>Minimum amount</th>
        </tr>
        <tr v-for="grocery in groceries">
            <td class="product-name">{{ grocery.name }}</td>
            <td><input type="number" v-model="grocery.actualAmount"></td>
            <td>{{ grocery.minimumAmount }}</td>
            <button class="btn-secundairy" type="button" @click="router.push({name: 'inventory.edit', params: {id: grocery.id} })">Edit</button>
        </tr>                                                          
    </table>
</template>

<style scoped></style>