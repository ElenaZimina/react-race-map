import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class Facility extends React.Component {

  static propTypes = {
    tool: PropTypes.object.isRequired,
    isActive: PropTypes.bool,
    onSetActiveTool: PropTypes.func.isRequired
  };
  
  onClick = () => {
    const {isActive, tool} = this.props;
    const id = isActive ? null : tool.id;
    this.props.onSetActiveTool(id)
  };

  render() {
    const {isActive, tool} = this.props;
    
    const facilityClasses = classnames('tool-icon__container', {
      'tool-icon__container--active': isActive
    });
    
    return (
      <div className='facility' onClick={this.onClick}>
        <div className={facilityClasses}>
          <div className={`tool-icon icon-${tool.title}`} />
        </div>
        <div className='tool-title'>{tool.title}</div>
      </div>
    )
  }
}
