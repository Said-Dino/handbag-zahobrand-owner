import { useState, useContext } from 'react';
import './App.css';
import Home from './Home';
import HomeControler from './HomeControle';
import OrderDetails from './Orderdetails';
import {HashRouter, Routes, Route} from 'react-router-dom';
import { contextOpenCreate } from './Context/openContextCreate';
import Accueil from './Accueil';
import Accessoires from './Accessoires';
import Form from './Form';
function App() {
  const [valueLog,setValueLog] = useState({email:"exemple",password:"*******"});
  const [usr,setUsr] = useState(null);
  const [open, setOpen] = useState(false);
  const [ipen,setIpen] = useState(false);
  const [auth,setAuth] = useState(false);

  return (
    
    <div className="App">
      
      <contextOpenCreate.Provider value={{valueLog,setValueLog,open,setOpen,ipen,setIpen,usr,setUsr,auth,setAuth}}>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/form' element={<Form />} />
        <Route path='/client' element={<Home />}/>
        <Route path='/ctrl' element={<HomeControler />}/>
        <Route path="/orderdetails" element={<OrderDetails  />}/>
        {/* <Route path="/access" element={<Accessoires />}/> */}
      </Routes>
    </HashRouter>
    </contextOpenCreate.Provider>
    </div>   
);
}

export default App;
