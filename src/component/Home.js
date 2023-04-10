import  './Home.css';
import BookPage from './Book';
import React,{ useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA-RLFLekua04s2gwxEEKF90PsK2ECU7F8",
  authDomain: "hotel-62c83.firebaseapp.com",
  databaseURL: "https://hotel-62c83-default-rtdb.firebaseio.com",
  projectId: "hotel-62c83",
  storageBucket: "hotel-62c83.appspot.com",
  messagingSenderId: "483318743314",
  appId: "1:483318743314:web:dc60f35b596365043073cb"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();

const Home = () => {
    const [valid, setvalid] = useState(true)
    const [hide, sethide] = useState(false)
    const[username,setusername]=useState("");
        const user_name = document.getElementById('user-name');
        const phone_no=document.getElementById('phone-no')
        const book_date = document.getElementById('book-date');
        const book_time = document.getElementById('book-time');
        const leave_date = document.getElementById('leave-date');
        const leave_time = document.getElementById('leave-time');
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!book_date.value || !book_time.value || !leave_date.value || !leave_time.value || !user_name.value || !phone_no.value){
            alert('Please fill all the fields');
        }else{
            writeUserData();
        function writeUserData() {
          const db = getDatabase();
            set(ref(db, 'Booking Details/'+user_name.value), {
            Name: user_name.value,
            Contact_No: phone_no.value,
            bookingdate: book_date.value,
            bookingtime: book_time.value,
            leavedate: leave_date.value,
            leavetime: leave_time.value,
            });
        }
        setusername(user_name.value);
            alert('Your booking has been made');
            const BookPageDiv = document.querySelector('.num');
            const bgnd = document.querySelector('.bgnd');
            setvalid(!valid + BookPageDiv.classList.add("show"));
            sethide(!hide + bgnd.classList.add("hide"));
        }
    }

  return (
      <>
        <BookPage username={{username}}/>
        <div className="bgnd">
        <div className="container">
      <div className="content">
        <div className="text">Book Now</div>
        <div className="form2">
        <div className="txt">Name</div>
        <div>
            <input type="text" name="" id="user-name" className="inputData1"/>
        </div>
        <div className="txt">Phone Number</div>
        <div>
            <input type="text" name="" id="phone-no" className="inputData1"/>
        </div>
          <div className="txt">Date & Time you would like to Stay</div>
          <form action="" onSubmit={handleSubmit}>
            <div className="inputData">
              <input type="date" name="" id="book-date"/>
            </div>
            <div className="inputData">
              <input type="time" name="" id="book-time" />
            </div>
            <div className="txt">Date & Time you would like to leave</div>
            <div className="inputData">
              <input type="date" name="" id="leave-date" />
            </div>
            <div className="inputData">
              <input type="time" name="" id="leave-time" />
            </div>
            <div className="book">
                <button type="submit">Book</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
      </>
  );
};
export default Home;