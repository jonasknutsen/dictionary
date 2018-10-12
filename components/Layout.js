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
    <style jsx global>{`
    html,
    body,
    #__next,
    .wrapper {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      font-size: 16px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    .wrapper {
      display: flex;
      flex-direction: column;
    }
    main {
      flex: 1;
    }
    `}</style>
  </div>
)

export default GaWrapper(Layout)
