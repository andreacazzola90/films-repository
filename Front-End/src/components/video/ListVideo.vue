<template>
  <div class="container">
    <h1>List Video</h1>
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
                <th scope="col">categoryId</th>
                <th scope="col">body</th>
                <th scope="col">userId</th>
                <th scope="col">image</th>
                <th scope="col">link</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="v in getFilteredVideos(this.$route.params.id)" :key="v.id">
                <td>{{v.id}}</td>
                <td>{{v.category.name}}</td>
                <td>{{v.name}}</td>
                <td>{{v.content}}</td>
                <td><img :src="'http://localhost:1337' + v.image.url" width="200px"></td>
                <td><button @click.prevent="viewVideo(v.id)" >view</button></td>
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
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'listVideo',
  data () {
    return {
      loading: false
    }
  },
  beforeMount () {
    this.fetchVideos()
      .then(
        this.loading = false
      )
      .catch(
        this.loading = false
      )
  },
  computed: {
    ...mapGetters({
      getVideos: 'video/getVideos',
      getFilteredVideos: 'video/getFilteredVideos'
    })
  },
  methods: {
    ...mapActions({
      fetchVideos: 'video/fetchVideos'
    }),
    viewVideo (ID) {
      this.$router.push('/video/' + ID)
    }
  }
}
</script>
