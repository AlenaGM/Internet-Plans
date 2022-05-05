import { useState } from "react";


const Card = (props) => {
    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
    }

    return(
        <div  className={pressed ? 'app__card card_action' : 'app__card'} onClick={handleChange}>
            <div>Безлимитный {props.price}</div>
            <div><p className="up">руб</p><span>{props.price}</span>/мес</div>
            <div>до {props.speed} Мбит/сек</div>
            <div>{props.description}</div>
        </div>
    )

}

export default Card;