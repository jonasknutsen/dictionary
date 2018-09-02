import React from 'react'

import Header from './Header'
import Footer from './Footer'
import GaWrapper from '../lib/analytics'

const Layout = (props) => (
  <div className='wrapper'>
    <Header />
    <main>
      {props.children}
    </main>
    <Footer />
  </div>
)

export default GaWrapper(Layout)
