import React from 'react'
import PropTypes from 'prop-types'
import { Marker, Popup } from 'react-leaflet'
import { Button } from '../layout/Button'
import L from 'leaflet'
import finishIcon from '../../images/finish.svg'
import startIcon from '../../images/start.svg'
import waterIcon from '../../images/water.svg'
import mealsIcon from '../../images/meals.svg'
import medicineIcon from '../../images/medicine.svg'
import pencilIcon from '../../images/pencil.svg'

export default class MapMarker extends React.Component {

  static propTypes = {
    marker: PropTypes.object.isRequired,
    onSavePopupText: PropTypes.func.isRequired,
    onDeleteMarker: PropTypes.func.isRequired,
    onChangeMarkerPosition: PropTypes.func.isRequired,
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
      value: '',
      isEdit: true
    }
  }

  onChangeInput = (e) => {
    this.setState({
      value: e.target.value
    })
  };

  onSubmit = () => {
    this.props.onSavePopupText(this.props.marker.id, this.state.value);
    this.setState({
      isEdit: false
    })
  };

  onDelete = () => {
    this.props.onDeleteMarker(this.props.marker.id)
  };

  onChangePosition = () => {
    const {marker} = this.props;
    this.props.onChangeMarkerPosition(marker.id, marker.tool)
  };

  onEdit = () => {
    this.setState({
      isEdit: true
    })
  };

  render() {
    const {marker} = this.props;
    const {isEdit} = this.state;

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
            {isEdit &&
              <div>
                <div className='popup-content popup-content--edit'>
                  Add some text to this point:
                  <input
                    className='popup-input'
                    value={this.state.value}
                    onChange={this.onChangeInput}
                  />
                  <Button onClick={this.onSubmit} text='Submit' type='submit' />
                </div>

                <div className='popup__bottom'>
                  <p>Replace or delete marker:</p>
                  <Button text='Replace' type='replace' onClick={this.onChangePosition} />
                  <Button text='Delete' type='delete' onClick={this.onDelete} />
                </div>
              </div>
            }
            {!isEdit &&
              <div className='popup__main'>
                <span className='popup__main-text'>{marker.text}</span>
                <Button icon={pencilIcon} type='edit' onClick={this.onEdit} />
              </div>
            }
          </div>
        </Popup>
      </Marker>
    )
  }
}
