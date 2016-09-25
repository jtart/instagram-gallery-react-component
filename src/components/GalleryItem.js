import React from 'react'

const GalleryItem = React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
  },

  render () {
    return (
      <div>
        <a href={this.props.url}>
          <img src={this.props.image}/>
        </a>
      </div>
    )
  }
})

export default GalleryItem