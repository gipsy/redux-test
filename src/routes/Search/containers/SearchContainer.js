import { connect } from 'react-redux'

import { itemsFetchData, endpointUpdate } from '../modules/search'
import Search from '../components/Search'

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (endpoint) => dispatch(itemsFetchData(endpoint)),
        endpointState: (endpoint) => dispatch(endpointUpdate(endpoint))
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        endpoint: state.endpoint,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
