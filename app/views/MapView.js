import React from 'react'
import PropTypes from 'prop-types'
import connectWrapper from '../redux/utils/connect'
import actions from '../redux/rootActions'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

export class MapView extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  };

  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };
  
  position = [51.505, -0.09];

  render() {
    const { state, actions } = this.props;

    return (
      <div className='recipes-container'>
        <Map center={this.position} zoom={13}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={this.position}>
            <Popup>
              <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}

export default connectWrapper(actions, MapView)
