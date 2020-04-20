<template>
  <div id="app">
    <navigator></navigator>
    <template v-if=loading>
      cacca
    </template>
    <template v-if=!loading>
    </template>

    <router-view/>
  </div>
</template>

<script>
import Navigator from '@/views/Navigator'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    Navigator
  },
  data () {
    return {
      loading: true

    }
  },
  beforeMount () {
    this.fetchCategories()
      .then(() => {
        this.loading = false
      })
      .catch(() => {
        this.loading = false
      })
  },
  computed: {
    ...mapGetters({
      getCategories: 'category/getCategories'
    })

  },
  methods: {

    ...mapActions({
      fetchCategories: 'category/fetchCategories'

    })

  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
