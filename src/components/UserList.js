import React, { Component } from 'react'

export class UserList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         list:[]
      }
    }
    componentDidMount(){
             fetch("http://localhost:3000/login").then((response)=>{
                 response.json().then((result)=>{
                     this.setState({list:result})
                 })
             })
    }
  render() {
    return (
      <div>
    {/* <h1>Product List</h1>
{
this.state.list?
<div>
{
this.state.list.map((product,i)=>
<div className="list-wrapper">
<span>{product.id}</span>
<span>{product.username}</span>
<span>{product.password}</span>

</div>
)
}
</div>
:<p>Please wait</p>
} */}


<h1 style={{ color: "red" }}>User List</h1>
              {this.state.list ? (
                <div>
                  <table className="table table-hover">
                    
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Actons</th>
                       
                      </tr>
                   
                      {this.state.list.map((product, i) => (
                      
                        <tr>
                          <td>{product.id}</td>
                          <td>{product.username}</td>
                          <td>{product.password}</td>
                          
                        
                          <td>
                              <button className="btn btn-primary">Update</button>
                              <button className="btn btn-danger">Delete</button>
                          </td>
                         
                        </tr>
                      ))}
                  
                  </table>
                 
                </div>
              ) : (
                <p>Please wait</p>
              )}
      </div>
    )
  }
}

export default UserList
