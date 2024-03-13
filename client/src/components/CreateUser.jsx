import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/createUser", { name, email, age })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
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
        <Typography variant="h2">Create User</Typography>
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={4}
            marginTop={4}
          >
            <TextField
              label="Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Age"
              fullWidth
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Box>
          <Button
            type="submit"
            sx={{ mt: 4 }}
            variant="contained"
            color="primary"
          >
            Create
          </Button>
        </form>
      </Card>
    </Box>
  );
};

export default CreateUser;
