const User = {
  // 状态
  state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
    user: {
      username: null
    }
  },

  // 取值 计算属性
  getters: {
    getUser(state) {
      return state.user;
    }
  },

  // 更新 只有mutations能更新state 但是是同步的
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },

  // 使用actions异步调用mutations
  actions: {
    asyncSetUser(context, user) {
      context.commit('setUser', user);
    }
  }
};

export default User;
