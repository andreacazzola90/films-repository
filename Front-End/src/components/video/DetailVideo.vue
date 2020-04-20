<template>
  <div>
    <h1>profile detail component id: {{id}}</h1>
    <ul class="list-group">
      <li class="list-group-item"><b>name</b> : {{ getName }}</li>
      <li class="list-group-item"><b>email</b> : {{ getEmail }}</li>
      <li class="list-group-item"><b>password</b> : {{ getPassword }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'detailPost',
  data () {
    return {
      id: this.$route.params.id
    }
  },
  watch: {
    '$route' (to, from) {
      this.id = to.params.id
    }
  },
  computed: {
    ...mapGetters({
      getName: 'profile/getName',
      getEmail: 'profile/getEmail',
      getPassword: 'profile/getName'
    })
  }
}
</script>
