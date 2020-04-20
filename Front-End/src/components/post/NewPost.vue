<template>
  <div class="container">
    <h1>New Post</h1>
    <div class="row">
      <div class="col-md-6">
        <form>
          <div class="list-group">
            <div v-if="loading" class="alert alert-dark" role="alert">
              Loading...
            </div>
            <div v-if="success" class="alert alert-success" role="alert">
              Inserito con successo
            </div>
            <div v-if="failed" class="alert alert-warning" role="alert">
              Errore di caricamento
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">titolo</label>
            <input type="text" class="form-control" v-model="post.title" id="titoloInputEmail1" aria-describedby="titoloHelp" placeholder="titolo">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">testo</label>
            <input type="text" class="form-control" v-model="post.body" id="testoInputEmail1" aria-describedby="testoHelp" placeholder="testo">
          </div>
          <button type="submit" @click="invia()" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'newPost',
  data () {
    return {
      post: {
        id: '',
        title: 'a',
        body: 'a'
      },
      loading: false,
      success: false,
      failed: false
    }
  },
  computed: {
  },
  methods: {
    invia () {
      const url = '/posts'
      const payload = this.post

      this.loading = true
      axios.post(url, payload)
        .then(res => {
          console.log(res)
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
