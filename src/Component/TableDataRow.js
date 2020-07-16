import React, { Component } from 'react';

class TableDataRow extends Component {
    perMisionShow =() =>{
        if(this.props.Permision ===1){
            return " Admin";
        }else if (this.props.Permision === 2){
            return "Moderator";
        }else {
            return "Normal";
        }
    }
    // Sửa user
    editUser=()=>{
        
            this.props.editUserFuc();
            this.props.checkHienThiRow();
            // this.props.changeEditUserStatusRow();
        
    }
    isShowEdit=()=>{
        if(this.props.editUserStatusRow === false){
            return (
                <div className="btn btn-warning sua">
                        <i onClick={()=>this.editUser()} className="fa fa-edit">Sửa</i>
                    </div>
            )
        }else {
            return  (
                    <div className="btn btn-success sua">
                        <i onClick={()=>this.editUser()} className="fa fa-edit">Lưu lại</i>
                    </div>
            )
        }
    }
    deleteButtonClick =(idUser)=>{
        this.props.deleteButtonClick(idUser);
        
    }
    render() {
        return (
            <tr>
            <td >{this.props.stt + 1 }</td>
            <td>{this.props.name}</td>
            <td>{this.props.tel}</td>
            <td>
            {this.perMisionShow()}
            </td>
            <td>
                <div className="btn-group">
                     {this.isShowEdit()}
                    <div onClick={(idUser)=>this.deleteButtonClick(this.props.id)}  className="btn btn-danger sua">
                        <i className="fa fa-edit">Xóa</i>
                    </div>
                </div>
            </td>
        </tr>
        );
    }
}

export default TableDataRow;
