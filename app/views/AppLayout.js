import React from 'react'
import PropTypes from 'prop-types'
import connectWrapper from '../redux/utils/connect'
import actions from '../redux/rootActions'
import { Header } from '../components/layout/Header'
import MapContainer from '../components/MapContainer'
import Toolbar from '../components/toolbar/Toolbar'

import '../styles/main.scss'

export class AppLayout extends React.Component {

  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render () {
    const {state, actions} = this.props;
    
    return (
      <div className='page-container'>
        <Header />
  
        <div className='page-content'>
        
          <MapContainer
            map={state.map}
            activeTool={state.tools.entities[state.tools.activeId]}
            onAddMarker={actions.addMarker}
          />
          
          <Toolbar
            tools={state.tools}
            onSetActiveTool={actions.setActiveTool}
          />
          
        </div>
      </div>
    )
  }
}

export default connectWrapper(actions, AppLayout)

