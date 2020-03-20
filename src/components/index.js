import Vue from 'vue'
import Modal from './Modal'
import Accordion from './Accordion'

const components = {
  Modal,
  Accordion
}

for (const [key, value] of Object.entries(components)) {
  Vue.component(key, value)
}
