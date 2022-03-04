

const Card = (props) => {
    return ( 
        <div className="card">
        <img src={`images/${props.item.picture}`} alt={props.item.title} className='card-image'></img>
            <div className='card-content'>
            <p className='country'>{props.item.country}</p>
            <p className="const">View on google maps</p>
            <h1 className='place'>{props.item.title}</h1>
            <h3 className='date'>{props.item.date}</h3>
            <p className='card-des'>{props.item.description}</p>
            </div>
        </div>
     );
}
 
export default Card;