import './Character.scss';

export const Character = ({ img, name }) => {
    return (
        <div className='item'>
            <img src={img} />
            <p>{name}</p>
        </div>
    );
}