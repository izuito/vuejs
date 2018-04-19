export default [
  {
    path: '/home',
    name: 'Home',
    component: '/Home',
    meta: {
      id: 1,
      menu: false
    }
  },
  {
    path: '/painel',
    name: 'Controle de Acesso',
    icon: 'ti-panel',
    component: '/Menu',
    children: [  
      {
        path: '/usuario/index',
        name: 'UsuarioIndex',
        component: '/Usuario/Index',
        meta: {
          menu: true
        }
      },
      {
        path: '/usuario/list',
        name: 'UsuarioList',
        component: '/Usuario/List',
        meta: {
          menu: false
        }
      },
      {
        path: '/usuario/merge',
        name: 'UsuarioMerge',
        component: '/Usuario/Merge',
        meta: {
          menu: false
        }
      }
    ]
  }
]
