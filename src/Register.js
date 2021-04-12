import React,{useState} from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

function Register(props) {

    const [data, setdata] = useState({
        first_name:'',
        last_name:'',
        email_id:'',
        canteen_name:'',
        password:'',
        phone_number:'',
        repeat_password:''
    });

      const itemSubmit = async (e)=>{
        e.preventDefault();
        if(data.password == "" || data.last_name == "" || data.phone_number=="" || data.first_name =="" ||data.canteen_name ==" "){
          alert("None of the fields should be blank");
        }else{ 
          if(data.password === data.repeat_password){
          console.log(data);
          await axios.post("https://feasta-postgres.herokuapp.com/auth/admin_regestration/",data).then((result) => {
              console.log(result.data);
              console.log(data);
              if(result.data.status_code == 200){
                if(window.confirm("Registered in Successfully")){
                  setdata({
                    first_name:'',
                    last_name:'',
                    email_id:'',
                    canteen_name:'',
                    password:'',
                    phone_number:'',
                    repeat_password:''
                });
                  props.history.push('/login');
                }
              }else{
                alert(result.data.response_msg);
              }
          }).catch((err) => {
              console.log(err);
          });
        }else{
            alert("Please enter password and confirm password same");
        }}
       
    }

    
    return (
        <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            {/* Nested Row within Card Body */}
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image" />
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                  </div>
                  <form className="user" onSubmit={itemSubmit}>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" className="form-control form-control-user" id="exampleFirstName" value={data.first_name} onChange={(e)=>{setdata({...data,first_name:e.target.value})}} placeholder="First Name" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" className="form-control form-control-user" id="exampleLastName" value={data.last_name} onChange={(e)=>{setdata({...data,last_name:e.target.value})}} placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control form-control-user" id="exampleInputEmail" value={data.email_id} onChange={(e)=>{setdata({...data,email_id:e.target.value})}} placeholder="Email Address" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-user" id="exampleInputEmail" value={data.phone_number} onChange={(e)=>{setdata({...data,phone_number:e.target.value})}} placeholder="Contact" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-user" id="exampleInputEmail" value={data.canteen_name} onChange={(e)=>{setdata({...data,canteen_name:e.target.value})}} placeholder="College Name" />
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="password" className="form-control form-control-user" id="exampleInputPassword" value={data.password} onChange={(e)=>{setdata({...data,password:e.target.value})}} placeholder="Password" />
                      </div>
                      <div className="col-sm-6">
                        <input type="password" className="form-control form-control-user" id="exampleRepeatPassword" value={data.repeat_password} onChange={(e)=>{setdata({...data,repeat_password:e.target.value})}} placeholder="Repeat Password" />
                      </div>
                    </div>
                    <input type="submit" value="Register Account" className="btn btn-primary btn-user btn-block"/>
                  
                    <hr />
                   
                  </form>
                  <hr />
                  <div className="text-center">
                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                  </div>
                  <div className="text-center">
                    <Link className="small" to="/login">Already have an account? Login!</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    )
}

export default Register