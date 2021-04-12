import React,{useState}from 'react';
import axios from 'axios';
//https://feasta-postgres.herokuapp.com/menu/add_category

function AddCategory() {
    
    const admin_id = JSON.parse(localStorage.getItem('admin_id'))

    const [data, setdata] = useState({ category_name :"" , admin_id:admin_id.admin_id});

    const itemSubmit =async (e)=>{
        console.log(data)
        e.preventDefault();
        await axios.post('https://feasta-postgres.herokuapp.com/menu/add_category/',data).then((result)=>{
            if(result.data.status_code == 200){
                alert(result.data.response_msg);
                setdata({ category_name :"" , admin_id:admin_id.admin_id});
            }else{
                alert(result.data.response_msg);
            }
        })
    }

    return (
        <div>    
            {/* Main Page Content */}
            <div className="col-xl-12 col-md-12">
            <div className="ms-panel ms-panel-fh">
                <div className="ms-panel-header">
                <h6>Add Category Form</h6>
                </div>
                <div className="ms-panel-body">
                <form className="needs-validation clearfix" onSubmit={itemSubmit} noValidate>
                    <div className="form-row">
                    <div className="col-md-12 mb-3">
                        <label htmlFor="validationCustom18">Category Name</label>
                        <div className="input-group">
                        <input type="text" className="form-control" id="validationCustom18" placeholder="Category Name" value={data.category_name} onChange={(e)=>{setdata({...data,category_name: e.target.value})}} required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                        </div>
                    </div>
                    <div className="ms-panel-header new">
                        <button className="btn btn-primary d-block" type="submit">Save and Add</button>
                    </div>
                    </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AddCategory
