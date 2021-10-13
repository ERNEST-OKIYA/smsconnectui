export default [
  {
    path: '/address-books',
    name: 'address-books',
    component: () => import('@/views/address-book/AddressBook.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'todo-application',
    },
  },
]
