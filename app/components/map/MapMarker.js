import React from 'react'
import PropTypes from 'prop-types'
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import finishIcon from '../../images/finish.svg'
import startIcon from '../../images/start.svg'
import waterIcon from '../../images/water.svg'
import mealsIcon from '../../images/meals.svg'
import medicineIcon from '../../images/medicine.svg'

export default class MapMarker extends React.Component {

  static propTypes = {
    marker: PropTypes.object.isRequired,
    onSavePopupText: PropTypes.func.isRequired,
    activeTool: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      icons: {
        finish: finishIcon,
        start: startIcon,
        water: waterIcon,
        meals: mealsIcon,
        medicine: medicineIcon
      },
      value: ''
    }
  }
  
  onChangeInput = (e) => {
    this.setState({
      value: e.target.value
    })
  };
  
  onSubmit = () => {
    this.props.onSavePopupText(this.props.marker.id, this.state.value)
  }
  
  onReject = () => {
    this.props.onSavePopupText(this.props.marker.id, '')
  };

  render() {
    const {marker} = this.props;

    return (
      <Marker
        position={marker.position}
        icon={L.icon({
          iconUrl: this.state.icons[marker.title],
          iconSize: [30, 30]
        })}
      >
        <Popup minHeight='100'>
          <div>
            {marker.isEditText &&
              <div className='popup-content popup-content--edit'>
                Would you like to add some text to this point?
                <input
                  className='popup-input'
                  value={this.state.value}
                  onChange={this.onChangeInput}
                />
                <button className='popup-submit-btn' onClick={this.onSubmit}>
                  Submit
                </button>
              </div>
            }
            {!marker.isEditText &&
              <span>{marker.text}</span>
            }
          </div>
        </Popup>
      </Marker>
    )
  }
}
