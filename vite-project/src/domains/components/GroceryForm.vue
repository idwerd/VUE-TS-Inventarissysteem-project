<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
//import type { Grocery } from '../store';

const router = useRouter();

const {grocery} = defineProps({
    grocery: {},
})
const localGrocery = ref({grocery});
console.log(localGrocery.value);

const handleSubmit = () => {
    updateInventory();
    router.push({name:'inventory.overview'})
}

const emit = defineEmits(['updateList']);
const updateInventory = () => {
    emit('updateList', localGrocery.value)
}
</script>

<template>

    <form id="groceryform">
    <!---->
        <label v-for="(element, key, index) in localGrocery" :key="index" v-show="key != 'id'">
            <h4>{{ key }}</h4>
            <input
                :name="element"
                :type="typeof localGrocery[key] === 'number' ? 'number' : 'text'"
                v-model="localGrocery[key]"
                />
        </label><!---->
        <button type="button" class="btn-primary" @click="handleSubmit">Submit</button>
        <button class="btn-secundairy">Cancel</button>
    </form>

</template>

<style scoped></style>