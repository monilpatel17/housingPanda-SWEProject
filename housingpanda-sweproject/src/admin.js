import React, {useEffect, useState} from "react";
import { getData } from "./db_connection";
import "./app.css"




function Admin(){
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await getData(); // call the async function
          setEntries(result);
        };
    
        fetchData();
      }, []);



      return (
        <>
          <h1>Admin</h1>
        <div className="App">
          <table>
        <tr>
            <th>Listing_title</th>
            <th>Rent</th>
            <th>Email</th>
            <th>Number Of Rooms</th>
            <th>Address</th>
            <th>Contact</th>
        </tr>
        {entries.map((entry, index) => {
            return (
                <tr key={index}>
                    <td>{entry.listing_title}</td>
                    <td>{entry.rent}</td>
                    <td>{entry.email}</td>
                    <td>{entry.number_of_room}</td>
                    <td>{entry.address}</td>
                    <td>{entry.contact}</td>
                </tr>
            )
        })}
    </table>
        </div>
        </>
      );
    }


    
    
    export default Admin;

