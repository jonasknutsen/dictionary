import React from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'
import colors from '../lib/colors'

class Index extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  handleInput = () => {
    console.log()
  }

  render () {
    return (
      <Layout>
        <Head>
          <title>Dorsk ordbok</title>
        </Head>
        <div className='logo'>
          <img src='/static/dorsk-ordbok.svg' />
        </div>
        <div className='searchform'>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='search'><span>Søk etter</span></label>
            <div className='searchform-inner'>
              <input id='search' type='text' aria-label='Skriv inn søkeord' placeholder='bajass' />
              <button type='submit'>
                <img src='/static/search.svg' />
              </button>
            </div>
          </form>
        </div>
        <style jsx>{`
          .logo,
          .searchform {
            width: 500px;
            max-width: 500px;
            position: relative;
            margin: 0 auto;
          }
          .searchform {
            margin-top: 2rem;
          }
          .searchform-inner {
            flex: 1;
            display: flex;
            border: 1px solid #000;
          }
          .searchform form {
            display: flex;
          }
          .searchform label {
            font-size: 20px;
            line-height: 20px;
            padding: 10px;
            border: 1px solid #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .searchform input {
            font-size: 20px;
            line-height: 20px;
            padding: 10px;
            border: 1px solid #fff;
            flex: 1;
            box-sizing: border-box;
          }
          .searchform button {
            font-size: 20px;
            line-height: 20px;
            height: 46px;
            background-color: #fff;
            color: #fff;
            border: 1px solid #fff;
            box-sizing: border-box;
            vertical-align: middle;
          }
          .searchform button img {
            height: 20px;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Index
