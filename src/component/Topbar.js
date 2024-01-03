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
  Dialog,
  DialogTitle,
  DialogContent,
  Link
} from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

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

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
    '& .MuiDialog-paper': {
        backgroundColor: '#70CBBC',
        backgroundImage: 'none'
    }
  }));
  
  function Topbar(){

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [openAbout, setOpenAbout] = React.useState(false);
    const [openContact, setOpenContact] = React.useState(false);
  
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

        {/* ---------------APPBAR--------------- */}
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
                            <Button><Typography className='m-auto' sx={{ color: 'white', fontWeight: '600', fontSize: 25, display: "inline", fontFamily: "Century Gothic", pl: 5, textTransform: "none"}}>
                              Cat Web
                            </Typography></Button>
                            <Button onClick={() => {setOpenAbout(true)}}><Typography className='m-auto' sx={{ color: 'white', fontWeight: '300', fontSize: 18, display: "inline", fontFamily: "Century Gothic", pl: 5, textTransform: "none"}}>
                              About
                            </Typography></Button>
                            <Button onClick={() => {setOpenContact(true)}}><Typography className='m-auto' sx={{ color: 'white', fontWeight: '300', fontSize: 18, display: "inline", fontFamily: "Century Gothic", pl: 5, textTransform: "none"}}>
                              Contact
                            </Typography></Button>
                        </Box>
                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'block' }}}>
                          <Button sx={{bgcolor: "#0E3831", color: "white", borderRadius: "0 10px 0 10px", px: 4, py: 1, border: "2px solid white", fontWeight: "600", fontSize: 18, mx: 10 }}> Subscribe </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>


         {/* ---------------ABOUT--------------- */}
        <BootstrapDialog
          onClose={()=>{setOpenAbout(false)}}
          aria-labelledby="customized-dialog-title"
          open={openAbout}
        >
          <DialogContent >
            <IconButton
                aria-label="close"
                onClick={() => {setOpenAbout(false)} }
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[800],
                }}
                >
                <CloseIcon />
            </IconButton>
            <Box sx={{width: '100%', p: {lg: 5, md: 2, xs: 2}, textAlign: "center"}}>
                <img src={require('../assets/images/silhouette-cat-animal-of-halloween-free-vector.png')} alt="cat" style={{width: "100px", backgroundColor: "#0E3831", borderRadius: "50px"}}/>
                <Typography sx={{fontFamily: "Century Gothic", mt: 2, fontSize: 28, fontWeight: "800"}} > About the Cat Web </Typography>
                <Typography sx={{fontFamily: "Century Gothic", fontSize: 16}} > by Isteppi </Typography>

                <Typography sx={{fontFamily: "Century Gothic", fontSize: 14, textAlign: "justify", mt: 2}}>
                Welcome to The Cat Web, a website designed and developed by isteppu to showcase the art of React JS. Our mission is to create an immersive and delightful experience for cat enthusiasts while honing our skills in the world of web development.
                </Typography>

                <Typography sx={{fontFamily: "Century Gothic", mt: 2, fontSize: 24}} > Tech Stack </Typography>
                <Typography sx={{fontFamily: "Century Gothic", fontSize: 14, textAlign: "justify", mt: 2}}>
                <i>React JS:</i> We've leveraged the power of React JS to build a dynamic and user-friendly platform. This enables smooth navigation and seamless interactions, providing you with a purr-fect browsing experience.

                <br/><br/><i>Material-UI (MUI):</i> Our layout is crafted with the elegance of Material-UI, a React UI framework that adds a touch of sophistication to the visual elements of The Cat Web. The clean design ensures a sleek and modern aesthetic.

                <br/><br/><i>Google Images and Canva:</i> Our captivating cat images are sourced responsibly from Canva and Google Images, ensuring that we respect copyright regulations while curating a visually stunning gallery for cat enthusiasts.

                <br/><br/><i>ChatGPT Integration:</i> To offer accurate and engaging information about our beloved feline companions, we've seamlessly integrated ChatGPT, developed by OpenAI. This ensures our content is both informative and up-to-date.
                </Typography>

                <Typography sx={{fontFamily: "Century Gothic", mt: 2, fontSize: 24}} > Image Attribution </Typography>
                <Typography sx={{fontFamily: "Century Gothic", fontSize: 14, textAlign: "justify", mt: 2}}>
                Our images are sourced responsibly from Canva and Google Images, respecting copyright regulations and ensuring a diverse and captivating gallery for our users.
                </Typography>

                <Typography sx={{fontFamily: "Century Gothic", mt: 2, fontSize: 24}} > Our Vision </Typography>
                <Typography sx={{fontFamily: "Century Gothic", fontSize: 14, textAlign: "justify", mt: 2}}>
                At The Cat Web, we aspire to be a go-to destination for cat lovers worldwide. Whether you're seeking information about cat breeds, looking for adorable cat photos, or simply want to engage in a community of like-minded individuals, we aim to be your virtual haven.

                <br/><br/>Thank you for joining us on this exciting adventure. Feel free to explore The Cat Web, and may your online experience be as charming and delightful as the cats that inspire us.

                <br/><br/><br/><br/>Purr-sistently yours,
                <br/>The Cat Web Team (isteppu)
                </Typography>
            </Box>
          </DialogContent>
          <Button sx={{m:2, bgcolor: "#08544B"}} variant='contained' autoFocus onClick={() => {setOpenAbout(false)}}>
              Close
          </Button>
        </BootstrapDialog>


        {/* ---------------CONTACT--------------- */}
        <BootstrapDialog
          onClose={()=>{setOpenContact(false)}}
          aria-labelledby="customized-dialog-title"
          open={openContact}
        >
          <DialogContent >
            <IconButton
                aria-label="close"
                onClick={() => {setOpenContact(false)} }
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[800],
                }}
                >
                <CloseIcon />
            </IconButton>
            <Box sx={{width: '100%', p: {lg: 5, md: 2, xs: 2}, textAlign: "center"}}>
                <img src={require('../assets/images/profile.jpg')} alt="cat" style={{width: "100px", backgroundColor: "#0E3831", borderRadius: "50px"}}/>
                <Box sx={{width: "100%", textAlign: "center", mt: 3}}>
                      <Link href="https://www.facebook.com/" color="inherit">
                          <Facebook />
                      </Link>
                      <Link
                          href="https://www.instagram.com/"
                          color="inherit"
                          sx={{ pl: 1, pr: 1 }}
                      >
                          <Instagram />
                      </Link>
                      <Link href="https://www.twitter.com/" color="inherit">
                          <Twitter />
                      </Link>
                </Box>

                <Typography sx={{fontFamily: "Century Gothic", fontSize: 14, textAlign: "justify", mt: 2}}>
                <i>Isteppi</i> is a dedicated developer who embarked on the journey of mastering React JS through the creation of The Cat Web. The project not only showcases technical skills but also reflects isteppi's commitment to creating delightful online spaces for cat enthusiasts.
                </Typography>

                <Typography sx={{fontFamily: "Century Gothic", fontSize: 14, textAlign: "justify", mt: 2}}>
                Git repository: <i><u> https://github.com/Stef1202/cat-web-v1 </u></i> 
                </Typography>

            </Box>
          </DialogContent>
          <Button sx={{m:2, bgcolor: "#08544B"}} variant='contained' autoFocus onClick={() => {setOpenContact(false)}}>
              Close
          </Button>
        </BootstrapDialog>

        
        </>
    )
  }

  export default Topbar;