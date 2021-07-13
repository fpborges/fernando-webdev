import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import aboutFernando from "./aboutFernando/moduleAboutFernando";
export default new Vuex.Store({
	modules: {
		aboutFernando,
	},
});
