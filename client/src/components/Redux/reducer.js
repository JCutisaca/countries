const initialState = {
    allCountries: [],
    countriesCopy: [],
    countryDetail: [],
    activities: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'GET_ALL_COUNTRIES':
            return {
                ...state,
                allCountries: payload.sort((a, b) => a.name.localeCompare(b.name)),
                countriesCopy: payload.sort((a, b) => a.name.localeCompare(b.name))
            };
        case 'GET_COUNTRIES_BY_NAME':
            return {
                ...state,
                allCountries: payload
            }
        case 'GET_COUNTRY_DETAIL':
            return {
                ...state,
                countryDetail: payload
            }
        case 'ORDER':
            const copyAllCountries = [...state.allCountries]
            return {
                ...state,
                allCountries:
                    payload === 'A' ?
                        copyAllCountries.sort((a, b) => a.name.localeCompare(b.name))
                        : payload === 'B'
                            ? copyAllCountries.sort((a, b) => b.name.localeCompare(a.name))
                            : payload === 'AP'
                                ? copyAllCountries.sort((a, b) => b.population - a.population)
                                : copyAllCountries.sort((a, b) => a.population - b.population)
            }
        case 'FILTER':
            return {
                ...state,
                allCountries:
                    payload === 'All Countries'
                        ? [...state.countriesCopy]
                        : state.countriesCopy.filter(country => country.continents[0] === payload)
            }
        default:
            return { ...state }
    }
}

export default reducer;