
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import NavBar2 from './components/navBar2';
import Counter from './components/itemCount2';
import ItemListContainer from './components/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer';
import { BrowserRouter, Routes, Rout, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar2 />
        <Routes>
          <Route path='/' element={<ItemListContainer greetings="| New Arrivals" />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
