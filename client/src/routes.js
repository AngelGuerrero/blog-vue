import Welcome from './components/pages/Welcome'
import Contact from './components/pages/Contact'
import About from './components/pages/About'

import Post from './components/Post'
import NotFound from './components/NotFound'

export default [
  {
    path: '/',
    name: 'home',
    component: Welcome
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post,
    props: (route) => { return { id: Number(route.params.id) } }
  },
  {
    path: '*',
    component: NotFound
  }
]
