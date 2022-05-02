import './app.css';
import Card from '../card/Card';
import plans from '../../resources/data.json';

function App() {
  return (
    <div className="app">
      <div className="app__container">
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
    </div>
  );
}

export default App;