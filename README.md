# vuejs-vuex-for-dummies 



> A Vue.js app with Vuex: a centralized state manager for Vue

## Introduction

This repository is an example of web application developed using [Vue.js](https://vuejs.org/) that integrates [Vuex](https://vuex.vuejs.org/): a __state management pattern__ library for Vue.js applications.

If you are new to Vue's world or if you want to understand Vuex's concepts, this repository is for you. :smiley:

## Getting Started

### Prerequisites

You must have __Npm__ or __Yarn__ installed on your machine.

This project was generated with the __Vue CLI__. If you want to develop you personal project with Vue, install the [Vue CLI](https://cli.vuejs.org/) 

### Installing

Clone the repository using __Git__:
```bash
git clone https://github.com/dj0nny/vuejs-state-management-for-beginners.git
```

Or __download__ the repository [here](https://github.com/dj0nny/vuejs-vuex-for-dummies/archive/develop.zip)

---

Run 

```bash
npm run install
# OR
yarn install
```

for installing the dependencies. At the end type 

```bash
npm run serve
# OR
yarn serve
```

for running the application.

## Setup Vuex

### Classic Mode

All Vuex's configurations are inside the `store.js` file.

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
```

### Namespaced Modules

Every `.js` file inside the store directory is transformed as a namespaced module (`index` being the root module).

`index.js`

```js
import Vue from 'vue'
import Vuex from 'vuex'

import todos from './modules/todos'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos
  },
  strict: true // strict mode prevents the state changing outside the Vuex store
})

```

`store/todo.js`

```js
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
```

## Terminology


* __State__: this object contains all the application states, in this case our state is the array of objects `todos`.
* __Getters__: they are derived state based on store state, like the `getNumberTodos()` function that compute the current numeber of todos in the array.
* __Mutations__: are functions for changing states' values. For example the mutation `mutate_todo_done` change the value of the field `done` inside the state.
* __Actions__: they are similar to mutations but instead of mutating the state, actions trigger mutations, like the `changeDone` that commits the `mutate_todo_done` passing the index number of the todo.

## Next version

* [x] Generate the project
* [x] Setup Vuex with namespaced mode
* [x] Add aditional packages
* [x] Add `todo.js` module
* [x] Add state
* [x] Add getters
* [x] Add mutations
* [x] Add actions
* [x] Add page and components Todo
* [ ] __API__
* [ ] Fetch remote data from API
* [ ] Add them to the store
* [ ] Add state
* [ ] Add getters
* [ ] Add mutations
* [ ] Add actions



## Built with ❤ using:

* [Vue.js](https://vuejs.org/) - A Javascript framework
* [Vuex](https://vuex.vuejs.org/) - A state management pattern library for Vue.js applications
* [Bootstrap Vue](https://bootstrap-vue.js.org/) - Bootstrap components for Vue.js

## Contributing

Pull Requests for adding features ⇄ and ★ are welcome
