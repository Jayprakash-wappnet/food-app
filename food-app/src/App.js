import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className='App'>
   <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path="/" element={<SearchBar/>}></Route>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
