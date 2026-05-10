import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
  Container,
  Avatar,
  Grid,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    // Validation
    if (!username || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    // Dummy Login Delay
    setTimeout(() => {
      const success = login(username, password);
      if (success) {
        navigate("/dashboard");
      } else {
        setError("Invalid username or password");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={8}
          sx={{
            width: "100%",
            p: 5,
            borderRadius: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: "primary.main",
                width: 56,
                height: 56,
              }}
            >
              <LockOutlined />
            </Avatar>

            <Typography component="h1" variant="h4" fontWeight="bold">
              Login
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 1, mb: 3 }}
            >
              Use admin / password
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ width: "100%" }}
            >
              {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error}
                </Alert>
              )}

              <TextField
                fullWidth
                label="Username"
                type="text"
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  mt: 3,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: "bold",
                }}
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </Button>

              <Grid container sx={{ mt: 2 }}>
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="center"
                  >
                    Demo Credentials:
                    <br />
                    Username: admin
                    <br />
                    Password: password
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
