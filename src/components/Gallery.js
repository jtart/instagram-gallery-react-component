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
    fetch('https://api.instagram.com/v1/users/self/media/recent?access_token=30447931.dfc9281.be32eb3012564bc5b1ff7ab8b5df2a94', {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8080'
      },
      mode: 'no-cors'
    })
      .then(this.addToJson)
      .then(this.addDataToItems)
      .then(items => this.setState({items}))
  },

  addDataToItems (data) {
    return data;
    // return data.results.map(props => {
      // return <GalleryItem key={props.name} {...props} />
    // })
  },

  addToJson(data) {
    console.log(data)
    return data => response.json()
  },

  render() {
    return (
      <div >
        <h2>Instagram Gallery</h2>
        <p>'start'</p>
        <p>'end'</p>
      </div>
    )
  }
})

export default Gallery