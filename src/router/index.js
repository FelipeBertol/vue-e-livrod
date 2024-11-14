import { createRouter, createWebHistory } from 'vue-router';
import HomeScreen from '../screens/HomeScreen.vue';
import LibraryScreen from '../screens/LibraryScreen.vue'; 
import BookScreen from '../screens/BookScreen.vue'; 

const routes = [
  {
    path: '/',
    name: 'início',
    component: HomeScreen,
  },
  {
    path: '/biblioteca',
    name: 'biblioteca',
    component: LibraryScreen,
  },
  {
    path: '/livro',
    name: 'livro',
    component: BookScreen,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
