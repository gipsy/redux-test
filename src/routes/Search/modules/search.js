export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function endpointUpdate(endpoint) {
    return {
        type: 'ENDPOINT_UPDATE',
        endpoint
    }
}

export function countryUpdate(country) {
    return {
        type: 'COUNTRY_UPDATE',
        country
    }
}

export function itemsFetchData(endpoint, country) {
    let url = `http://worldcup.sfg.io/${endpoint}/${country ? 'country?fifa_code=' + country : ''}`

    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
          .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText)
            }

            dispatch(itemsIsLoading(false))

            return response
          })
          .then((response) => response.json())
          .then((items) => dispatch(itemsFetchDataSuccess(items)))
          .catch(() => dispatch(itemsHasErrored(true)))
    };
}
