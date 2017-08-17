import React from 'react'
import PropTypes from 'prop-types'

export default class Output extends React.Component {

  static propTypes = {
    map: PropTypes.object.isRequired
  };

  constructor (props) {
    super(props);
    this.state = {
      string: this.createOutput(props)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.map.entities !== nextProps.map.entities) {
      const string = this.createOutput(nextProps);
      this.setState({string: string});
    }
  }
  
  createOutput = (props) => {
    const arr = [];
    Object.keys(props.map.entities).forEach(id => {
      const item = props.map.entities[id];
      const data = {
        title: item.title,
        position: item.position,
        text: item.text || ''
      };
      arr.push(data);
    });
  
    return JSON.stringify(arr, null, 2);
  };

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
