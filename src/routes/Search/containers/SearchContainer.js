import { connect } from 'react-redux'

import { itemsFetchData } from '../modules/search'
import SearchResults from '../components/Search'

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
