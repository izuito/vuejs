<template>
    <div id="merge">
        <h1>{{ message }}</h1>
        <button :disabled="!$can('save')">save</button>
    </div>
</template>

<script>
export default {
    name: 'UsuarioMerge',
  data () {
      return {
          message: 'Merge'
      }
  }
}
</script>

<style>

</style>
