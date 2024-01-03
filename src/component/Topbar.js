import * as React from 'react';
import {
  AppBar,
  IconButton,
  MenuItem,
  Button,
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  Tooltip,
} from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

let theme = createTheme({
    palette: {
      primary: {
        main: '#3F5066',
      },
      secondary: {
        main: '#edf2ff',
      },
    },
  });
  
  theme = createTheme(theme, {
    palette: {
      info: {
        main: theme.palette.primary.main,
      },
    },
  });

  const settings = [
    {link: "/lobby", text: "Home"},
    {link: "/transactions", text: "Transactions"},
  
  ]

  window.addEventListener('scroll', function() {
      if(window.pageYOffset > 0) {
          let background = document.getElementById("app-bar")
          background.style.background = 'rgba(0, 0, 0, 0.5)'
          background.style.behavior = "smooth"
      }
      else {
          let background = document.getElementById("app-bar")
          background.style.background = "transparent"
      }
  })

  const pages = ['About', 'Contact', 'Subscribe'];
  
  function Topbar(){

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    const userName = "user129309"

    return(
        <>
        <ThemeProvider theme={theme}>
            <AppBar id="app-bar" position="fixed" sx={{ background: "transparent" , boxShadow: 'none' , zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Container maxWidth="xxl">
                    <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                      >
                        <MenuIcon />
                      </IconButton>
                          <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                              display: { xs: 'block', md: 'none' },
                            }}
                          >
                            {pages.map((page) => (
                              <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page}</Typography>
                              </MenuItem>
                            ))}
                          </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, p: 1, display: { xs: 'none', md: 'block' }}}>
                            <img src={require('../assets/images/silhouette-cat-animal-of-halloween-free-vector.png')} alt="cat" style={{width: "70px"}}/>
                            <a href='#'><Typography className='m-auto' sx={{ color: 'white', fontWeight: '600', fontSize: 25, display: "inline", fontFamily: "Century Gothic", pl: 5}}>
                              Cat Web
                            </Typography></a>
                            <a href='#'><Typography className='m-auto' sx={{ color: 'white', fontWeight: '300', fontSize: 18, display: "inline", fontFamily: "Century Gothic", pl: 5}}>
                              About
                            </Typography></a>
                            <a href='#'><Typography className='m-auto' sx={{ color: 'white', fontWeight: '300', fontSize: 18, display: "inline", fontFamily: "Century Gothic", pl: 5}}>
                              Contact
                            </Typography></a>
                        </Box>
                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'block' }}}>
                          <Button sx={{bgcolor: "#0E3831", color: "white", borderRadius: "0 10px 0 10px", px: 4, py: 1, border: "2px solid white", fontWeight: "600", fontSize: 18, mx: 10 }}> Subscribe </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
        </>
    )
  }

  export default Topbar;