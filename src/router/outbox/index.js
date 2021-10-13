export default [
  {
    path: '/outbox',
    name: 'outbox',
    component: () => import('@/views/outbox/outbox-list/OutboxList.vue'),
  },
  {
    path: '/api-outbox',
    name: 'api-outbox',
    component: () => import('@/views/outbox/outbox-list/ApiOutboxList.vue'),
  },
]
