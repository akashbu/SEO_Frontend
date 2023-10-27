import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import "./Home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [responseData, setResponseData] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const customFontStyle = {
    fontFamily: 'cursive, "Comic Sans MS", sans-serif', // Change to your desired font
    fontSize: "45px", // Change to your desired font size
    color: "purple",
  };


  const postString = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("http://127.0.0.1:5000/", {
        data: inputValue,
      });
      localStorage.setItem("responseData", JSON.stringify(response.data));
      navigate("/main");
    } catch (error) {
      console.error("Error posting string:", error);
    } finally {
      setIsLoading(false); 
    }
  };

  function selectAll() {
    console.log("select all selected");
    // if already selected uncheck everything
    // else check everything
  }

  return isLoading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress style={{ margin: "20px", marginBottom:"30px" }} />
      <Typography variant="h6">Fetching Data, please wait...</Typography>
    </div>
  ) : (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Typography variant="h3" gutterBottom>
        🤖 Enter the URL :
      </Typography>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          variant="standard"
          size="large"
          onChange={(e) => setInputValue(e.target.value)}
          InputProps={{
            style: {
              ...customFontStyle,
              width: "100%",
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
          style={{
            marginTop: "20px",
            fontSize: "1.25rem",
            padding: "15px 40px",
          }}
          onClick={() => {
            postString()
          }}
        >
          ANALYZE
        </Button>
      </form>
    </Container>
  );
};

export default Home;
