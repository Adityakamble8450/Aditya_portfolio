import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import {toast , ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function Form() {
  const [Email, setEmail] = useState("");
  const [massage, setmassage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle form submission logic here

    // Display a success toast notification
    toast.success("Message sent successfully!", {
      position: "bottom-center",
      autoClose: 5000, // Close the toast after 5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Reset form fields
    setEmail("");
    setmassage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex flex-col w-full max-w-screen-md mx-auto"
    >
      <input
        name="senderemail"
        required={true}
        maxLength={60}
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-14 text-primary-foreground input"
        title="Email"
        placeholder="Email"
        type="email"
      />
      <textarea
        name="message"
        value={massage}
        onChange={(e)=> setmassage(e.target.value)}
        required={true}
        maxLength={600}
        className="h-[20ch] my-5 text-primary-foreground input"
        placeholder="Message"
      />
      <SubmitButton />
      <ToastContainer />
    </form>
  );
}
