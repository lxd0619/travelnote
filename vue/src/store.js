import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        userInfo: [
            {
              userName: "",
              sex: "",
              tel: "",
              headPic: "",
              email: "",
              address: "",
              registerTime: ""
            }
          ],
    },
    mutations:{

    },
    actions:{
        
    }
})