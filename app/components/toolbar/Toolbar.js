import React from 'react'
import PropTypes from 'prop-types'
import Facility from './Facility'
import classnames from 'classnames'

export default class Toolbar extends React.Component {

  static propTypes = {
    tools: PropTypes.object.isRequired,
    onSetActiveTool: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);
    this.state = {
      top: 0,
      left: 0
    }
  }

  componentDidMount () {
    window.addEventListener('mousemove', this.onMouseMove)
    window.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount () {
    window.removeEventListener('mousemove', this.onMouseMove)
    window.removeEventListener('keydown', this.onKeyDown)
  }

  onMouseMove = (e) => {
    this.setState({
      top: e.clientY - 10,
      left: e.clientX + 8
    })
  };

  onKeyDown = (e) => {
    if (e.keyCode === 27) {
      this.props.onSetActiveTool(null)
    }
  };

  render() {
    const {tools} = this.props;
    const cursorStyle = {
      top: this.state.top + 'px',
      left: this.state.left + 'px'
    };

    const title = tools.activeId ? tools.entities[tools.activeId].title.toLowerCase() : '';

    const cursorClasses = classnames('cursor-icon', `icon-${title}`);

    return (
      <div className='toolbar'>
        <div className="toolbar__title">Click on the facility and set on the map</div>
        {
          tools.ids.map(id => {
            const tool = tools.entities[id];
            const isActive = id === tools.activeId;

            return (
              <Facility
                key={`facility-${id}`}
                tool={tool}
                isActive={isActive}
                onSetActiveTool={this.props.onSetActiveTool}
              />
            )
          })
        }

        {
          tools.activeId !== null &&
            <div className={cursorClasses} style={cursorStyle} />
        }
      </div>
    )
  }
}
