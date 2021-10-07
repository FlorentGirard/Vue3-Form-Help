import { createApp } from 'vue'
import App from './App.vue'

// Lodash a JavaScript library that provides utility functions for common programming tasks.
// install Lodash npm i --save lodash
// upperCase converts the first character of a string to upper case
import upperFirst from 'lodash/upperFirst'
// camelCase converts a string to camel case (camelCase isWritten likeThis)
import camelCase from 'lodash/camelCase'
import router from './router'

//require.context to allow webpack to know that it needs to require all of the files in the components folder that start with the Base
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

const app = createApp(App).use(router)

// We are going to loop through each of our components in this array ( parcours les composants dans le tableau).
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )
  // Save a global Component
  app.component(componentName, componentConfig.default || componentConfig)
})

app.mount('#app')

require('@/assets/main.scss')
