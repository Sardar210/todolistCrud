import LogIn from './components/Login';
//import ApiService from './components/Services';
import DataList from './components/DataList';
import EditList from './components/EditList';
import GetUserData from './components/GetUserData';
import Navbar from './components/Navbar';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogIn/>}/>
        <Route path='/datalist' element={<DataList/>}/>
        <Route path='/home' element={<Navbar/>}/>
        <Route path='/getuserdata' element={<GetUserData/>}/>
        <Route path='/editlist/:id' element = {<EditList/>}/>
        </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
