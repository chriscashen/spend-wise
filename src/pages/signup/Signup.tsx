import React, { useState } from "react";
import styles from "./Signup.module.css";
import { TextField, Button, Typography } from "@mui/material";
import { SignupCredentials } from "../../interfaces/SignupCredentials";
import { useSignup } from "../../hooks/useSignup";
import { SignupType } from "../../types/SignupType";

export default function Signup() {
  const [signupCredentials, setSignupCrendtials] = useState<SignupCredentials>(
    { username: "", confirmUsername: "", password: "", confirmPassword: "" }
  );

  const { signup, isPending, error}: SignupType = useSignup()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setSignupCrendtials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value
    }))
  }

  const handleSignup = ({username, password}: SignupCredentials) => {
    signup(signupCredentials)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const { username, confirmUsername, password, confirmPassword} = signupCredentials
    if(username !== confirmUsername ) {
      console.log("username does not match")
      //set username does not match
      return 
    }

    if(password !== confirmPassword ) {
      console.log("password does not match")
      //set username does not match
      return 
    }

    handleSignup(signupCredentials)
    setSignupCrendtials({ username: "", confirmUsername: "", password: "", confirmPassword: "" })

  }

  return <div><form className={styles["signup-form"]} onSubmit={handleSubmit}>
  <Typography variant="h2">Signup</Typography>
  <TextField
    label="email"
    type="email"
    placeholder="chris@spendwise.com"
    variant="outlined"
    size="small"
    margin="dense"
    name="username"
    value={signupCredentials.username}
    onChange={handleChange}
  />
  <TextField
    label="confirm email"
    type="emial"
    variant="outlined"
    size="small"
    margin="dense"
    name="confirmUsername"
    value={signupCredentials.confirmUsername}
    onChange={handleChange}
  />
  <TextField
    label="password"
    type="password"
    variant="outlined"
    size="small"
    margin="dense"
    name="password"
    value={signupCredentials.password}
    onChange={handleChange}
  />
  <TextField
    label="confirm password"
    type="password"
    variant="outlined"
    size="small"
    margin="dense"
    name="confirmPassword"
    value={signupCredentials.confirmPassword}
    onChange={handleChange}
  />
  <Button variant="contained" type="submit" disabled={isPending}>
    Signup
  </Button>
  {error && <p>{error}</p>}
</form></div>;
}
