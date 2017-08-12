import {actions as mapActions} from './modules/map'
import {actions as toolsActions} from './modules/tools'

export default Object.assign(
  mapActions,
  toolsActions
)
