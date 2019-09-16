import Vue from 'vue'
import Vuex from 'vuex'
import listService from '@/services/listService.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    setList(state, data) {
      state.list = data
    },
    addIconToItem(state, data) {
     state.list[data.idx].icon = data.icon 
    }
  },
  getters: {
    getList(state) {
      return state.list
    }
  },
  actions: {
    loadList(context) {
      const list = listService.loadList();
      list.forEach((item, idx) => {
        var icon = listService.findIcon(item.category);
        // context.commit('addIconToItem', {idx, icon})
        item.icon = icon.icon;
        item.color = icon.color;
        context.commit('setList', list);
      })
    },
    
  }
})
