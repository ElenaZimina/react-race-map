import React from 'react'
import PropTypes from 'prop-types'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import finishIcon from '../images/finish.svg'
export default class MapContainer extends React.Component {

  static propTypes = {
    map: PropTypes.object.isRequired,
    onSetMarker: PropTypes.func.isRequired,
    activeTool: PropTypes.object
  };

  position = [48.88713, 2.3397];

  onClick = (e) => {
    if (this.props.activeTool) {
      const object = {
        position: e.latlng,
        icon: '../'
      };
      this.props.onSetMarker(object)
    }
  };

  getIcon = () => {
    require('../images/finish.svg')
  };

  render() {
    const {map} = this.props;

    return (
      <div className='map-container'>
        <Map className='map' center={this.position} zoom={16} onClick={this.onClick}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          {map.ids.map(id => {
            const marker = map.entities[id];

            return (
              <Marker
                position={marker.position}
                key={`marker-${id}`}
                icon={L.icon({iconUrl: finishIcon})}
              >
                <Popup>
                  <span>{marker.text}</span>
                </Popup>
              </Marker>
            )
          })}

        </Map>
      </div>
    )
  }
}
