import React, { useState } from "react";
import styles from "./Login.module.css";
import { Button, TextField, Typography } from "@mui/material";

interface LoginCredentials {
  username: string;
  password: string;
}

export default function Login() {
  const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({
    username: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginCredentials((prevLoginCredentials) => ({
      ...prevLoginCredentials,
      [name]: value,
    }));
  };

  const handleLogin = ({ username, password }: LoginCredentials): void => {
    // HANDLE FIREBASE LOGIN REQUEST
    console.log("Login", username, password);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    handleLogin(loginCredentials);
    setLoginCredentials({ username: "", password: "" });
  };
  return (
    <form className={styles["login-form"]} onSubmit={handleSubmit}>
      <Typography variant="h2">Login</Typography>
      <TextField
        label="email"
        type="email"
        placeholder="chris@spendwise.com"
        variant="outlined"
        size="small"
        margin="dense"
        name="username"
        value={loginCredentials.username}
        onChange={handleChange}
      />
      <TextField
        label="password"
        type="password"
        variant="outlined"
        size="small"
        margin="dense"
        name="password"
        value={loginCredentials.password}
        onChange={handleChange}
      />
      <Button variant="contained" type="submit">
        Login
      </Button>
    </form>
  );
}
