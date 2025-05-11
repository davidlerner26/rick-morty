import { Character } from '../Character/Character';
import './CharacterList.scss';

export const CharacterList = ({ filteredCharacters }) => {
    return (
        <div className='characters'>
            {
                filteredCharacters?.map((character, i) => {
                    return (
                        <Character key={i} name={character.name} img={character.image} />
                    )
                })
            }
        </div>
    );
}

