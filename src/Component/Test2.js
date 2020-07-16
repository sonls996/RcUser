import React, { Component } from 'react';

class Test2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            Permision: ""

        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
        //package to item


    }
    checkTrang = () => {

        if (this.props.trangThaiState === false) {
            return (
                <div className=" container card-body ">
                    <form>
                        <div className="card-header">Thêm mới user vào hệ thống</div>
                        <div className="form-group">
                            <input onChange={(event) => { this.isChange(event) }} name="name" type="text" className="form-control" placeholder="Tên User" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <input onChange={(event) => { this.isChange(event) }} name="tel" type="text" className="form-control" placeholder="Số điện thoại" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <select onChange={(event) => { this.isChange(event) }} name="Permision" className="custom-select" >
                                <option >Chọn quyền mặc định</option>
                                <option value="1" >Admin</option>
                                <option value="2" >Modrator</option>
                                <option value="3" >Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input value=" Thêm mới user nhé" type="reset" onClick={() => this.props.add(this.state.name, this.state.tel, this.state.Permision)} className="btn btn-block btn-primary"/>
                               
                            
                        </div>
                    </form>
                </div>
            );
        }
    }
    render() {
        var item = {};
        item.id = this.state.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.Permision = this.state.Permision;

        return (
            <div className="card border-primary mt-2">

                {this.checkTrang()}

            </div>
        );
    }
}

export default Test2;
