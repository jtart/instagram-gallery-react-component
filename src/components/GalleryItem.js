import React from 'react'

const GalleryItem = React.createClass({
  propTypes: {
    link: React.PropTypes.string.isRequired
  },

  render () {
    return (
      <li className='gallery_item'>
          <a className='gallery_item--link' href={this.props.link}>
            <img className='gallery_item--img' src={this.props.images.low_resolution.url}/>
          </a>
      </li>
    )
  }
})

export default GalleryItem
