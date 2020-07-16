import React from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import Test2 from './Test2';
import DataUser from './Data.json';
import { v4 as uuidv4 } from 'uuid';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      hienthiForm:true,
      testForm :true,
      data:DataUser,
      searchText:"",
      editUserStatus: false,
      userEditObject: {}
    }
  }
  

UNSAFE_componentWillMount() {
  if( localStorage.getItem("userData") === null){
    localStorage.setItem("userData",JSON.stringify(DataUser));
  }else{
    var temp= JSON.parse( localStorage.getItem("userData") );
    this.setState({
      data:temp
    })
  }
  console.log( localStorage.getItem("userData") );
  
}
// UNSAFE_componentWillMount(){
//   console.log("hi");
  
// }

// state cho hiển thị form sửa thôn g tin user
  checkHienThi= ()=>{
    this.setState({
          editUserStatus: !this.state.editUserStatus
        })
    
  }
  doiState =() =>{
    this.setState({
      testForm: !this.state.testForm
    });
  }
  // kết nối giữa component app.js với component con search.js thông qua props
  getTextSearch = (dl) => {
    // return console.log("Dữ liệu mà bố nhận được là : " + dl);
    this.setState({
      searchText: dl
    });
  }
  // test kết nối với component con test2.js
  getNewUserData= (a,b,c)=>{
    var item={};
    var items=this.state.data;
    console.log( "kết nối thành công");
    item.id=uuidv4() ;
    item.name=a;
    item.tel=b;
    item.Permision=c;
    items.push(item);
    this.setState({
      data:items
    });
    localStorage.setItem("userData",JSON.stringify(items));

  }
  // edt user
  editUser = (user)=>{
    this.setState({
      userEditObject : user
    })

  }
  // xóa người dùng
  deleteUser =(idUser)=>{
    console.log("Id app nhận được là : "+idUser);
    var tempData = this.state.data;
    tempData =tempData.filter(item=>item.id !== idUser);
    this.setState({
      data:tempData
    })    
    localStorage.setItem("userData",JSON.stringify(tempData));
    // tempData.forEach((value,key)=>{
    //   if(value.id=== idUser){
        
    //   }
    // });
    
  }
  // nhận thông tin user chỉnh sửa từ  search truyền lên
  getUserEditInfoApp = (info)=>{
  
    
    this.state.data.forEach((value,key)=>{
      console.log(info);
      if(value.id === info.id){
        value.id = info.id;
        value.name= info.name;
        value.tel= info.tel;
        value.Permision = parseInt(info.Permision);
      }
    })
    localStorage.setItem("userData",JSON.stringify( this.state.data));

    
  }
  render() {
    // bắn 1 cặp giá trị key: value lên localstorage
    // localStorage.setItem("userName","Lê Hồng Sơn");
    // localStorage.setItem("userName1","Lê Hồng Sơn1");
    // // lấy xuống giá trí key từ  localstorage

    // console.log(localStorage.getItem("userName") );
    // xóa dữ liệu khỏi local storage
    // setInterval(()=>{
    //   localStorage.removeItem("userName1");
    // },10000)
    // localStorage.setItem("userData",JSON.stringify(DataUser));
    // console.log(DataUser);
    
    // localStorage.removeItem("userData");


    // localStorage.setItem("userData",JSON.stringify(DataUser));
    var ketQua=[];
    this.state.data.forEach((item)=>{
      
      if(item.name.indexOf(this.state.searchText ) !== -1){
         ketQua.push(item);
      };
    });
    
    
    return (
      <div >
        <Header doiState={()=>this.doiState()} hienThiForm={this.state.testForm} ></Header>
        <Test2 trangThaiState={this.state.testForm}  add={(a,b,c)=>this.getNewUserData(a,b,c)}></Test2>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
              getUserEditInfoApp={(info)=>this.getUserEditInfoApp(info)}
              checkHienThi={()=>this.checkHienThi()}
               getTextSearch={(dl)=> this.getTextSearch(dl)}
               editUserStatus={this.state.editUserStatus}
               userEditObject={this.state.userEditObject}
               >
               </Search>
              <TableData
              deleteUser={(idUser)=>this.deleteUser(idUser)}
               editUser={(user)=>this.editUser(user)}
              //  changeEditUserStatus={()=>this.changeEditUserStatus()}
                dataUserProps={ketQua}
                checkHienThi={()=>this.checkHienThi()}
                editUserStatus={this.state.editUserStatus}

                ></TableData>
              <AddUser hienThiForm={this.state.hienthiForm}></AddUser>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default App;


