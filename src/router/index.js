import {lazy} from 'react';

const routerList = [
  {
    path: "/login",
    component: lazy(()=> import('../pages/login'))
  },
  {
    path: "/admin",
    component: lazy(()=> import('../pages/admin'))
  },
  {
    path: "/active",
    component: lazy(()=> import('../pages/active'))
  },
  {
    path: "/20231015",
    component: lazy(()=> import('../pages/20231015'))
  },
  {
    path: "/20231108",
    component: lazy(()=> import('../pages/20231108'))
  },
  {
    path: "/20240303",
    component: lazy(()=> import('../pages/20240303'))
  },
  {
    path: "/",
    component: lazy(()=> import('../pages/20240307'))
  }
]

export default routerList;