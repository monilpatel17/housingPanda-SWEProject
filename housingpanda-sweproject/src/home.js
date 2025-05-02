import { useNavigate } from 'react-router-dom';
import React from 'react';



function Home(){
    const navigate = useNavigate();
    return ( 
      <div>
        <center>
        <h1>Welcome to Housing Panda</h1>
        <h3>Who are you?</h3>
        <button style={{margin: "10px"}} onClick={() => navigate('/admin')}>Admin</button>
        <button onClick={() => navigate('/user')}>User</button>
        </center>
      </div>
    );
  }

  export default Home;

