import './Book.css'
import React,{ useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set ,update} from "firebase/database";

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
const Book = (props) => {
    let Hotels = [
        {
            name: "Single Deluxe Room",
            price: "1000Rs/day",
            image: "https://media.istockphoto.com/id/674909778/photo/happy-backpacker-traveller-stay-in-high-quality-hotel.jpg?s=612x612&w=0&k=20&c=Kg2nCRRLhKzH6gIVfhr3ZsSwxURttU3uXZEAEiV_AkA=",
        },
        {
            name: "Family Room",
            price: "1400Rs/day",
            image: "https://media.istockphoto.com/id/1442608368/photo/little-boy-opens-the-mini-bar-in-the-room-in-search-of-snacks.jpg?s=612x612&w=0&k=20&c=wwQ1iX3ZHu1kCvle_4r7NmwqqNkNf_Mt2zefnXhMiWA=",
        },
        {
            name: "Suite Room",
            price: "2000Rs/day",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            name: "VIP Room",
            price: "2500Rs/day",
            image: "https://media.istockphoto.com/id/583698440/photo/classic-bedroom.jpg?s=612x612&w=0&k=20&c=rccB7Vdc1d3nOqEVQ89mJ6cRSS_wgGLBJDl409M9fFA=",
        },
        {
            name: "Double-Deluxe Room",
            price: "3000Rs/day",
            image: "https://media.istockphoto.com/id/173925671/photo/hotel-bedroom.jpg?b=1&s=170667a&w=0&k=20&c=hICI3tq2PxyzE3oL4QZlldkLpgV8oiE2rwjYBxVSy-k=",
        },
        {
            name: "Quadruple Room",
            price: "3500Rs/day",
            image: "https://media.istockphoto.com/id/185086520/photo/luxury-hotel-room.jpg?s=612x612&w=0&k=20&c=aky5Tl_ShRmxJ1FMuuaVh8FvisggxyFiqdW4o7o8sPc=",
        },{
            name: "Standard Room",
            price: "4000Rs/day",
            image: "https://media.istockphoto.com/id/1050564510/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=ZYEso7dgPl889aYddhY2Fj3GOyuwqliHkbbT8pjl_iM=",
        },
        {
            name: "Executive Room",
            price: "5000Rs/day",
            image: "https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=",
        }
    ]

    const bookHotel1 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[0].image;
        nameTarget.innerHTML = Hotels[0].name;
        priceTarget.innerHTML = Hotels[0].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            update(ref(db, 'Booking Details/'+props.username.username), {
            RoomName: Hotels[0].name,
            Price: Hotels[0].price,
            });
        }

    }

    const bookHotel2 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[1].image;
        nameTarget.innerHTML = Hotels[1].name;
        priceTarget.innerHTML = Hotels[1].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            console.log(props.username.username)
            update(ref(db, 'Booking Details/'+props.username.username), {
            RoomName: Hotels[1].name,
            Price: Hotels[1].price,
            });
        }
    }

    const bookHotel3 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[2].image;
        nameTarget.innerHTML = Hotels[2].name;
        priceTarget.innerHTML =  Hotels[2].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            update(ref(db, 'Booking Details/'+props.username.username), {
            RoomName: Hotels[2].name,
            Price: Hotels[2].price,
            });
        }
    }

    const bookHotel4 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[3].image;
        nameTarget.innerHTML = Hotels[3].name;
        priceTarget.innerHTML = Hotels[3].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            update(ref(db, 'Booking Details/'+props.username.username), {
            RoomName: Hotels[3].name,
            Price: Hotels[3].price,
            });
        }
    }

    const bookHotel5 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[4].image;
        nameTarget.innerHTML = Hotels[4].name;
        priceTarget.innerHTML = Hotels[4].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            update(ref(db, 'Booking Details/'+props.username.username), {
            RoomName: Hotels[4].name,
            Price: Hotels[4].price,
            });
        }
    }
    
    const bookHotel6 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[5].image;
        nameTarget.innerHTML = Hotels[5].name;
        priceTarget.innerHTML = Hotels[5].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            update(ref(db, 'Booking Details/'+props.username.username), {
            RoomName: Hotels[5].name,
            Price: Hotels[5].price,
            });
        }
    }

    const bookHotel7 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[6].image;
        nameTarget.innerHTML = Hotels[6].name;
        priceTarget.innerHTML = Hotels[6].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            update(ref(db, 'Booking Details/'+props.username.username), {
            RoomName: Hotels[6].name,
            Price: Hotels[6].price,
            });
        }
    }

    const bookHotel8 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[7].image;
        nameTarget.innerHTML = Hotels[7].name;
        priceTarget.innerHTML = Hotels[7].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            update(ref(db, 'Booking Details/'+props.username.username), {
            RoomName: Hotels[7].name,
            Price: Hotels[7].price,
            });
        }
    }

    const request = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const request = document.querySelector(".request");
        const cards = document.querySelector(".cards_box");
        request.style.display = "none";
        cards.style.display = "block";
        alert("Your request has been sent");
        
        imageTarget.src = '';
        nameTarget.innerHTML = '';
        priceTarget.innerHTML = '';

    }
    return (
        <div className="num">
        <div className="box">
            <div className="content">
                <div className="text">Find best Rooms</div>
                <div className="target">
                    <div className="trgt">
                    <div className="card">
                        <img src="" id='targetImage' alt="" />
                         <div className="hotel_name" id='targetName'></div>
                        <div className="price" id='targetPrice'></div>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="cards_box">
                        <div className="card" onClick={bookHotel1}>
                            <img src={Hotels[0].image} alt="hotel1"/>
                            <div className="hotel_name">{Hotels[0].name}</div>
                            <div className="price">{Hotels[0].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHotel2}>
                            <img src={Hotels[1].image} alt="hotel2" />
                            <div className="hotel_name">{Hotels[1].name}</div>
                            <div className="price">{Hotels[1].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHotel3}>
                            <img src={Hotels[2].image} alt="hotel3" />
                            <div className="hotel_name">{Hotels[2].name}</div>
                            <div className="price">{Hotels[2].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHotel4}>
                            <img src={Hotels[3].image} alt="hotel4" />
                            <div className="hotel_name">{Hotels[3].name}</div>
                            <div className="price">{Hotels[3].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHotel5}>
                            <img src={Hotels[4].image} alt="hotel5" />
                            <div className="hotel_name">{Hotels[4].name}</div>
                            <div className="price">{Hotels[4].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHotel6}>
                            <img src={Hotels[5].image} alt="hotel6" />
                            <div className="hotel_name">{Hotels[5].name}</div>
                            <div className="price">{Hotels[5].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHotel7}>
                            <img src={Hotels[6].image} alt="hotel7" />
                            <div className="hotel_name">{Hotels[6].name}</div>
                            <div className="price">{Hotels[6].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookHotel8}>
                            <img src={Hotels[7].image} alt="hotel8" />
                            <div className="hotel_name">{Hotels[7].name}</div>
                            <div className="price">{Hotels[7].price}</div>
                        </div>
                    </div>
                    <div className="request">
                        <button className="btn" onClick={request}>Book</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Book;