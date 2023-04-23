import logo from './logo.svg';
import './App.css';
import Header from './componet/header/Header';
import Main from './main/Main';
import{Router,BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from './componet/signup/SignUp'
import Login from './componet/login/Login';
import Reminder from './pages/Reminder';
import Archiv from './pages/Archive'
import Trash from './pages/Trash';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Main/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reminder" element={<Reminder/>}/>
        <Route path="/archive" element={<Archiv/>}/>
        <Route path="/trash" element={<Trash/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
