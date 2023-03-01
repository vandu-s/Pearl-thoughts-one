import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "../components/Card/Card";
import axios from "axios";
import Button from "@mui/material/Button";

const Filter = () => {
  const [data, setData] = useState([]);

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
    if (data.length <= 20) {
      setVisible(visible + 4);
    }
  };
  const renderCard = (user, index) => {
    return <Card>{user.title}</Card>;
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
            <Button variant="outlined" onClick={loadMore}>
              Load More
            </Button>
          </Box>
        </Grid>
      </div>
    </Container>
  );
};

export default Filter;
