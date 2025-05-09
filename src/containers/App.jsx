import { useEffect, useState } from 'react'
import './App.css'
import { Item } from '../components/Item/Item';
import { SearchField } from '../components/SearchField/SearchField.JSX';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [initialCharacters, setInitialCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://rickandmortyapi.com/api');
      const apis = await response.json();
      const charactersApi = await fetch(apis.characters);
      const charactersResult = await charactersApi.json();
      const result = charactersResult.results;
      setCharacters(result);
      setInitialCharacters(result);
      setLoading(false);
    }
    fetchData();
  }, []);

  function onTextChange(input) {
    if (input.target.value?.length >= 3) {
      const result = initialCharacters?.filter(c => c.name.toLowerCase().includes(input.target.value.toLowerCase()));
      setCharacters(result);
    } else {
      setCharacters(initialCharacters);
    }
  }

  return (
    <>
      {
        loading ?
          <p>Loading</p> :
          (
            <>
              <SearchField onTextChange={onTextChange} />
              <div className='items'>
                {
                  characters?.map((character, i) => {
                    return (
                      <Item key={i} name={character.name} img={character.image} />
                    )
                  })
                }
                {!characters.length && <p>No results found</p>}
              </div>
            </>
          )
      }
    </>
  )
}

export default App
