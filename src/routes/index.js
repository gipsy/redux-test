import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import SearchRoute from './Search'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    SearchRoute(store)
  ]
})

export default createRoutes
