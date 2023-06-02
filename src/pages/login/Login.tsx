import React, { useState } from 'react'
import styles from "./Login.module.css"
import { Button, TextField, Typography } from '@mui/material'

interface Credentials {
  username: string;
  password: string;
}

export default function Login() {
  const [credentials, setCredentials] = useState<Credentials>({ username: '', password: '' })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value
    }))
  };

  const handleLogin = ({username, password}: Credentials):void => {
    console.log('Login', username, password )
  }

  const handleSubmit = (event: React.FormEvent):void => {
    event.preventDefault();
    handleLogin(credentials)
    setCredentials({ username: '', password: '' })
  }
  return (
    <form className={styles['login-form']} onSubmit={handleSubmit}>
      <Typography variant='h2'>Login</Typography>
      <TextField
        label="email"
        type='email'
        placeholder='chris@spendwise.com'
        variant='outlined'
        size='small'
        margin="dense"
        name='username'
        value={credentials.username}
        onChange={handleChange}
      />
      <TextField
        label="password"
        type='password'
        variant='outlined'
        size='small'
        margin="dense"
        name='password'
        value={credentials.password}
        onChange={handleChange}
      />
      <Button variant='contained' type="submit">Login</Button>
    </form>
  )
}
