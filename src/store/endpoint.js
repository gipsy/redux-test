export function endpoint(state = '', action) {
    switch (action.type) {
        case 'ENDPOINT_UPDATE':
            return action.endpoint

        default:
            return state
    }
}
