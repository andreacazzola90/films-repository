<template>
  <div class="container">
    <h1>listCategory</h1>
    <div class="row">
      <div class="col-lg-12">
        <div v-for="category in categories" :key="category.id" >
          <router-link :to="{name: 'detailProfile',params: { id : category.id }}">{{category.name}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'listCategory',
  data () {
    return {
      categories: [
        { id: 1, name: 'andrea' },
        { id: 2, name: 'luca' },
        { id: 3, name: 'marta' }
      ]
    }
  }
}
</script>
