const Card = ({ price, speed, description, isSelected, onClick }) => {
  const handleClick = () => {
    onClick(price);
  };

  return (
    <div
      className={isSelected ? "app__card card_action" : "app__card"}
      onClick={handleClick}
    >
      <div>Illimité {price}</div>
      <div>
        <p className="up">€</p>
        <span>{price}</span>/month
      </div>
      <div>up to {speed} Mbits/s </div>
      <div>{description}</div>
    </div>
  );
};

export default Card;
