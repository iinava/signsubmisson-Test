import logo from './logo.svg';
import './App.css';
import Form from './pages/Form';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className=" w-90vw h-auto flex items-center flex-col mt-10">
      {/* <Form/> */}
      <Login/>
      {/* <Register/> */}
    </div>
  );
}

export default App;
