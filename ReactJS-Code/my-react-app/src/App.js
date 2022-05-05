
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/NavBar'
import itemList from './components/itemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <itemList greetings="Hola"></itemList>
    </div>
  );
}
export default App;
