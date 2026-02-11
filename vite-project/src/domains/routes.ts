import Add from './pages/Add.vue';
import Overview from './pages/Overview.vue';
import Edit from './pages/Edit.vue';
import Order from './pages/Order.vue';


export const routes = [
  {path: '/', component: Overview, name: 'inventory.overview'},
  {path: '/add', component: Add, name: 'inventory.add'},
  {path: '/edit', component: Edit, name: 'inventory.edit'},
  {path: '/order', component: Order, name: 'inventory.order'},
];
