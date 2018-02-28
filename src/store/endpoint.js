export function endpoint(state = 'matches', action) {
    switch (action.type) {
        case 'ENDPOINT_UPDATE':
            return action.endpoint

        default:
            return state
    }
}
