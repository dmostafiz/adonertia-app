import { ChakraProvider } from '@chakra-ui/react'
import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import ReactDOM from 'react-dom'
import '../css/app.css'
import { router } from '@inertiajs/react'
import { InertiaProgress } from '@inertiajs/progress'

const el = document.getElementById('app')

InertiaProgress.init({
  // The delay after which the progress bar will
  // appear during navigation, in milliseconds.
  delay: 250,

  // The color of the progress bar.
  color: '#29d',

  // Whether to include the default NProgress styles.
  includeCSS: true,

  // Whether the NProgress spinner will be shown.
  showSpinner: false,
})

ReactDOM.render(
  <ChakraProvider>
    <InertiaApp
      initialPage={JSON.parse(el.dataset.page)}
      initialComponent={null}
      resolveComponent={(name) => import(`./Pages/${name}`).then((module) => module.default)}
    />
  </ChakraProvider>
    ,
  el
)