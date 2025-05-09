import './SearchField.scss';

export const SearchField = ({ onTextChange }) => {
    return (
        <input placeholder='Search Rick and Morty characters' type='text' onChange={onTextChange} />
    );
}