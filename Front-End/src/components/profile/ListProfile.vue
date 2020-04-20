<template>
  <div class="container">
    <h1>listProfile</h1>
    <div class="row">
      <div class="col-lg-6">
        <div v-for="user in users" :key="user.id" >
          <router-link :to="{name: 'detailProfile',params: { id : user.id }}">{{user.name}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'listProfile',
  data () {
    return {
      users: [
        { id: 1, name: 'andrea' },
        { id: 2, name: 'luca' },
        { id: 3, name: 'marta' }
      ]
    }
  }
}
</script>
