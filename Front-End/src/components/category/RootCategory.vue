<template>
  <div>
    <template v-if=loading>
      loader
    </template>
    <template v-if="!loading">
      <nav class="nav nav-pills nav-justified">
        <router-link :to="'/category/'" tag="a" class="nav-item nav-link" active-class="active" exact >All</router-link>
        <template v-for="(c, index) in getCategories" >
          <router-link :to="'/category/' + c.key" tag="a" class="nav-item nav-link" active-class="active" exact :key="`menu_${index}`">{{c.name}}</router-link>
        </template>
      </nav>
    </template>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'rootCategory',
  components: {
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
