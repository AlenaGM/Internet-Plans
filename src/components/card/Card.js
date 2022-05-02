


const Card = (props) => {

    return(
        <div  className={props.isAction ? 'app__card card_action' : 'app__card'}>
            <div>Безлимитный {props.price}</div>
            <div><p className="up">руб</p><span>{props.price}</span>/мес</div>
            <div>до {props.speed} Мбит/сек</div>
            <div>{props.description}</div>
        </div>
    )

}

export default Card;