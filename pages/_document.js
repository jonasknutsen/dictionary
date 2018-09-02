import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html lang='en'>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>Generic dictionary</title>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' />
        </body>
      </html>
    )
  }
}
