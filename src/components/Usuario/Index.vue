<template>
    <div id="index">
        <h1>{{ message }} - {{access}}</h1>
        <button :disabled="!$can('create')">create</button>
        <button :disabled="!$can('read')">read</button>
    </div>
</template>

<script>
export default {
    name: 'UsuarioIndex',
  data () {
      return {
          message: 'Index'
      }
  }
}
</script>

<style>

</style>
