import React, { useState } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { supabase } from "../service/supabaseClient";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    repeatPassword: "",
  });

  const navigate = useNavigate();
  const register = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
    });
    if (error) {
      toast.error(error.message);
      console.log(error);
    } else {
      toast.success("Registration successful 🎉.");
      navigate("/login");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password !== user.repeatPassword) {
      toast.error("Passwords do not match 💀");
    } else {
      register();
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Name"
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Repeat Password"
              type="password"
              name="repeatPassword"
              value={user.repeatPassword}
              onChange={handleChange}
              required
            />
          </Box>
          <Button variant="contained" color="primary" type="submit">
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default RegisterForm;
