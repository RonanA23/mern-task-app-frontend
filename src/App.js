
import { useSelector } from 'react-redux';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Navbar from './components/Navbar';
import Workouts from './components/Workouts';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  const source=useSelector((state)=> state.users)
  const thing =source?.value?.token

  return (
    <div className="bg-gray-500 h-screen">
      <Router>
      <Navbar/>
      <Routes>
    
        <Route path='/' element={thing ? <Workouts/>:<Signup/>}/>
        <Route path='/signup' element={!thing ? <Signup/>:<Workouts/>}/>
        <Route path='/login' element={!thing ? <Login/>:<Workouts/>}/>
        
      
      </Routes>

      </Router>
    
    
    </div>
  );
}

export default App;
