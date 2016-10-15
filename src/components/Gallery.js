import React from 'react'
import fetch from 'isomorphic-fetch'

import GalleryItem from './GalleryItem'

const Gallery = React.createClass({
  propTypes: {
    data: React.PropTypes.object
  },

  getInitialState() {
    return {
      items: this.props.data ? this.addDataToItems(this.props.data) : ''
    }
  },

  componentDidMount() {
    fetch('../../data/instagram_data.json')
      .then(resp => resp.json())
      .then(this.addDataToGalleryItems)
      .then(items => this.setState({ items }))
      .catch(e => console.log("SOMETHING WENT WRONG. PANIC."))
  },

  addDataToGalleryItems (data) {
    return data.data.map(props => {
      return <GalleryItem key={props.id} {...props} />
    })
  },

  render() {
    return (
      <ul className='gallery--list'>
        {this.state.items}
      </ul>
    )
  }
})

export default Gallery
