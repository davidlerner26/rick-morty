import { SET_SEARCH_FIELD } from "./constants";

const initialStateSearch = {
    searchField: ''
};

export const searchCharacters = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case SET_SEARCH_FIELD:
            return { ...state, searchField: action.payload }
        default:
            return state;
    }
}

const initialStateCharacters = {
    characters: [],
    isPending: true
};

export const requestCharacters = (state = initialStateCharacters, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return { ...state, isPending: true }
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return { ...state, characters: action.paylod, isPending: false }
        case REQUEST_ROBOTS_FAILED:
            return { ...state, error: action.payload }
        default:
            return state
    }
}