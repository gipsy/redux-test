import { connect } from 'react-redux'

import Search from '../components/Search'

const mapDispatchToProps = {
  doubleAsync
}

const mapStateToProps = (state) => ({
  search : state.search
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
