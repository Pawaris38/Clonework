import Vue from 'vue'
import BaseCard from '../components/ui/BaseCard.vue'
import NavbarBaseButton from '../components/ui/NavbarBaseButton.vue'
import BaseButton from '../components/ui/BaseButton.vue'
const components = { BaseCard, NavbarBaseButton, BaseButton }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
  console.log(name)
  console.log(component)
})
