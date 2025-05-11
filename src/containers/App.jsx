import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRequestCharacters, setSearchField } from '../actions';
import { CharacterList } from '../components/CharacterList/CharacterList';
import { SearchField } from '../components/SearchField/SearchField.JSX';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchCharacters.searchField,
    characters: state.requestCharacters.characters,
    isPending: state.requestCharacters.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTextChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestCharacters: () => dispatch(setRequestCharacters())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestCharacters();
  }

  render() {
    const { characters, searchField, onTextChange, isPending } = this.props;
    const filteredCharacters = characters?.filter(c => c.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <>
        {
          isPending ?
            <p>Loading...</p> :
            <>
              <SearchField onTextChange={onTextChange} />
              <ErrorBoundary>
                <CharacterList filteredCharacters={filteredCharacters} />
                {!characters.length && <p>No results found</p>}
              </ErrorBoundary>
            </>
        }
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)