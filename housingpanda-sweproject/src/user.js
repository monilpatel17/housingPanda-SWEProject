import React, { useState} from "react";
import {firestore} from "./db_connection";
import { addDoc, collection } from "@firebase/firestore"


function User(){
    
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState(
        {
            listing_title: "",
            rent: "",
            number_of_room: "",
            address: "",
            contact: "",
            email: ""
        }
    );

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true);

        try {
            const ref = collection(firestore, "formData");
            await addDoc(ref, formData);
            console.log("Data saved!");
            
            window.location.reload();


        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <div>
            <center>
            <h2>Enter your details</h2>
            <form onSubmit={handleSubmit}>
                listing_title: <input type="text" name="listing_title" value={formData.listing_title} onChange={handleChange} /><br></br><br></br>

                Rent: <input type="number" name = "rent" value={formData.rent}
                onChange={handleChange} style={{margin: "10px"}} placeholder="Rent " />

                Number Of Rooms: <input type="number" name = "number_of_room" value={formData.number_of_room}
                onChange={handleChange} placeholder="Number of Rooms " /><br></br><br></br>

                Address: <textarea name = "address" value={formData.address}
                onChange={handleChange} placeholder="Address " /><br></br><br></br>

                Contact: <input type="number" name = "contact" value={formData.contact}
                onChange={handleChange} style={{margin: "10px"}} placeholder="Contact " />

                Email: <input type="email" name = "email" value={formData.email}
                onChange={handleChange} placeholder="Email " /><br></br><br></br>


                <button type="submit">Submit</button>

            </form>
            </center>

            {isSubmitted && (
            <div className="attention-box">
            Form submitted successfully!
            </div>
        )}
        </div>
    );
}




export default User;

