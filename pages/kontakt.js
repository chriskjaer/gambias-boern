import React from 'react'
import Helmet from 'react-helmet'
import {config} from 'config'

export default class Kontakt extends React.Component {
  render () {
    return (
      <div>
        <Helmet title={`${config.siteTitle} | Kontakt`} />
        <h1 className='f1'>Kontakt</h1>
      </div>
    )
  }
}
