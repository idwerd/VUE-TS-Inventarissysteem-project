<script setup lang="ts">
import type { Grocery } from '../store';

const groceries= defineModel<Grocery[]>();
//console.log(groceries.value);

</script>

<template>
    <table>
        <tr>
            <th>Product</th>
            <th>Amount</th>
            <th>Minimum amount</th>
        </tr>
        <tr v-for="(grocery, index) in groceries">
            <td>{{ grocery.name }}</td>
            <td><input type="number" v-model="groceries[index].actualAmount"></td>
            <td>{{ grocery.minimumAmount }}</td>
        </tr>
    </table>
</template>

<style scoped></style>