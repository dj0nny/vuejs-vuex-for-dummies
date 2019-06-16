<template>
  <b-list-group-item class="d-flex justify-content-between align-items-center">
    {{ todo.name }}
    <b-form-checkbox :checked="todo.done" @change="changeDoneState()"></b-form-checkbox>
  </b-list-group-item>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Todo',
  props: [
    'todo',
    'todoIndex'
  ],
  methods: {
    ...mapActions([
      'changeDone'
    ]),
    changeDoneState() {
      this.changeDone(this.todoIndex)
    }
  }
}
</script>
