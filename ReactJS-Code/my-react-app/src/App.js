
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/itemListContainer'
import Counter from './components/itemCount'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings="Gracias" />
      <Counter initial="1" stock="10" />
    </div>
  );
}
export default App;
