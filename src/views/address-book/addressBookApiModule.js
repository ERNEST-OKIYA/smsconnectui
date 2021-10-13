import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchGroups(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get('//address-books/groups')
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    }
  }
}
