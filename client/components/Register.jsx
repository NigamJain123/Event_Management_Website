import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('male'); 
  const [event, setEvent] = useState('none'); 

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: name,
      age: age,
      email: email,
      contact: contact,
      gender: gender,
      event: event,
    };

    axios.post("http://localhost:8000/event-registration", userData)
      .then((res) => {
        navigate("/events");
      })
      .catch((err) => {
        console.log("Error:", err);
        alert("An error occurred during registration. Please try again.");
      });
  }

  return (
    <>
      <Navbar />
      <section className="event-registration-home">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <input type="text" placeholder="Your Name" name="name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="off" required />
          <input type="number" placeholder="Your Age" name="age" value={age} onChange={(e) => setAge(e.target.value)} autoComplete="off" required />
          <input type="email" placeholder="Your Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" required />
          <input type="number" placeholder="Contact No." name="contact" value={contact} onChange={(e) => setContact(e.target.value)} autoComplete="off" required />
          <div className="event-gender">
            <p>Gender:</p>
            <input type="radio" id="check-male" name="gender" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} required />
            <label htmlFor="check-male">Male</label>
            <input type="radio" id="check-female" name="gender" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} required />
            <label htmlFor="check-female">Female</label>
          </div>
          <div className="event-select">
            <p>Select Event:</p>
            <select name="event" value={event} onChange={(e) => setEvent(e.target.value)} required>
              <option value="none">Select</option>
              <option value="Auction Event">Auction Event</option>
              <option value="Web3 Event">Web3 Event</option>
              <option value="Award Night">Award Night</option>
            </select>
          </div>
          <input type="submit" className="about-btn" />
        </form>
      </section>
    </>
  );
}

export default Register;
