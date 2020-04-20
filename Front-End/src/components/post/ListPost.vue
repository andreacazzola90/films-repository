<template>
  <div class="container">
    <h1>List Post</h1>
    <div class="row">
      <div class="col-md-6">
        <form>
          <div class="list-group">
            <div v-if="loading" class="alert alert-dark" role="alert">Loading...</div>
          </div>
          <table v-if="!loading" class="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">title</th>
                <th scope="col">body</th>
                <th scope="col">userId</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="post in posts" :key="post.id">
                <td>{{post.id}}</td>
                <td>{{post.title}}</td>
                <td>{{post.body}}</td>
                <td>{{post.userId}}</td>
              </tr>
            </tbody>
          </table>
          <button type="submit" @click="invia()" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'listPost',
  data () {
    return {
      posts: [],
      loading: true
    }
  },
  computed: {},
  methods: {
    invia () {
      const url = '/posts'
      const payload = this.post

      this.loading = true
      axios
        .get(url, payload)
        .then(res => {
          console.log(res)
          this.posts = res.data
          this.loading = false
          this.success = true
        })
        .catch(err => {
          console.log(err)
          this.loading = false
          this.failed = true
        })
    }
  }
}
</script>
