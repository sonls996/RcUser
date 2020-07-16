import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    deleteButtonClick =(idUser)=>{
        this.props.deleteUser(idUser);
        
    }
    mappingDataUser = () => {
        return (
            this.props.dataUserProps.map((value, key) => {
                return (
                    <TableDataRow
                    deleteButtonClick={(idUser)=>this.deleteButtonClick(idUser)}
                    data={value}
                    id={value.id}
                    name={value.name}
                    tel={value.tel}
                    Permision={value.Permision}
                    stt={key}
                    editUserFuc={() => this.props.editUser(value)} 
                    // changeEditUserStatusRow={ ()=> this.props.changeEditUserStatus()}
                    checkHienThiRow={()=>this.props.checkHienThi()}
                    editUserStatusRow={this.props.editUserStatus}
                    ></TableDataRow>
                )
            })
        )
    }
    render() {
        return (
            <div className="col-9">
                <table className="table table-striped table-hover ">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;
