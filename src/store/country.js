export function country(state = '', action) {
    switch (action.type) {
        case 'COUNTRY_UPDATE':
            return action.country

        default:
            return state
    }
}
