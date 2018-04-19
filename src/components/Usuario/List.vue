<template>
    <div id="list">
        <h1>{{ message }}</h1>
        <button :disabled="!$can('write')">write</button>
        <button :disabled="!$can('delete')">delete</button>        
    </div>
</template>

<script>
export default {
    name: 'UsuarioList',
  data () {
      return {
          message: 'List'
      }
  }
}
</script>

<style>

</style>
