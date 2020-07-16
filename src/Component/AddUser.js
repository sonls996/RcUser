import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThaiChinhSua: true
        }
    }

    // hàm hiển thị nút
    hienThiNut = () => {
        if (this.state.trangThaiChinhSua === true) {
            return <div onClick={() => this.thayDoiTrangThai()} className="btn btn-block btn-outline-info">Thêm mới </div>;
        } else {
            return <div onClick={() => this.thayDoiTrangThai()} className="btn btn-block btn-outline-secondary">Thoát </div>;
        }
    }
    // hàm thay đổi trạng thái hiển thị nút  thêm/ đóng
    thayDoiTrangThai = () => {
        this.setState({
            trangThaiChinhSua: !this.state.trangThaiChinhSua
        })
    }

    // hàm hiển thị form thay đổi thông tin user
    hienThiForm = () => {
        if (this.state.trangThaiChinhSua === false) {
            return (
                <div className="card border-primary mt-2">

                <div className="card-body">
                    <div className="card-header">Thêm mới user vào hệ thống</div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Tên User" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Số điện thoại" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Tên User" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <select className="custom-select" >
                            <option >Chọn quyền mặc định</option>
                            <option >Admin</option>
                            <option >Modrator</option>
                            <option >Normal</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <div className="btn btn-block btn-primary">
                            Thêm mới
                        </div>
                    </div>
                </div>
                
            </div>
            );
        }
    }

    render() {
        
        return (
            <div className="col-3">
                {this.hienThiNut()}
                {this.hienThiForm()}
               
            </div>

        );
    }
}

export default AddUser;
