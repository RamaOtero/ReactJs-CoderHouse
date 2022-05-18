
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings="Gracias" />
      <ItemDetailContainer />
    </div>
  );
}
export default App;
