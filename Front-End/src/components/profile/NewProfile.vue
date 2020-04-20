<template>
  <div class="container">
    <h1>Profile component</h1>
    <div class="row">
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <label for="exampleInputText1">Username: {{getName}}</label>
            <input type="text" v-model="profile.name" class="form-control" id="exampleInputText1">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address: {{getEmail}}</label>
            <input type="email" v-model="profile.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password: {{getPassword}}</label>
            <input type="password" v-model="profile.password" class="form-control" id="exampleInputPassword1">
          </div>
          <button type="submit" @click="invia()" class="btn btn-primary">Submit</button>
        </form>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'newProfile',
  data () {
    return {
      profile: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      getName: 'profile/getName',
      getEmail: 'profile/getEmail',
      getPassword: 'profile/getName'
    })
  },
  methods: {
    ...mapMutations({
      setName: 'profile/setName'
    }),
    ...mapActions({
      actionProfile: 'profile/actionProfile'
    }),
    invia () {
      this.actionProfile(this.profile)
      this.$router.push('/profile')
    }
  }
}
</script>
