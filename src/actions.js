import { REQUEST_CHARACTERS_ERROR, REQUEST_CHARACTERS_PENDING, REQUEST_CHARACTERS_SUCCESS, SET_SEARCH_FIELD } from "./constants";

export const setSearchField = (text) => ({ type: SET_SEARCH_FIELD, payload: text });

export const requestCharacters = (dispatch) => {
    dispatch({ type: REQUEST_CHARACTERS_PENDING })
    fetch('https://rickandmortyapi.com/api')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_CHARACTERS_SUCCESS, payload: data }))
        .then(error => dispatch({ type: REQUEST_CHARACTERS_ERROR, payload: error }))
}