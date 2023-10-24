import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import './Home.css';
import axios from 'axios';


const Home = () => {
  const customFontStyle = {
    fontFamily: 'cursive, "Comic Sans MS", sans-serif', // Change to your desired font
    fontSize: '45px', // Change to your desired font size
    color: 'purple',

  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/');
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function selectAll(){
    console.log("select all selected");
    // if already selected uncheck everything
    // else check everything 
  } 
   
  return (
    <Container
      maxWidth="sm"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
      }}
    >
      <Typography variant="h3" gutterBottom>
        🤖 Enter the URL :
      </Typography>

      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField 
          variant="standard"
          size="large"
          InputProps={{
            style: {
              ...customFontStyle, 
              width: '100%'
            },
          }}
        />


  <div class="checkbox-label">
  <div class="checkbox-label">
    <input type="checkbox" id="opt5" name="myCheckbox" value="opt5" class="large-checkbox" onChange={()=> selectAll()}/>
    <label for="opt1"><h3>Select All</h3></label>
    </div>
    <input type="checkbox" id="opt1" name="myCheckbox" value="opt1" class="large-checkbox" />
    <label for="opt1"><h3>Rabin-Karp</h3></label>
  </div>
  <div class="checkbox-label">
    <input type="checkbox" id="opt2" name="myCheckbox" value="opt2" class="large-checkbox" />
    <label for="opt2"><h3>Suffix Tree</h3></label>
  </div>
  <div class="checkbox-label">
    <input type="checkbox" id="opt3" name="myCheckbox" value="opt3" class="large-checkbox" />
    <label for="opt3"><h3>Suffix Array</h3></label>
  </div>
  <div class="checkbox-label">
    <input type="checkbox" id="opt4" name="myCheckbox" value="opt4" class="large-checkbox" />
    <label for="opt4"><h3>Naive String Matching</h3></label>

    <div class="checkbox-label">
    <input type="checkbox" id="opt5" name="myCheckbox" value="opt5" class="large-checkbox" />
    <label for="opt1"><h3>KMP algorithm</h3></label>
  </div>

  </div>

    <Button
     variant="contained"
     color="secondary"
     style={{ marginTop: '20px', fontSize: '1.25rem', padding: '15px 40px' }}
    >
    ANALYZE
    </Button>

      </form>
    </Container>
  );
};

export default Home;
