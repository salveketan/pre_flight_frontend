import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './Component/HomePage';
import InputData from './Component/InputData';
import Navbar from './Component/Navbar';
import UserDetail from './Component/UserDetail';
import UserList from './Component/UserList';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/inputdata' element={<InputData />}></Route>
        <Route path='/userlist' element={<UserList />}></Route>
        <Route path='/userdetail/:id' element={<UserDetail />}></Route>

      </Routes>

    </div>
  );
}

export default App;
