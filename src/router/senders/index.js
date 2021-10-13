export default [
  {
    path: '/senders',
    name: 'senders',
    component: () => import('@/views/senders/senders-list/SendersList.vue'),
    meta: {
      pageTitle: 'Senders',
      breadcrumb: [
        {
          text: 'Senders List',
          active: true,
        },
      ],
    },
  },
]
