import { createStore, Store } from 'vuex'

const store: Store<{ title: string }> = createStore({
  state: () => {
    return {
      title: 'wjw'
    }
  }
})

export default store
