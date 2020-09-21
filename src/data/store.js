import Vuex from 'vuex';
import Vue from 'vue';
import terminal from "./terminal";


Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        sidebarOpen: false
    },
    mutations: {
        toggleSidebar(state) {
            state.sidebarOpen = !state.sidebarOpen
        },
        closeSidebar(state) {
            state.sidebarOpen = false
        },
        openSidebar(state) {
            state.sidebarOpen = true
        }
    },
    modules:{
        terminal
    }
});

export default store;
