import { useState } from 'react';
import './app.scss';
import Card from '../card/Card';
import plans from '../../resources/data.json';

function App() {

  const [plan, setPlan] = useState();

  const handleClick = (newPlan) => {
    if (newPlan === plan) {
      return setPlan(null);
    }
    return setPlan(newPlan);
  }

  return (
    <div className="app">
      <div className="app__container">
        {
          plans.map((item) => {
          return (
            <Card
              key={item.price}
              isSelected={item.price === plan}
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