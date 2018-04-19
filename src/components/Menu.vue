<template>
  <div>
    <ul>
      <li v-for="(route, index) in routes" v-bind:key="menu-`${index}`">
          <router-link :to="{path: `${route.path}`}">{{route.name}}</router-link>
          <ul v-for="(children, index) in route.children" v-bind:key="sub-`${index}`" v-if="children.length > 0">
              <li>
                  <router-link :to="{path: `${children.path}`}">{{children.name}}</router-link>
              </li>
          </ul>
      </li>
    </ul>    
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
      routes: {
          type: Array
      }
  }
}
</script>

<style>

</style>
