import './card.css';


const Card = (props) => {

    return(
        <div className="appCard">
            <div className={props.darkColor}>Безлимитный {props.price}</div>
            <div className={props.lightColor}>руб<span className="card-price">{props.price}</span>/мес</div>
            <div className="card-speed">до {props.speed} Мбит/сек</div>
            <div className="card-description">{props.description}</div>
        </div>
    )

}

export default Card;