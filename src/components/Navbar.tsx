import React from 'react'
import { AppBar, Container, Typography, Box, Button, Tooltip, IconButton, Avatar, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom';
const pages = [{
    to: '/',
    lable: "Home"
}, {
    to: '/signup',
    lable: "Signup"
}, {
    to: '/login',
    lable: "Login"
}];


function Navbar() {
    return (
        <AppBar >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography sx={{ mr: 2 }}>
                        SpendWise
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, }}>
                        {pages.map((page) => (
                            <Button
                                component={Link}
                                to={page.to}
                                key={page.lable}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.lable}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar >
            </Container>
        </AppBar>
    )
}

export default Navbar