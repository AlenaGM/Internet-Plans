


const Card = (props) => {

    return(
        <>
        {props.isAction ?
            <div  className="app__card card_action">
                <div>Безлимитный {props.price}</div>
                <div><p className="up">руб</p><span>{props.price}</span>/мес</div>
                <div>до {props.speed} Мбит/сек</div>
                <div>{props.description}</div>
            </div>
            :
            <div  className="app__card">
                <div>Безлимитный {props.price}</div>
                <div><p className="up">руб</p><span>{props.price}</span>/мес</div>
                <div>до {props.speed} Мбит/сек</div>
                <div>{props.description}</div>
            </div>
        }
        </>
    )

}

export default Card;