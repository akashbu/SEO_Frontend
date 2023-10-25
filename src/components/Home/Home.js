import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import './Home.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const [inputValue, setInputValue] = useState("");
  const [responseData, setResponseData] = useState(null);
  const navigate = useNavigate();


  const customFontStyle = {
    fontFamily: 'cursive, "Comic Sans MS", sans-serif', // Change to your desired font
    fontSize: '45px', // Change to your desired font size
    color: 'purple',

  };

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('http://127.0.0.1:5000/');
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);


  const postString = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/', { data: inputValue });
      setResponseData(response.data);
      console.log(response.data)
      localStorage.setItem('responseData', JSON.stringify(response.data));
    } catch (error) {
      console.error("Error posting string:", error);
    }
  };
  
  
// const handle = () => {
//   const post_array = [];
//   post_array.push({
//     // "location_code": 2840,
//     "keywords": ["Iphone 12"],
//     // "date_from": "2021-08-01",
//     // "search_partners": true 
//   });
//     axios({
//       method: 'post',
//       url: 'https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live',
//       auth: {
//         username: 'akbutala@csu.fullerton.edu',
//         password: 'f99eed1e824dce53'
//       },
//       data: post_array,
//       headers: {
//         'content-type': 'application/json'
//       }
//     }).then(function (response) {
//       var result = response['data']['tasks'];
//       // Result data
//       console.log(result);
//     }).catch(function (error) {
//       console.log(error);
//     });
    

//   }


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
          onChange={(e) => setInputValue(e.target.value)}
          InputProps={{
            style: {
              ...customFontStyle, 
              width: '100%'
            },
          }}
        />

{/* 
  <div className="checkbox-label">
  <div className="checkbox-label">
    <input type="checkbox" id="opt5" name="myCheckbox" value="opt5" className="large-checkbox" onChange={()=> selectAll()}/>
    <label htmlFor="opt1"><h3>Select All</h3></label>
    </div>
    <input type="checkbox" id="opt1" name="myCheckbox" value="opt1" className="large-checkbox" />
    <label htmlFor="opt1"><h3>Rabin-Karp</h3></label>
  </div>
  <div className="checkbox-label">
    <input type="checkbox" id="opt2" name="myCheckbox" value="opt2" className="large-checkbox" />
    <label htmlFor="opt2"><h3>Suffix Tree</h3></label>
  </div>
  <div className="checkbox-label">
    <input type="checkbox" id="opt3" name="myCheckbox" value="opt3" className="large-checkbox" />
    <label htmlFor="opt3"><h3>Suffix Array</h3></label>
  </div>
  <div className="checkbox-label">
    <input type="checkbox" id="opt4" name="myCheckbox" value="opt4" className="large-checkbox" />
    <label htmlFor="opt4"><h3>Naive String Matching</h3></label>

    <div className="checkbox-label">
    <input type="checkbox" id="opt5" name="myCheckbox" value="opt5" className="large-checkbox" />
    <label htmlFor="opt1"><h3>KMP algorithm</h3></label>
  </div>

  </div> */}

    <Button
     variant="contained"
     color="secondary"
     style={{ marginTop: '20px', fontSize: '1.25rem', padding: '15px 40px' }}
     onClick={() => {
      postString();
      navigate('/about');
    }}
    >
    ANALYZE
    </Button>

      </form>
    </Container>
  );
};

export default Home;
