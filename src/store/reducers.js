import { combineReducers } from 'redux'
import locationReducer from './location'
import progress from 'react-redux-progress/reducer'
import { items, itemsHasErrored, itemsIsLoading } from './items'

export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        progress,
        items,
        itemsHasErrored,
        itemsIsLoading,
        location: locationReducer,
        ...asyncReducers
    })
}

export const injectReducer = (store, { key, reducer }) => {
    if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

    store.asyncReducers[key] = reducer
    store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
