import React from 'react'

import config from '../config'

class AdSense extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }

  render () {
    return (
      <div className='ad'>
        <span className='ad-title'>Advertisement</span>
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client={config.GOOGLE_ADSENSE_CLIENT}
          data-ad-slot={config.GOOGLE_ADSENSE_SLOT}
          data-ad-format='auto'
          data-full-width-responsive='true'
          data-adtest='on'
        />
        <style jsx>{`
          .ad {
            border: 1px solid #525252;
            margin: .2rem;
            border: .2rem;
          }
          .ad-title {
            color: #525252;
          }
        `}</style>
      </div>
    )
  }
}

export default AdSense
