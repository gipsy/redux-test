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

export function itemsFetchData(endpoint) {
    let url

    endpoint === 'matches_all'          ? url = 'http://worldcup.sfg.io/matches'
    : endpoint === 'matches_today'      ? url = 'http://worldcup.sfg.io/matches/today'
    : endpoint === 'matches_current'    ? url = 'http://worldcup.sfg.io/matches/current'
    : endpoint === 'teams_result'       ? url = 'http://worldcup.sfg.io/teams'
    : endpoint === 'teams_group_result' ? url = 'http://worldcup.sfg.io/group_results'
    : endpoint === 'teams_results'      ? url = 'http://worldcup.sfg.io/teams/results'
                                        : endpoint

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
