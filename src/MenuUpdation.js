import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

//https://feasta-postgres.herokuapp.com/menu/get_category  data
/* {
  admin_id: 
} */

function MenuUpdation() {

var count = 0;
const admin_id = JSON.parse(localStorage.getItem('admin_id'));
const [cate, setcate] = useState([]);

const [table, settable] = useState([]);

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
//console.log(cate);  

useEffect(() => {
  async function tabData(){
    const requests = await axios.get('https://feasta-postgres.herokuapp.com/menu/get_item/',{
      params: {
        admin_id:admin_id.admin_id
      }
    });
    
    requests.data.data.map((data,key)=>{
        settable(table=>[...table,data]);
        //console.log(cate)
    });
}
tabData();
}, [])
console.log(table);


//delete product
var test1 =JSON.parse(localStorage.getItem('del_id'));

const delItem = async (e)=>{
  await axios.delete('https://feasta-postgres.herokuapp.com/menu/get_item/',{
      params: {
        item_id:test1.del_id,
        admin_id:admin_id.admin_id
      }
    }).then((result)=>{
      if(result.data.status_code == 200){
          alert('Item Deleted Sucessfully');
      }else{
        alert("error occured");
      }
    }).catch((ress)=>{
      console.log(ress);
    });
}
   
    return (
        <div>
        {/* Page Heading */}
        <div className="d-sm-flex align-items-center justify-content-center m-1" style={{textAlign: 'center'}}>
          <h1 className="h3 mb-0 text-gray-800">Edit Menu</h1>
          {/* <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
        </div>
        <hr width="85%" />
        {/* Main Page Content */}
        <div className="mr-4 ml-4 mb-2 mt-2">
          <div className="card shadow mb-4">
            <div className="card-body pt-2">
              {/*Top of the table*/}
              <div className="d-inline-flex flex-row w-100 justify-content-between align-items-center h-100 mb-2">
                <div className="btn-group dropright">
                  <button className="btn btn-primary dropdown-toggle badge-pill ml-3 shadow" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select Catagory
                  </button>
                  <div className="dropdown-menu animate slideIn bg-gradient-light" aria-labelledby="dropdownMenuButton">
                    
                    
                    <div className="dropdown-divider" />
                      {cate.map((data)=>{
                        return(<button className="dropdown-item" value={data.category_id}>{data.category_name}
                        </button>)
                      })}
                    <div className="dropdown-divider" />
                    <Link to="/add_category" className="dropdown-item">Add/Edit Catagories</Link>
                  </div>
                </div>
                <Link to="/add_item">
                  <button type="button" className="btn btn-success badge-pill m-1 mr-3 shadow" style={{width: '120px'}}>+ Add
                    Item</button>
                </Link>
              </div>
              <div className="table-responsive">
              
                <table className="table table-hover text-capitalize">
                  <thead className="thead-dark text-center">
                    <tr>
                      <th scope="col" width="5%">Id</th>
                      <th scope="col" colSpan={2} width="35%">Item</th>
                      <th scope="col" width="20%">Price</th>
                      <th scope="col" className="text-right" width="30%" />
                    </tr>
                  </thead>
                  <tbody className="text-center mb-1 mt-1 align-middle">
                  {table.map((data)=>{
                    count++;
                      return(<tr>
                        <th scope="row" className="align-middle">{count}</th>
                        <td className="align-middle text-right" width="15%"><img src={data.image_path} className="img-fluid shadow" style={{maxWidth: '60px', minWidth: '50px'}} /> </td>
                        <td className="align-middle">{data.item_name}</td>
                        <td className="align-middle">Rs {data.price}</td>
                        <td className="text-right align-middle">
                          <Link to='/edit_item' className="btn btn-success badge-pill m-1" style={{width: '80px'}} onClick={(e)=>{localStorage.setItem("item_id",JSON.stringify({item_id:data.item_id}))}}>Edit</Link>
                          <button type="button" className="btn btn-danger badge-pill m-1" style={{width: '80px'}} onClick={(e)=>{localStorage.setItem("del_id",JSON.stringify({del_id:data.item_id}));delItem()}}><i className="fas fa-fw fa-trash-alt" /></button>
                        </td>
                      </tr>)
                  })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    )
}

export default MenuUpdation
