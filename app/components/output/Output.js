import React from 'react'
import PropTypes from 'prop-types'

export default class Output extends React.Component {

  static propTypes = {
    map: PropTypes.object.isRequired
  };

  constructor (props) {
    super(props);
    this.state = {
      string: ''
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.map.entities !== nextProps.map.entities) {
      const arr = [];
      Object.keys(nextProps.map.entities).forEach(id => {
        const item = nextProps.map.entities[id];
        const data = {
          title: item.title,
          position: item.position,
          text: item.text || ''
        }
        arr.push(data);
      })

      const string = JSON.stringify(arr, null, 2);
      this.setState({string: string});
    }
  }

  render() {
    const {string} = this.state;

    return (
      <div className='output'>
        {
          <pre>{string}</pre>
        }

      </div>
    )
  }
}
