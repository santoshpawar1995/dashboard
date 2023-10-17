import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/login";
import Dashboard from "./component/Dashboard";
import Analytics from "./component/Analytic/Analytics";
import Admin from "./component/Admin/Admin";
import Business from "./component/Bussiness-spot/Bussiness";
import CreateData from "./component/Analytic/Tablejsn/CreateData";
import Edit from "./component/Analytic/Tablejsn/Edit";
import Putmethod from "./component/Analytic/Tablejsn/Putmethod";


function App() {
  return (
    <div className="App">

     <Dashboard/>
     
      <Router>
        <Routes>
      
          <Route path="login" element={<Login />} exact />
          
        
          <Route path="analytics" element={<Analytics/>} exact />
          <Route path="/" element={<Admin/>} exact />
          <Route path="/business" element={<Business/>} exact />
          <Route path="/create" element={<CreateData/>} exact />
          {/* <Route path="/putdata/:dataid" element={<Putmethod/>} exact /> */}
          <Route path="/edit/:dataid" element={<Edit/>} exact />

          
         
        </Routes>
      </Router> 

     

    </div>
  );
}

export default App;
