import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/app'

import '@/styles/global.scss'

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
