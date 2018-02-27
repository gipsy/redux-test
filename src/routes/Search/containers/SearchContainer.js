import { connect } from 'react-redux'

import { itemsFetchData } from '../modules/search'
import SearchResults from '../components/Search'

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (endpoint) => dispatch(itemsFetchData(endpoint)),
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        endpoint: 'test'
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
