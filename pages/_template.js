import React from 'react'
import {Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import './global.css'

let Template = ({children}) => (
  <div className='min-h-100 flex flex-column sans-serif'>
    <div className='ph5-ns flex flex-row items-center flex-wrap'>
      <div className='flex flex-auto pv4 w-auto-ns w-100'>
        <Link className='f3 pl3 pl0-ns ttu fw6 link near-black' to={prefixLink('/')}>
          Gambias<span className='fw1'>Børn</span>
        </Link>
      </div>

      <div className=''>
        <Link className='pa3 dib link near-black' to={prefixLink('/historien/')}>
          Historien
        </Link>

        <Link className='pa3 dib link near-black' to={prefixLink('/vores-mission/')}>
          Vores mission
        </Link>

        <Link className='pa3 dib link near-black' to={prefixLink('/det-kedelige/')}>
          Det kedelige
        </Link>

        <Link className='pa3 dib link near-black' to={prefixLink('/kontakt/')}>
          Kontakt
        </Link>
      </div>
    </div>
    <div className='flex-auto ph5-l ph4-m ph3'>
      {children}
    </div>

    <footer className='pv4 ph3 ph5-m ph6-l mid-gray mt4 bt b--near-white'>
      <small className='f6 db tc'>© 2016 <b className='ttu'>Gambias Børn</b>.</small>
      <div className='tc mt3'>
        <Link to={prefixLink('/kontakt/')} className='f6 dib ph2 link mid-gray dim'>Kontakt</Link>
        <Link to={prefixLink('/vores-mission/')} className='f6 dib ph2 link mid-gray dim'>Mission</Link>
      </div>
    </footer>
  </div>
)

export default Template
