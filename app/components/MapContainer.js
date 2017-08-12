import React from 'react'
import PropTypes from 'prop-types'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

export default class MapContainer extends React.Component {

  static propTypes = {
    map: PropTypes.object.isRequired,
    onAddMarker: PropTypes.func.isRequired,
    activeTool: PropTypes.object
  };
  
  position = [51.505, -0.09];
  
  onClick = (e) => {
    if (this.props.activeTool) {
      console.log(e.latlng)
    }
  };

  render() {
    return (
      <div className='map-container'>
        <Map className='map' center={this.position} zoom={16} onClick={this.onClick}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={this.position}>
            <Popup>
              <span>A pretty CSS3 popup.<br />Easily customizable.</span>
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}
