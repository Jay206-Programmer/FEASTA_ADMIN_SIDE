import React,{useState} from 'react';
import axios from 'axios';
import AdminPanel from './AdminPanel';
import App from './App';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';


function Login(props) {

  const [login, setlogin] = useState("");

  const [data, setdata] = useState({
    email_id:'',
    password:''
});



  console.log(props.history);

  useEffect(() => {
    var locallog = localStorage.getItem("login")?JSON.parse(localStorage.getItem("login")):{login:false};
    console.log(locallog.login);
    setlogin(localStorage.getItem("login"));
    if(locallog.login){
      props.history.push('/');
    }
  }, [login])

  const onEmailChange =(e)=>{setdata({...data,email_id:e.target.value})}

  const onPasswordChange = (e)=>{setdata({...data,password:e.target.value})}

  const itemSubmit = async (e)=>{
    e.preventDefault();
    
    setlogin(true);
    console.log(data);
  
  
  if(data.email_id == "" || data.password ==""){
    alert("Username or Password can't be blank");
  }
  
  else{
    console.log(data);
   
    await axios.post("https://feasta-postgres.herokuapp.com/auth/admin_login/",data).then((result) => {
        console.log(result.data);
        if(result.data.response_msg === "Login Successful"){
          var locallogin = JSON.stringify({login:true})
          var admin_id = JSON.stringify({admin_id:result.data.admin_id})
          var user_name = JSON.stringify({user_name: result.data.user_name})
          setlogin(true);
          localStorage.setItem("login",locallogin);
          localStorage.setItem("admin_id",admin_id);
          localStorage.setItem("user_name",user_name)
        } else{
          var locallogin = JSON.stringify({login:false})
          localStorage.setItem("login",locallogin);
          alert(result.data.response_msg);
        }
    }).catch((err) => {
        console.log(err);
    });
  }
  
  }

    return (
        <div>
            <div className="container">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user" onSubmit={itemSubmit}>
                        <div className="form-group">
                          <input type="email" className="form-control form-control-user" id="exampleInputEmail"  onChange={onEmailChange} aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control form-control-user" id="exampleInputPassword"  onChange={onPasswordChange} placeholder="Password" />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                            <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                          </div>
                        </div>
                        <input type="submit" className="btn btn-primary btn-user btn-block" value="Login" />
                        <hr />
                        
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                      </div>
                      <div className="text-center">
                        <Link className="small" to="/register">Create an Account!</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Login