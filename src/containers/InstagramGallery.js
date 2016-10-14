import React from 'react'

import Gallery from '../components/Gallery'

const InstagramGallery = React.createClass({
  propTypes: {
    data: React.PropTypes.object
  },

  render () {
    const data = this.props.data || {}

    return (
      <div>
      	<Gallery data={data.items} />
      </div>
    )
  }
})

export default InstagramGallery