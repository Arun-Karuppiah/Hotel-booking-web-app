import  './Feedback.css';
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
        
        const name = document.getElementById('user-name');
        const rating= document.getElementById('rating');
        const comments= document.getElementById('comments')
        const handleSubmit = (e) => {
          e.preventDefault();
        

        if( !name.value || !rating.value || !comments.value){
            alert('Please fill all the fields');
        }else{
            writeUserData();
        function writeUserData() {
          const db = getDatabase();
            set(ref(db, 'Reviews/'+ name.value), {
            Name: name.value,
            Rating: rating.value,
            Comments: comments.value
            });
            
        }
        
        alert('Thanks for your feedback');
        window.location.reload();
        
        }
    }

  return (
      <>
        <div className="container">
        <div className="content">
        <div className="text">LEAVE YOUR FEEDBACK</div>
        <div className="form2">
        <div className="txt">Name</div>
        <div>
            <input type="text" id="user-name" className="inputData1" placeholder="Enter your name"/>
        </div>
        <div className="txt">Rating</div>
        <div>
            <input type="number" min={0} max={10} id="rating" className="inputData1" placeholder="Rate out of 10"/>
        </div>
        <div className="txt">Comments</div>
        <div>
            <textarea id="comments" className="inputData1"/>
        </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="book">
                <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  </>
  );
};
export default Home;