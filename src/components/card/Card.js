import { useState } from 'react';


const Card = ({price,speed,description,isSelected,onClick}) => {

    //const [tag, setTag] = useState(false);

    const handleClick = () => {
        //setTag(!tag);
        onClick(price);
    }

    return(
        <div  className={isSelected? 'app__card card_action' : 'app__card'} onClick={handleClick}>
            <div>Безлимитный {price}</div>
            <div><p className="up">руб</p><span>{price}</span>/мес</div>
            <div>до {speed} Мбит/сек</div>
            <div>{description}</div>
        </div>
    )

}

export default Card;

