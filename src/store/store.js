import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	navActiveIndex: null,
}

const mutations={
    changeNavActiveIndex(state,index){   	
        state.navActiveIndex = index;

    },
}

const getters = {
    navActiveIndex:function(state){
        return state.navActiveIndex;
    }
}

const actions ={
    changeNavActiveIndexAction({commit},index){

        commit('changeNavActiveIndex',index)
    },
}

export default new Vuex.Store({
    state,mutations,getters,actions
});