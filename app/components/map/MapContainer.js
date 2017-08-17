import React from 'react'
import PropTypes from 'prop-types'
import { Map, TileLayer } from 'react-leaflet'
import MapMarker from './MapMarker'
export default class MapContainer extends React.Component {

  static propTypes = {
    map: PropTypes.object.isRequired,
    onSetMarker: PropTypes.func.isRequired,
    onSavePopupText: PropTypes.func.isRequired,
    onDeleteMarker: PropTypes.func.isRequired,
    onChangeMarkerPosition: PropTypes.func.isRequired,
    activeTool: PropTypes.object
  };

  position = [48.88713, 2.3397];

  onClick = (e) => {
    const {activeTool} = this.props;
    if (activeTool) {
      const object = {
        position: e.latlng,
        icon: '../',
        title: activeTool.title,
        tool: activeTool.id,
        isEditText: true
      };
      this.props.onSetMarker(object)
    }
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
              <MapMarker
                marker={marker}
                key={`marker-${id}`}
                onSavePopupText={this.props.onSavePopupText}
                onDeleteMarker={this.props.onDeleteMarker}
                onChangeMarkerPosition={this.props.onChangeMarkerPosition}
              />
            )
          })}

        </Map>
      </div>
    )
  }
}
