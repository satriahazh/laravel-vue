export default [
  { path: '/mahasiswa', component: () => import('../components/mahasiswa/Index.vue'), name: 'mahasiswa.index' },
  { path: '/mahasiswa/create', component: () => import('../components/mahasiswa/Create.vue'), name: 'mahasiswa.create' },
  { path: '/mahasiswa/show/:id', component: () => import('../components/mahasiswa/Show.vue'), name: 'mahasiswa.show' },
//   { path: '/mahasiswa/edit/:id', component: () => import('../components/mahasiswa/Edit.vue'), name: 'mahasiswa.edit' },
];
