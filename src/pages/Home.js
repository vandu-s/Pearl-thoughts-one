import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "../components/Card/Card";
import axios from "axios";
import Button from "@mui/material/Button";

const Filter = () => {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [visible, setVisible] = useState(4);

  const getUsers = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);
  const loadMore = () => {
    setVisible(visible + 4);

    if (visible >= 16) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };
  console.log(visible, flag);
  const renderCard = (user, index) => {
    return (
      <Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "6px 12px",
            borderRadius: "6px",
            border: "1px solid #D3D3D3",
            margin: "10px",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <p>{index + 1}. &nbsp; </p>

          <p>{user.title}</p>
        </Box>
      </Box>
    );
  };
  return (
    <Container fixed>
      <div className="center">
        <h1>List of Data</h1>

        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Box
            sx={{
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            {data.slice(0, visible).map(renderCard)}
            {flag === true ? (
              <Button variant="outlined" disabled>
                Load More
              </Button>
            ) : (
              <Button variant="outlined" onClick={loadMore}>
                Load More
              </Button>
            )}
          </Box>
        </Grid>
      </div>
    </Container>
  );
};

export default Filter;
