import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Layout from '../component/Layout';

export default function Menu() {
  const [table, settable] = useState([]);
  const [cate, setcate] = useState([]);
  const [admin_id, setadmin_id] = useState("");
  const [category_id, setcategory_id] = useState("");
  const [user_id, setuser_id] = useState("");

useEffect(()=>{
  setadmin_id(localStorage.getItem("admin_id")?JSON.parse(localStorage.getItem("admin_id")).admin_id:"10") 
  setuser_id(localStorage.getItem("user_id")?JSON.parse(localStorage.getItem("user_id")).user_id:"")
  setcategory_id(localStorage.getItem("category_id")?JSON.parse(localStorage.getItem("category_id")).category_id:"-1")
  catData(admin_id);
},[])

//Selected category
const selectedData = async ()=>{
  await axios.get('https://feasta-postgres.herokuapp.com/menu/get_item/',{
        params: {
          category_id:category_id,
          admin_id:admin_id
        }
      }).then((requests)=>{
        console.log(requests.data);
        settable([]);
        requests.data.data.map((data,key)=>{
          settable((category_id ? data :table=>[...table,data]));
          console.log(table)
      })
      }).catch((ress)=>{
        alert(ress);
      }) 
}
  
//Get category
const catData = async () => {
  await axios.get('https://feasta-postgres.herokuapp.com/menu/get_category',{
    params: {
      admin_id:admin_id
    }
  }).then((requests)=>{
    requests.data.data.map((data,key)=>{
      console.log(data);
      setcate(cate => [...cate,data]);
    });
  }).catch((ress)=>{
    alert(ress);
  })
}


    return (
      <Layout>
        <div>
          {/* Start Menu */}
      <div className="menu-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title text-center">
                <h2>Special Menu</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
              </div>
            </div>
          </div>
          <div className="row inner-menu-box">
            <div className="col-3">
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button style={{outline:'none',border:'0'}} className="nav-link" id="v-pills-settings-tab" value=" " onClick={()=>{localStorage.setItem("category_id",JSON.stringify({category_id:""}));selectedData()} } >All</button>
                {cate.map((data)=>{
                  return(<button style={{outline:'none',border:'0'}} className="nav-link" id="v-pills-settings-tab" value={data.category_id} onClick={()=>{localStorage.setItem("category_id",JSON.stringify({category_id:data.category_id}));selectedData()}} >{data.category_name}</button>)
                })}
              </div>
            </div>
            <div className="col-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <div className="row">
                  {table?table.map((data)=>{
                      return(
                        <div className="col-lg-4 col-md-6 special-grid dinner">
                        <div className="gallery-single fix">
                        <img src={data.image_path} className="img-fluid" alt="Image" />
                          <div className="why-text">
                            <h4>{data.item_name}</h4>
                            <p>{data.item_desc}</p>
                            <h5> Rs.{data.price}</h5>
                          </div>
                        </div>
                      </div>
                      )
                  }):""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Menu */}
        </div>
      </Layout>
    )
}

