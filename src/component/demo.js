import app from '../component/firebase'
import React from 'react'
import {ref, onValue, getDatabase} from 'firebase/database'
import {Table} from 'react-bootstrap'
import './dm.css'
import { CrudPanel } from './AddEdit'

const db=getDatabase(app);
let Uniquenumber=0;

export class RealtimeData extends React.Component{
    constructor(){
        super();
        this.state={
            tableData: []
        }
    }

    componentDidMount(){
        const dbRef = ref(db,'Booking Details');

        onValue(dbRef,(snapshot)=>{
            let records=[];
            snapshot.forEach(childSnapshot=>{
                let keyName=childSnapshot.key;
                let data=childSnapshot.val();
                records.push({"key":keyName, "data":data})
            })
            this.setState({tableData:records});
        });
    }

    render(){
        return(
            <>
            <div style={{height:"90px"}}>
            <h1 style={{textAlign:"center",paddingTop:"15px"}}>WELCOME ADMIN !!</h1></div>
            <div className="bgimg">
                
            <Table className="tablecont" bordered striped variant='dark'>
                <thead >
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Contact-No</th>
                        <th>Arrival-Date</th>
                        <th>Arrival-Time</th>
                        <th>Leave-Date</th>
                        <th>Leave-Time</th>
                        <th>Room</th>
                        <th>Price</th>
                        <th>Room No</th>
                        <th>Controls</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.tableData.map((row,index)=>{
                        return(
                        <tr key={Uniquenumber++}>
                            <td>{index+1}</td>
                            <td>{row.key}</td>
                            <td>{row.data.Contact_No}</td>
                            <td>{row.data.bookingdate}</td>
                            <td>{row.data.bookingtime}</td>
                            <td>{row.data.leavedate}</td>
                            <td>{row.data.leavetime}</td>
                            <td>{row.data.RoomName}</td>
                            <td>{row.data.Price}</td>
                            <td>{row.data.RoomNo}</td>
                            <td><CrudPanel username={row.key} record={row.data}/></td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
            </div>
            </>
        )
    }
}