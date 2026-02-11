<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import type { Grocery } from '../store';

const router = useRouter();

const {newGrocery} = defineProps({
    newGrocery: {},
})
const localGrocery = ref({newGrocery});
//console.log(localGrocery.value);

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

    <form>
        <label v-for="(element, key, index) in localGrocery" :key="index" v-show="key != 'id'">
            <h4>{{ key }}</h4>
            <input
                :name="element"
                :type="typeof localGrocery[key] === 'number' ? 'number' : 'text'"
                v-model="localGrocery[key]"
                />
        </label>
        <button type="button" @click="handleSubmit">Submit</button>
        <button>Cancel</button>
    </form>

</template>

<style scoped></style>