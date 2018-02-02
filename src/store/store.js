import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	geolocation: function(){
        let geolocationCityName = localStorage.cityName;
        return geolocationCityName;
    },
    loginPageHeight: null,
}

const mutations={
    changeCityName(state,index){   	
        state.cityName = index;
    },
    changeLoginPageHeight(state,index){     
        state.loginPageHeight = index;
    },
}

const getters = {
    updatedCityName:function(state){
        var aa = state.geolocation();
        return aa;
    },
    updatedLoginPageHeight:function(state){
        return state.loginPageHeight;
    },
   
}

const actions ={
    changeCityNameAction({commit},index){
        commit('changeCityName',index)
    },
    changeLoginPageHeightAction({commit},index){
        commit('changeLoginPageHeight',index)
    },
}

export default new Vuex.Store({
    state,mutations,getters,actions
});