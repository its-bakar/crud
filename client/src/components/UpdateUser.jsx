import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/getUser/${id}`)
      .then((response) => {
        console.log(response);
        setName(response.data.name);
        setEmail(response.data.email);
        setAge(response.data.age);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/updateUser/${id}`, { name, email, age })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyItems="center"
      alignItems="center"
      height="100%"
    >
      <Card sx={{ p: 4, mx: "auto" }}>
        <Typography variant="h2">Update User</Typography>
        <form onSubmit={Update}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={4}
            marginTop={4}
          >
            <Box width="100%">
              <Typography>Name</Typography>
              <TextField
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box width="100%">
              <Typography>Email</Typography>
              <TextField
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box width="100%">
              <Typography>Age</Typography>
              <TextField
                fullWidth
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Box>
          </Box>
          <Button
            type="submit"
            sx={{ mt: 4 }}
            variant="contained"
            color="primary"
          >
            Update
          </Button>
        </form>
      </Card>
    </Box>
  );
};

export default UpdateUser;
