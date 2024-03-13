import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://crud-eta-one.vercel.app/")
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  });

  const handleDelete = (id) => {
    axios
      .delete(`https://crud-eta-one.vercel.app/${id}`)
      .then((response) => {
        setUsers(response.data);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Link to="/create">
        <Button variant="contained" sx={{ mb: 4 }}>
          Add Users
        </Button>
      </Link>
      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.email}>
            <Card>
              <CardContent>
                <Typography variant="h4">{user.name}</Typography>
                <Typography variant="body1">{user.email}</Typography>
                <Typography vaariant="body2">{user.age}</Typography>
              </CardContent>
              <CardActions>
                <Link to={`/update/${user._id}`}>
                  <Button variant="text">Edit</Button>
                </Link>
                <Button
                  variant="contained"
                  onClick={(e) => {
                    handleDelete(user._id);
                  }}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Users;
