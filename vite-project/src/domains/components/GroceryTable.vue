<script setup lang="ts">
import type { Grocery } from '../store';

const groceries= defineModel<Grocery[]>();
//console.log(groceries.value);

</script>

<template>
    <table id="grocerytable">
        <tr>
            <th>Product</th>
            <th>Amount</th>
            <th>Minimum amount</th>
        </tr>
        <tr v-for="grocery in groceries">
            <td>{{ grocery.name }}</td>
            <td><input type="number" v-model="grocery.actualAmount"></td>
            <td>{{ grocery.minimumAmount }}</td>
            <button class="btn-secundairy">Edit</button>
        </tr>
    </table>
</template>

<style scoped></style>