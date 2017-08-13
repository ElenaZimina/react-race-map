import React from 'react'
import PropTypes from 'prop-types'

export default class Output extends React.Component {

  static propTypes = {
    map: PropTypes.object.isRequired
  };

  render() {
    const {map} = this.props;
  
    return (
      <div className='output'>
        {
          map.ids.map(id => {
            
            return (
              <div />
            )
          })
        }
        
      </div>
    )
  }
}
