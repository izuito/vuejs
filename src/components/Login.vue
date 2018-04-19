<template>
	<div id="login">
		<form action="#">
			<input type="text" name="nome" v-model="usuario.nome">
			<button type="button" @click="autenticar">send</button>
		</form>
	</div>
</template>

<script>
import files from '../files'
import store from '../store/index'
export default {
  name: 'Login',
  data () {
    return {
      usuario: {
        nome: '',
        senha: ''
	  },
	  routes: [],
    }
  },
  methods: {
	  autenticar () {
		  if (this.usuario.nome === 'izuito') {
			  files.forEach(file => {
				var router = {
      		    	path: file.path,
					name: file.name,
					meta: file.meta,
					props: file.props,
					children: [],
      		    	component: () => import('../components' + file.component)
				}
				if (Array.isArray(file.children)) {
					file.children.forEach(c => {
						var rc = {
      		    			path: c.path,
							name: c.name,
							meta: c.meta,
      		    			component: () => import('../components' + c.component)
						}
						router.children.push(rc)
					})
				}			
      		  	this.routes.push(router)	
			  })
			  console.log('routes >>> ' + JSON.stringify(this.routes))
			  // store.dispatch('setRoutes', this.routes)
			  store.commit('routers', this.routes)
			  this.$router.addRoutes(this.routes)
			  this.$router.push({path: '/home', params: {routes: this.routes}})
		  }
	  }
  }
}
</script>