import MenuHeader from './MenuHeader';
import MenuBoard from './MenuBoard';
import menuData from '../testData/data';
import '../stylesheets/App.css';

function App() {
  return (
    <div className="App">     
      <MenuHeader />
      <MenuBoard MenuData={menuData} />
    </div>
  );
}

export default App;
