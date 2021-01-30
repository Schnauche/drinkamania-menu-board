import logo from '../logo.svg';
import MenuHeader from './MenuHeader';
import MenuBoard from './MenuBoard';
import '../stylesheets/App.css';

function App() {

  return (
    <div className="App">     
      <MenuHeader />
      <MenuBoard columns={3} />
    </div>
  );
}

export default App;
