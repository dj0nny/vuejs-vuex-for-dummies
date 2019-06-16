<template>
  <div class="local">
    <div class="row">
      <div class="col-md-6">
        <div class="todos">
          <b-list-group>
            <Todo v-for="(todo, index) in todos.todos" :key="index" :todo="todo" :todoIndex="index"></Todo>
          </b-list-group>
        </div>
      </div>
      <div class="col-md-6">
        <div class="stats">
          <b-list-group>
            <Stat name="Number of todo" :value="getNumberTodos"></Stat>
            <Stat name="Number of done todo" :value="getNumberDoneTodos"></Stat>
            <Stat name="Number of undone todo" :value="getNumberUndoneTodos"></Stat>
          </b-list-group>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState, mapGetters } from 'vuex'

import Todo from '../components/Todo'
import Stat from '../components/Stat'

export default {
  name: 'Local',
  components: {
    Stat,
    Todo
  },
  computed: {
    ...mapState([
      'todos'
    ]),
    ...mapGetters([
      'getNumberTodos',
      'getNumberDoneTodos',
      'getNumberUndoneTodos'
    ])
  },
  methods: {
    submitForm(e) {
      e.preventDefault()
    }
  }
}
</script>
