<template>
  <div>
    local
  </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  name: 'Local',
  computed: {
    ...mapState([
      'todos'
    ])
  }
}
</script>
