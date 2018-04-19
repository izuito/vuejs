<template>
	<div id="home">
    <h3>{{ message }} - {{access}}</h3>
    <ul>
      <li v-for="(route, index) in routes" :key="`root-${index}`">
          <div v-text="route.name"></div>
          <ul v-if="route.children.length > 0">
            <li v-for="(children, index) in route.children" :key="`children-${index}`" tag="li" :to="{path: `${children.path}`}" v-if="route.children.length > 0">
              <a href="javascript:void(0)" @click.prevent="access = `${children.meta.permissionUser}`" @click="routing(children.meta.permissionUser, children.path)">
                {{children.name}}
              </a>
            </li>
          </ul>
      </li>
    </ul> 
    <router-link to="/usuario/index">index(r)</router-link>
    <button @click="routing('create', '/usuario/index')">index</button>
    <button @click="routing('write', '/usuario/list')">list</button>
    <button @click="routing('save', '/usuario/merge')">merge</button>
    <p>
      <router-view />
    </p>
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
  },
  methods: {
    routing (permission, path) {
      this.access = permission
      this.$router.push({ path: path })
    },
    event () {
      console.log('+++ router-link')
    }
  }
}
</script>