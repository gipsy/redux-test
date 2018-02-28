export function endpoint(state = 'matches_all', action) {
    switch (action.type) {
        case 'ENDPOINT_UPDATE':
            return action.endpoint

        default:
            return state
    }
}
