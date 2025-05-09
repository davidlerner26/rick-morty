import './Item.scss';

export const Item = ({ img, name }) => {
    return (
        <div className='item'>
            <img src={img} />
            <p>{name}</p>
        </div>
    );
}