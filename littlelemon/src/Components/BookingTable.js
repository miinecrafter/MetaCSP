import './BookingTable.css';
import {useState, useEffect} from 'react';
import { fetchAPI, submitAPI } from '../API';
import {useNavigate, Routes, Route} from 'react-router-dom';
import BookingStatus from './BookingStatus.js';

export default function BookingTable() {
    const[availableTimes, setAvailableTimes] = useState([1, 2, 3, 4, 5]);
    const[date, setDate] = useState(null);
    const[time, setTime] = useState(null);
    const[guests, setGuests] = useState(null);
    const[occasion, setOccasion] = useState(null);
    const[formStatus, setFormStatus] = useState(null);

    const navigate = useNavigate();

    function validate(date, guests){
        return guests > 0 && guests <= 40 && date.substring(0, 4).parseInt() > 2023;
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(date + " " + time + " " + guests + " " + occasion);
        if(date == null || time == null || guests == null || occasion == null) {setFormStatus(false); return;}
        const obj = {date, time, guests, occasion};
        let res = submitAPI(obj);
        console.log(res);
        res = res && validate(date, time, guests);
        if(res) setFormStatus(true);
        else setFormStatus(false);
    }
    async function initializeTimes(date) {
        let times;
        const newDate = new Date();
        if(date != null) times = fetchAPI(newDate);
        console.log(times);
        setAvailableTimes(times);
    }
    useEffect(() => {
        console.log(date);
        initializeTimes(date);
        console.log(formStatus);
        if(formStatus == null) return;
        if(formStatus){
            navigate("/success");
        }
        else{
            navigate("/failed")
        };
    }, [date, formStatus]);

    return (
        
        <div className="form">
            {/* <Routes>
                <Route path="/success" element={<BookingStatus status="Form submitted successfully!"/>} />
                <Route path="/failed" element={<BookingStatus status="Form failed. Please answer all fields."/>} />
            </Routes> */}
            <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" onChange={(e) => setDate(e.target.value)} />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " onChange={(e) => setTime(e.target.value)}>
                    <option></option>
                    {availableTimes && availableTimes.map((time) => (
                        <option>{time}</option>
                    ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" min="1" max="10" id="guests"  onChange={(e) => setGuests(e.target.value)} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" onChange={(e) => setOccasion(e.target.value)}>
                    <option></option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" onClick={(e) => handleSubmit(e)} />
            </form>
        </div>
    );
}