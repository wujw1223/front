import { createStore, Store } from 'vuex'

const store: Store<any> = createStore({
  state: () => {
    return {
      title: 'wjw'
    }
  }
})

export default store
