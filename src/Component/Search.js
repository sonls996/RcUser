import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue:""
        }
    }
    
   isChange =(event)=>{
        this.setState({
            tempValue:event.target.value
        });
        
        
   }
   isShowEditUserStatus = ()=>{
       if(this.props.editUserStatus === true){
           return (
               <EditUser
               getUserEditInfo={(info) =>this.getUserEditInfo(info)}
               checkHienThi={()=>this.props.checkHienThi()}
               userEditObject={this.props.userEditObject}
               ></EditUser>
           )
       }
   }
   // Lấy thông tin user sau khi sửa từ file edituser.js
   getUserEditInfo = (info)=>{
       this.setState({
           userObj: info
       })
       this.props.getUserEditInfoApp(info);       
   }
    render() {
        return (
            <div className="  mt-2 col-12">
                <div className="row">
                    {this.isShowEditUserStatus()}
                </div>
                <form className="form-inline">
                    <div className="btn-group">
                        <input onChange={(event)=>{this.isChange(event)}} style={{width: '500px'}}  type="text"  className="form-control" placeholder="Nhập từ khóa tìm kiếm"  />
                        <div onClick={(dl)=>this.props.getTextSearch(this.state.tempValue)} className="btn btn-info">Tìm kiếm</div>
                    </div>
                </form>
                <hr></hr>
            </div>
            

        );
    }
}

export default Search;
