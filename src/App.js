import './App.css';
import Item from './components/Item/Item';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
    <NavBar/>
    <ItemListContainer/>
    </div>
  )
}

export default App;
