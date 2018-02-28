import { connect } from 'react-redux'

import { itemsFetchData, endpointUpdate, countryUpdate } from '../modules/search'
import Search from '../components/Search'

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (endpoint) => dispatch(itemsFetchData(endpoint)),
        endpointUpdate: (endpoint) => dispatch(endpointUpdate(endpoint)),
        countryUpdate: (country) => dispatch(countryUpdate(country))
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        endpoint: state.endpoint,
        country: state.country,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
