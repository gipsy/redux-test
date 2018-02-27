// ------------------------------------
// Constants
// ------------------------------------



// ------------------------------------
// Actions
// ------------------------------------
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

export function itemsFetchData(url) {
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

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : SEARCH_DOUBLE_ASYNC,
          payload : getState().search
        })
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  search,
  doubleAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function searchReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
