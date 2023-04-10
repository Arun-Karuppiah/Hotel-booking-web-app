import React from "react";
import app from "./firebase";
import {ref, set, get, update, remove, child, getDatabase} from 'firebase/database';
import { Button, Modal, InputGroup, Form } from "react-bootstrap";

const db=getDatabase(app);

export class CrudPanel extends React.Component{
  constructor(props){
    super(props);
    this.state={
      mode:'',
      isOpen : false,
      record: {
        username: props.username,
        contactnum: props.record.Contact_No,
        bdate: props.record.bookingdate,
        btime: props.record.bookingtime,
        ldate: props.record.leavedate,
        ltime: props.record.leavetime,
        rname: props.record.RoomName,
        price: props.record.Price,
        rnum: props.record.RoomNo
      },
      modUsername:'',
      modcontactnum:'',
      modbdate:'',
      modbtime:'',
      modldate:'',
      modltime:'',
      modrname:'',
      modprice:'',
      modrnum:''
    }
  }
  componentDidMount(){
    console.log(this.state.record)
  }
  render(){
    return (
        <>
            <Button variant='primary' className='ms-2' onClick={()=>{this.openModal('add')}}>Add</Button>
            <Button variant='primary' className='ms-2' onClick={()=>{this.openModal('edit')}}>Edit</Button>

            <Modal show={this.state.isOpen}>
                <Modal.Header>
                  <Modal.Title>{(this.state.mode=='add')? 'Add': 'Edit'}</Modal.Title>
                  <Button size='sm' variant='dark' onClick={()=>{this.closeModal()}}>X</Button>
                </Modal.Header>
                <Modal.Body>
                  <InputGroup>
                      <InputGroup.Text>Username</InputGroup.Text>
                      <Form.Control
                          value={this.state.modUsername}
                          onChange={e => {this.setState({modUsername: e.target.value})}}
                          disabled={(this.state.mode != 'add')}
                      />
                  </InputGroup>

                  <InputGroup>
                      <InputGroup.Text>Contact No</InputGroup.Text>
                      <Form.Control
                          value={this.state.modcontactnum}
                          onChange={e => {this.setState({modcontactnum: e.target.value})}}
                      />
                  </InputGroup>

                  <InputGroup>
                      <InputGroup.Text>Booking Date</InputGroup.Text>
                      <Form.Control
                          type='date'
                          value={this.state.modbdate}
                          onChange={e => {this.setState({modbdate: e.target.value})}}
                      />
                  </InputGroup>

                  <InputGroup>
                      <InputGroup.Text>booking Time</InputGroup.Text>
                      <Form.Control
                          type='time'
                          value={this.state.modbtime}
                          onChange={e => {this.setState({modbtime: e.target.value})}}
                      />
                  </InputGroup>

                  <InputGroup>
                      <InputGroup.Text>Leave Date</InputGroup.Text>
                      <Form.Control
                          type='date'
                          value={this.state.modldate}
                          onChange={e => {this.setState({modldate: e.target.value})}}
                      />
                  </InputGroup>

                  <InputGroup>
                      <InputGroup.Text>Leave Time</InputGroup.Text>
                      <Form.Control
                          type='time'
                          value={this.state.modltime}
                          onChange={e => {this.setState({modltime: e.target.value})}}
                      />
                  </InputGroup>

                  <InputGroup>
                      <InputGroup.Text>Room Name</InputGroup.Text>
                      <Form.Control
                          value={this.state.modrname}
                          onChange={e => {this.setState({modrname: e.target.value})}}
                      />
                  </InputGroup>

                  <InputGroup>
                      <InputGroup.Text>Price</InputGroup.Text>
                      <Form.Control
                          value={this.state.modprice}
                          onChange={e => {this.setState({modprice: e.target.value})}}
                      />
                  </InputGroup>

                  <InputGroup>
                      <InputGroup.Text>Room No</InputGroup.Text>
                      <Form.Control
                          value={this.state.modrnum}
                          onChange={e => {this.setState({modrnum: e.target.value})}}
                      />
                  </InputGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant='primary' className='ms-2' onClick={()=>{this.interface('add')}} style={(this.state.mode != 'add')? {display:'none'}: {}}>Add</Button>
                    <Button variant='success' className='ms-2' onClick={()=>{this.interface('update')}} style={(this.state.mode == 'add')? {display:'none'}: {}}>Update</Button>
                    <Button variant='danger' className='ms-2' onClick={()=>{this.interface('delete')}} style={(this.state.mode == 'add')? {display:'none'}: {}}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
  }

  openModal(option){
    if(option=='add'){
      this.setState({
        isOpen: true,
        mode: option,
        modUsername:'',
        modcontactnum:'',
        modbdate:'',
        modbtime:'',
        modldate:'',
        modltime:'',
        modrname:'',
        modprice:'',
        modrnum:''
      });
    }
    
    else if(option=='edit'){
      let rec=this.state.record;
      this.setState({
        isOpen: true,
        mode: option,
        modUsername: rec.username,
        modcontactnum: rec.contactnum,
        modbdate: rec.bdate,
        modbtime: rec.btime,
        modldate: rec.ldate,
        modltime: rec.ltime,
        modrname: rec.rname,
        modprice: rec.price,
        modrnum: rec.rnum
      });
    }
  }

  closeModal(){
    this.setState({
      isOpen: false
    })
  }

  getAllData(){
      return{
        id: this.state.modUsername,
        data:{
            Contact_No: this.state.modcontactnum,
            bookingdate: this.state.modbdate,
            bookingtime: this.state.modbtime,
            leavedate: this.state.modldate,
            leavetime: this.state.modltime,
            RoomName: this.state.modrname,
            Price: this.state.modprice,
            RoomNo: this.state.modrnum
        }
      }
  }

  interface(option){
    if(option=='add')
        this.insertdata();

    else if(option=='update')
        this.updatedata();

    else if(option=='delete')
        this.deletedata();

    this.closeModal();
  }
  
  insertdata(){
    const dbRef=ref(db);
    const record=this.getAllData();
    const address= 'Booking Details/' + record.id;

    get(child(dbRef, address)).then(snapshot => {
      if(snapshot.exists()){
        alert('Cannot create,user alraedy exists')
      }

      else{
        set(ref(db, address), record.data);
      }
    })
  }

  updatedata(){
    const dbRef=ref(db);
    const record=this.getAllData();
    const address= 'Booking Details/' + record.id;

    get(child(dbRef, address)).then(snapshot => {
      if(snapshot.exists()){
        update(ref(db, address), record.data); 
      }

      else{
        alert('Cannot update,user does not exists');
      }
    })
  }

  deletedata(){
    const dbRef=ref(db);
    const record=this.getAllData();
    const address= 'Booking Details/' + record.id;

    get(child(dbRef, address)).then(snapshot => {
      if(snapshot.exists()){
        remove(ref(db, address)); 
      }

      else{
        alert('Cannot delete,user does not exists');
      }
    })
  }

}
