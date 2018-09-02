import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <footer>
        This is a magic footer
        <style jsx>{`
          footer {
            text-align: center;
          }
        `}</style>
      </footer>
    )
  }
}

export default Footer
