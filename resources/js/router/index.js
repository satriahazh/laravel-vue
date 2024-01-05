// resources/js/routes/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import MahasiswaRoutes from './mahasiswa';
import { createWebHistory, createRouter } from "vue-router";

Vue.use(VueRouter);

const routes = [
  ...MahasiswaRoutes,
  // Tambahan rute lainnya jika ada
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
