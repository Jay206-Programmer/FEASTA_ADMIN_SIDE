import React ,{useState,useEffect}from 'react';
import axios from 'axios';

function AddItem() {
  const admin_id = JSON.parse(localStorage.getItem('admin_id'));
  const [data, setdata] = useState(
    {
      item_name:"",
      category_id:"",
      price:"",
      item_desc:"",
      quantity:"",
      image:"",
      admin_id:admin_id.admin_id
    }
  );
  
  const itemSubmit =async (e)=>{
    if(data.name==""||data.category_id==""||data.price==""||data.quantity==""||data.image==""){
      alert("Empty fields not allowed!!!!");
      e.preventDefault();
    }else{  console.log(data)
      e.preventDefault();
      const form_Data = GetForm(data);
      await axios.post('https://feasta-postgres.herokuapp.com/menu/add_item/',form_Data,{
        headers: {
            'content-type': 'multipart/form-data',
            
        }
      }).then((result)=>{
          if(result.data.status_code == 200){
              alert(result.data.response_msg);
              setdata({
                item_name:"",
                category_id:"",
                price:"",
                item_desc:"",
                quantity:"",
                image:"",
                admin_id:admin_id.admin_id
              });
          }else{
              alert(result.data.response_msg);
          }
      })}
  
}

// FOR GETTING MULTIPART FORMDATA FOR BACKEND
function GetForm(Data){
  const formData = new FormData();

  for (var key in Data) {
    // check if the property/key is defined in the object itself, not in parent
    if (Data.hasOwnProperty(key)) {           
      formData.append(key,Data[key]);
    }
  }
  return formData;
}    


const [cate, setcate] = useState([]);

useEffect(() => {
  async function catData(){
    const requests = await axios.get('https://feasta-postgres.herokuapp.com/menu/get_category',{
      params: {
        admin_id:admin_id.admin_id
      }
    });
    
    requests.data.data.map((data,key)=>{
        setcate(cate=>[...cate,data]);
        //console.log(cate)
    });
 
}
catData();
}, [])


var test =JSON.parse(localStorage.getItem('item_id'));
useEffect(() => {
  async function selData(){
    const requests = await axios.get('https://feasta-postgres.herokuapp.com/menu/get_item/',{
      params: {
        item_id:test.item_id,
        admin_id:admin_id.admin_id
      }
    });
    
    requests.data.data.map((data,key)=>{
        setdata({...data,item_name:data.item_name,item_desc:data.item_desc,price:data.price,quantity:data.quantity,admin_id:admin_id.admin_id});
    }); 
}
selData();
}, [])

    //https://feasta-postgres.herokuapp.com/menu/add_category

    return (
        
      <div id="content" className="container-fluid">
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-center m-1" style={{textAlign: 'center'}}>
        <h1 className="h3 mb-0 text-gray-800">Add Menu</h1>
        {/* <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
      </div>
      <hr width="85%" />
      {/* Main Page Content */}
      <div className="col-xl-12 col-md-12">
        <div className="ms-panel ms-panel-fh">
          
          <div className="ms-panel-body">
            <form className="needs-validation clearfix" noValidate onSubmit={itemSubmit}>
              <div className="form-row">
                <div className="col-md-12 mb-3">
                  <label htmlFor="validationCustom18">Product Name</label>
                  <div className="input-group">
                    <input type="text" className="form-control" id="validationCustom18" placeholder="Pizza" value={data.item_name} onChange={e=>setdata({...data,item_name:e.target.value})} required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="validationCustom22">Select Catagory</label>
                  <div className="input-group">
                    <select className="form-control" id="validationCustom22" value={data.category_id} onChange={e=>setdata({...data,category_id:e.target.value})} required>
                      {cate.map((data)=>{
                        return( 
                          <option value={data.category_id}>{data.category_name}</option> 
                        );
                      })}  
                    </select>
                    <div className="invalid-feedback">
                      Please select a Catagory.
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationCustom25">Price</label>
                  <div className="input-group">
                    <input type="text" className="form-control" id="validationCustom25" placeholder="Rs.10" value={data.price} onChange={e=>setdata({...data,price:e.target.value})} required />
                    <div className="invalid-feedback">
                      Price
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                <label htmlFor="validationCustom25">Quantity</label>
                <div className="input-group">
                  <input type="text" className="form-control" id="validationCustom25" placeholder="100" value={data.quantity} onChange={e=>setdata({...data,quantity:e.target.value})} required />
                  <div className="invalid-feedback">
                    Quantity
                  </div>
                </div>
              </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="validationCustom12">Description</label>
                  <div className="input-group">
                    <textarea rows={5} id="validationCustom12" className="form-control" placeholder="Message" value={data.item_desc} onChange={e=>setdata({...data,item_desc:e.target.value})} required />
                    <div className="invalid-feedback">
                      Please provide a message.
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="validationCustom12">Product Image</label>
                  <div className="ml-2 col-sm-6">
                    <div id="msg" />
                    <div className="input-group my-3">
                      <input type="text" className="form-control" disabled placeholder="Select File" id="file" />
                      <div className="input-group-append">
                        <input type="file" className="file browse btn btn-primary" accept="image/png, image/jpeg"  onChange={(e)=>{setdata({...data,image:e.target.files[0]})}} />
                      </div>
                    </div>
                  </div>
                  <div className="ml-2 col-sm-6">
                      <img src="../img/`{data.image.name}`" id="preview" className="img-thumbnail" />
                  </div>
                </div>
              </div>
            <div className="ms-panel-header new">
              <button className="btn btn-primary d-block" type="submit">Save and Add</button>
            </div>
            </form>
          </div>
        </div>
      </div>
      {/* End of Main Content */}
    </div>
    )
}

export default AddItem
