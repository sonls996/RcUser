import React, { Component } from 'react';

class Header extends Component {

    hienThiNut =()=>{
        if(this.props.hienThiForm ===true){
            return (
                <div className="  container">
                        <div onClick={()=>this.props.doiState()} className="  btn btn-block btn-info  text-center"> Thêm mới người dùng  </div>

                    </div>
            )
            
        }else {
            return (
                <div className="container mt-2 ">
                <div onClick={()=>this.props.doiState()} className="  btn btn-block btn-danger  text-center"> Đóng lại  </div>
            </div>
            )
        }
    }

    render() {
        
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-3">Quản lý thành viên bằng REACT JS </h1>
                        <p className="lead  text-center text-uppercase">với dữ liệu json</p>
                        <hr className="my-2" />
                    </div>
                    
                   
                </div>
                {this.hienThiNut()}
            </div>
        );
    }
}

export default Header;
