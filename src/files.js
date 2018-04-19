export default [
  {
    path: '/home',
    name: 'Controle de Acesso',
    icon: 'ti-panel',
    component: '/Home',
    meta: {
      permission: 'public'
    },
    children: [  
      {
        path: '/usuario/index',
        name: 'UsuarioIndex',
        component: '/Usuario/Index',
        meta: {
          menu: true,
          permission: 'public',
          permissionUser: 'create&read'
        }
      },
      {
        path: '/usuario/list',
        name: 'UsuarioList',
        component: '/Usuario/List',
        meta: {
          menu: false,
          permission: 'public',
          permissionUser: 'write&delete'
        }
      },
      {
        path: '/usuario/merge',
        name: 'UsuarioMerge',
        component: '/Usuario/Merge',
        meta: {
          menu: false,
          permission: 'public|admin',
          permissionUser: ''
        }
      }
    ]
  }
]
