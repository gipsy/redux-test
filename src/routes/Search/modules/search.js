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
    let url = ''
    switch (endpoint) {
      case 'matches_all':
          url = 'http://worldcup.sfg.io/matches'

      case 'matches_today':
          url = 'http://worldcup.sfg.io/matches/today'

      case 'matches_current':
          url = 'http://worldcup.sfg.io/matches/current'

      case 'teams':
          url = 'http://worldcup.sfg.io/teams'

      case 'teams_group':
          url = 'http://worldcup.sfg.io/group_results'

      case 'teams_results':
          url = 'http://worldcup.sfg.io/teams/results'

      default:
          url = 'http://worldcup.sfg.io/matches'
    }

    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
          .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            dispatch(itemsIsLoading(false));

            return response;
          })
          .then((response) => response.json())
          .then((items) => dispatch(itemsFetchDataSuccess(items)))
          .catch(() => dispatch(itemsHasErrored(true)));
    };
}
