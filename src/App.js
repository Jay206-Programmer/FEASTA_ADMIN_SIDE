import AdminPanel from './AdminPanel';
import React,{useState,useEffect} from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import axios from 'axios';
import { Route, Switch } from 'react-router';


function App() {

  const [login, setlogin] = useState("");

  useEffect(() => {
    var locallog = localStorage.getItem("login")?JSON.parse(localStorage.getItem("login")):{login:false};
    console.log(locallog.login);
    setlogin(localStorage.getItem("login"));
  }, [login])

  
 //login ? <AdminPanel/> : <Login onEmailChange={onEmailChange} onPasswordChange={onPasswordChange} itemSubmit={itemSubmit}/>

  return (
   <div>
      <Switch>
         <Route path="/login" component={Login}></Route>
         
         <Route exact path="/" component={AdminPanel}></Route>
         
         <Route exact path="/register" component={Register}></Route>
      </Switch>  
   </div>
  );
}

export default App;
