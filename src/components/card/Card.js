import './card.css';


const Card = (props) => {

    return(
        <div className="app__card">
            <div className={props.darkColor}>Безлимитный {props.price}</div>
            <div className={props.lightColor}>руб<span>{props.price}</span>/мес</div>
            <div>до {props.speed} Мбит/сек</div>
            <div>{props.description}</div>
        </div>
    )

}

export default Card;