import React from 'react'
import PropTypes from 'prop-types'
import connectWrapper from '../redux/utils/connect'
import actions from '../redux/rootActions'
import { Header } from '../components/layout/Header'

export class AppLayout extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  };

  static propTypes = {
    history: PropTypes.object.isRequired,
    children: PropTypes.element,
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  componentWillMount() {
    // this.redirectIfNotLoggedIn();
  }

  componentDidUpdate() {
    // this.redirectIfNotLoggedIn();
  }

  render () {
    return (
      <div className='app-content'>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default connectWrapper(actions, AppLayout)

