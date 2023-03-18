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
            return state.appSchema.pages[0].components
        },
        getAppHeaderComponentsSchema(state) {
            return state.appSchema.header.components
        },
        getAppFooterComponentSchema(state) {
            return state.appSchema.footer.components
        },
        getFilterComponentSchema(state) {
            return state.appSchema.pages[1].components.find(item => item.component === "FilterComponent").schema
        },
        getUsersFilterComponentSchema(state) {
          return state.appSchema.pages[3].components.find(item => item.component === "UserFilterComponent").schema
        }
    }
}