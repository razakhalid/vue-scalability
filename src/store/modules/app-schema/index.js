import api from "@/data/api";
export default {
    namespaced: true,
    state() {
        return {
            appSchema: {}
        }
    },
    mutations: {
        SET_APP_SCHEMA(state, payload) {
            console.log("SET_APP_SCHEMA", payload)
            state.appSchema = payload;
        }
    },
    actions: {
        async setAppSchema({ commit }) {
            const appSchema = await api.appSchema.getAll();
            commit("SET_APP_SCHEMA", appSchema);
        }
    },
    getters: {
        getHomePageComponentsSchema(state) {
            console.log(state.appSchema)
            return state.appSchema.pages[0].components
        }
    }
}