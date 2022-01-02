import Vuex from 'vuex'
import homeModules from './modules/home/index.js'
const createStore = () => {
  return new Vuex.Store({
    modules: {
      home: homeModules,
    },
    state() {
      return {}
    },
  })
}
export default createStore
