<template>
  <div class="home container">
    <h1>ciao, {{getName}}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      getName: 'profile/getName'
    })
  },
  components: {
  }
}
</script>
