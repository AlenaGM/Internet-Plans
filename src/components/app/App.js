import './app.css';
import Card from '../card/Card';
import plans from '../../resources/data.json';

function App() {
  return (
    <div className="app">
      {
        plans.map((plan) =>
        <Card
        price={plan.price}
        speed={plan.speed}
        description={plan.description}
        darkColor={plan.darkColor}
        lightColor={plan.lightColor}/>
        )
      }
    </div>
  );
}

export default App;