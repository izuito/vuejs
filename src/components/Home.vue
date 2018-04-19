<template>
	<div id="home">
        <h3>{{ message }}</h3>
        <div v-text="routes"></div>

        <router-view></router-view>
	</div>
</template>

<script>
import store from '../store/index'
export default {
  name: "Home",
  data() {
    return {
      message: "Home..."
    }
  },
  computed: {
    routes () {
      return store.getters.routers
    }
  }
}
</script>