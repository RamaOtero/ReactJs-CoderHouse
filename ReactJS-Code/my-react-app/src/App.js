
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer';
import { BrowserRouter, Routes, Rout, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greetings="| Overzise" />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
