import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <header>
        This is a magic header
        <style jsx>{`
          header {
            text-align: center;
          }
        `}</style>
      </header>
    )
  }
}

export default Header
