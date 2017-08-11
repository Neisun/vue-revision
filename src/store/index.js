import Vue from "vue"
import Vuex from "vuex"
import * as actions from "./actions"
import * as getters from "./getters"

Vue.use(Vuex);

const state = {
    num:0
}
const mutations = {
    add:function (state) {
        state.num++;
    },
    minus:function (state) {
        state.num--;
    }
}

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})