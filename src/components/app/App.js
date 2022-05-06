import { useState } from 'react';
import './app.scss';
import Card from '../card/Card';
import plans from '../../resources/data.json';

function App() {

  const [plan, setPlan] = useState();

  const handleClick = (plan) =>{
    setPlan(plan);
  }

  return (
    <div className="app">
      <div className="app__container">
        {
          plans.map((item) => {
          return (
            <Card
            key={item.id}
            isSelected={item.id === plan}
            onClick={handleClick}
            price={item.price}
            speed={item.speed}
            description={item.description}
            />
          );

        })}

      </div>
    </div>
  );
}

export default App;