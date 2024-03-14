import logo from './logo.svg';
import './App.css';
import Form from './pages/Form';
import Login from './pages/Login';
import Register from './pages/Register';
import ViewEntries from './pages/ViewEntries';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
   
    <div className=" w-90vw h-auto flex items-center flex-col mt-10">
       <><Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/view' element={<ViewEntries/>}></Route>
      <Route path='/form' element={<Form/>}></Route>
    </Routes>
    </>
    </div>
  );
}

export default App;
