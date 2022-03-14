import './App.css';
import { robots } from './robots';
import CardList from './cardList'

function App() {
  return (
    <div className="App">
      <CardList robots = {robots}/>
    </div>
  );
}

export default App;
