import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	geolocation: function(){
        let geolocationCityName = localStorage.cityName;
        return geolocationCityName;
    },
   
}

const mutations={
    changeCityName(state,index){   	
        state.cityName = index;
    },
}

const getters = {
    updatedCityName:function(state){
        var aa = state.geolocation();
        return aa;
    },
   
}

const actions ={
    changeCityNameAction({commit},index){
        commit('changeCityName',index)
    },
}

export default new Vuex.Store({
    state,mutations,getters,actions
});