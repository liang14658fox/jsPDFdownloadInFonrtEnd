import Vue from 'vue'
import VueRouter from 'vue-router'

import transformDomToPdf_demo from '@/views/transformDomToPdf_demo.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/transformDomToPdf_demo',
      component: transformDomToPdf_demo,
      props: true
    },
  ]
})

export default router
