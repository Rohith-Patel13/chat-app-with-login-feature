import { Routes,Route } from 'react-router-dom';
import Login from './Components/Login/index';
import NotFound from './Components/NotFound/index';
import './App.css';

const App = ()=>{
  return(
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default App;
