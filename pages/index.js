import React from 'react'
import {Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import Helmet from 'react-helmet'
import {config} from 'config'
import 'tachyons'
import s from './index.module.css'
import cx from 'classnames'
import image from './gambias-boern.jpg'

export default class Index extends React.Component {
  render () {
    return (
      <div className={cx('')}>
        <Helmet title={config.siteTitle} />

        {/* --- Hero --- */}
        <div className='flex justify-center items-center h6 pv5'>
          <div className={cx(s.box, 'bg-black white pa4')}>
            <h1 className='f1 fw6 mb2 mt0'>Gambias Børn</h1>
            <p className='measure f4 lh-copy mb4'>
              Vi vil igennem frivilligt arbejde, og efter princippet "hjælp til selvhjælp" forsøge
              at understøtte en udvikling, hvis formål er at fremme og højne uddannelse
              og dermed overlevelses muligheder, og gerne på et niveau der også i vore øjne er rimeligt.
            </p>

            <Link className='link fw6 ba pa3 dim yellow ttu tracked dib' to={prefixLink('/')}>Vores mission</Link>
          </div>
          <img src={image} alt='Gambias Børn' />
        </div>

        <div className='flex flex-row flex-wrap justify-center w-100'>
          <Box
            link='/'
            title='Støt formålet'
            content='Bliv medlem eller giv et tilskud til Gambias Børn'
            button='Støt' />

          <Box
            link='/'
            title='Menneskene bag'
            content='Mød ildsjælene bag Gambias Børn'
            button='Om os' />

          <Box
            link='/'
            title='Find os på Facebook'
            content='Bliv medlem eller giv et tilskud til Gambias Børn'
            button='Facebook' />

        </div>
      </div>
    )
  }
}

const Box = ({title, content, button, link}) => (
  <div className='bt bw2 flex flex-column flex-auto measure-narrow ma4 pt4 b--black'>
    <h2 className='mt0 mb2'>{title}</h2>
    <p className='flex-auto'>{content}</p>
    <Link className='db mb3 self-end bg-yellow link fw6 ba pa3 grow white ttu tracked dib' to={prefixLink(link)}>
      {button}
    </Link>
  </div>
)
