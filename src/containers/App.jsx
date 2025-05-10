import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setSearchField } from '../actions';
import { Item } from '../components/Item/Item';
import { SearchField } from '../components/SearchField/SearchField.JSX';
import './App.css';

const mapStateToProps = () => {
  return {
    searchField: state.searchCharacters.searchField,
    characters: state.requestCharacters.characters,
    isPending: state.requestCharacters.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTextChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

const App = () => {

  useEffect(() => {
    this.props.onRequestRobots();
  }, []);

  const { characters, searchField, onTextChange, isPending } = this.props;

  const filteredCharacters = characters.filter(robot => {
    const result = characters?.filter(c => c.name.toLowerCase().includes(searchField.toLowerCase()));
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })

  return (
    <>
      {
        isPending ?
          <p>Loading...</p> :
          <>
            <SearchField onTextChange={onTextChange} />
            <div className='items'>
              {
                filteredCharacters?.map((character, i) => {
                  return (
                    <Item key={i} name={character.name} img={character.image} />
                  )
                })
              }
              {!characters.length && <p>No results found</p>}
            </div>
          </>
      }
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
