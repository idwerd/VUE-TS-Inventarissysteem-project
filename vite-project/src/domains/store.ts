import {ref, computed} from 'vue';

//state
export interface Grocery {
    id: number,
    name: string,
    actualAmount: number,
    minimumAmount: number,
}

const inventory = ref<Grocery[]>([
    {
        id: 1,
        name: 'Brood',
        actualAmount: 3,
        minimumAmount: 3,
    },
    {
        id: 2,
        name: 'Kaas',
        actualAmount: 2,
        minimumAmount: 2,
    },
    {
        id: 3,
        name: 'Pesto',
        actualAmount: 1,
        minimumAmount: 1,
    },
    {
        id: 4,
        name: 'Ketchup',
        actualAmount: 1,
        minimumAmount: 1,
    },
    {
        id: 5,
        name: 'Bananen',
        actualAmount: 5,
        minimumAmount: 1,
    },
    {
        id: 6,
        name: 'Zomerfruit',
        actualAmount: 1,
        minimumAmount: 1,
    },
    {
        id: 7,
        name: 'Havermelk',
        actualAmount: 2,
        minimumAmount: 2,
    },
])

//getters
export const getInventory = computed(() => inventory.value);

//action
export const addGrocery = (newGrocery: Grocery) => inventory.value.push(newGrocery);