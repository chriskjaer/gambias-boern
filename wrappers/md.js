import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object
    }
  },
  render () {
    const post = this.props.route.page.data
    return (
      <div className=''>
        <Helmet title={`${config.siteTitle} | ${post.title}`} />
        <h1 className='f1 measure'>{post.title}</h1>
        <div className='' dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    )
  }
})
