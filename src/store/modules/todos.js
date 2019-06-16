export default {
  state: {
    todos: [
      {
        name: 'Learn Vue',
        done: true
      },
      {
        name: 'Learn Vuex',
        done: true
      },
      {
        name: 'Chill with Vuex',
        done: false
      },
      {
        name: 'Improve the knowledge of Vuex',
        done: false
      },
      {
        name: 'Chill with Vuex again',
        done: false
      }
    ]
  },

  getters: {
    getNumberTodos(state) {
      return state.todos.length
    },
    getNumberDoneTodos(state) {
      return state.todos.filter((todos) => todos.done == true).length
    },
    getNumberUndoneTodos(state) {
      return state.todos.filter((todos) => todos.done == false).length
    }
  },

  mutations: {
    mutate_todo_done(state, payload) {
      state.todos[payload].done = !state.todos[payload].done
    },
    mutate_with_new_todo(state, payload) {
      state.todos.push(payload)
    }
  },

  actions: {
    changeDone({ commit }, index) {
      commit('mutate_todo_done', index)
    },
    addNewTodo({ commit }, newTodo) {
      commit('mutate_with_new_todo', newTodo)
    }
  }
}