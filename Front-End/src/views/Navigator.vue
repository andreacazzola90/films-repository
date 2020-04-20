<template>
    <div id="nav">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          menu
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <router-link to="/" class="dropdown-item" tag="li" active-class="active" exact >Home</router-link>
          <router-link to="/category" class="dropdown-item" tag="li" active-class="active" exact>List Category</router-link>
          <router-link to="/profile" class="dropdown-item" tag="li" active-class="active" exact>List Profile</router-link>
          <router-link to="/profile/new" class="dropdown-item" tag="li" >Add Profile</router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'navigator',
  data () {
    return {

    }
  },
  computed: {

  }
}
</script>
