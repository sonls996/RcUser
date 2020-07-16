import React, { Component } from 'react';



class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            Permision: this.props.userEditObject.Permision,
        }
    }
    isChange =(event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    saveButton =() =>{
        var info={};
        info.id= this.state.id;
        info.name= this.state.name;
        info.tel= this.state.tel;
        info.Permision= this.state.Permision;
        this.props.getUserEditInfo(info);

        // hàm ẩn hiện form
       this.props.checkHienThi();
    }
    render() {
        return (
            <div className="card-body col-12">
            <form method="post">
                <div className="card-header text-white bg-warning">Sửa thông tin user</div>
                <div className="form-group mt-2">
                    <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.name} name="name" type="text" className="form-control" placeholder="Tên User" aria-describedby="helpId" />
                </div>
                <div className="form-group">
                    <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.tel}  name="tel" type="text" className="form-control" placeholder="Số điện thoại" aria-describedby="helpId" />
                </div>
                <div className="form-group">
                    <select onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.Permision} name="Permision" className="custom-select" >
                        <option >Chọn quyền mặc định</option>
                        <option value="1" >Admin</option>
                        <option value="2" >Modrator</option>
                        <option value="3" >Normal</option>
                    </select>
                </div>
                <div className="form-group">
                    <input onClick={()=>this.saveButton()} value="Lưu thông tin chỉnh sửa" type="reset"  className="btn btn-block btn-primary"/>
                       
                    
                </div>
            </form>
        </div>
        );
    }
}

export default EditUser;
