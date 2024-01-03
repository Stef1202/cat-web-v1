import * as React from 'react';
import { Box, Grid, Link, Typography, Container, IconButton, Divider } from '@mui/material';
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

// Replace these with your own social media URLs
const socialMediaLinks = {
  facebook: '#',
  twitter: '#',
  instagram: '#',
  YouTube: "#"
};

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: '#0E3831',
        color: 'white',
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
        fontFamily: 'Century Gothic'
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Typography variant="h6" color="white" sx={{fontFamily: "Century Gothic", fontWeight: "700"}} gutterBottom>
                <img src={require('../assets/images/silhouette-cat-animal-of-halloween-free-vector.png')} alt="cat" style={{width: "100px"}}/>
                    <p>Cat Web</p>
                </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <Typography variant="subtitle1" color="white" sx={{fontFamily: "Century Gothic", fontWeight: "600", fontSize: 14}} gutterBottom>
              PRETTY CAT WEBSITE
            </Typography>
            <Link href="https://www.catster.com/" color="inherit" display="block">Catster</Link>
            <Link href="https://ecat.cfa.org/client/welcome.aspx" color="inherit" display="block">The Cat Fanciers' Association</Link>
            <Link href="https://www.boredpanda.com/animals/cats/" color="inherit" display="block">Bored Panda - Cats Section</Link>
            <Link href="https://www.nationalgeographic.com/animals" color="inherit" display="block">National Geographic - Animals Section</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <Typography variant="subtitle1" color="white" sx={{fontFamily: "Century Gothic", fontWeight: "600", fontSize: 14}}  gutterBottom>
                CAT COMMUNITIES
            </Typography>
            <Link href="https://thecatsite.com/" color="inherit" display="block">The Cat Site</Link>
            <Link href="https://www.reddit.com/r/cats/" color="inherit" display="block">Reddit - r/cats</Link>
            <Link href="https://www.catforum.com/" color="inherit" display="block">Cat Forum</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <Typography variant="subtitle1" color="white" sx={{fontFamily: "Century Gothic", fontWeight: "600", fontSize: 14}} gutterBottom>
              CAT SUPPLIES
            </Typography>
            <Link href="https://www.chewy.com/" color="inherit" display="block">Chewy</Link>
            <Link href="https://www.amazon.com/pet-shops-dogs-cats-hamsters-kittens/b?ie=UTF8&node=2619533011" color="inherit" display="block">Amazon - Pet Supplies</Link>
            <Link href="https://www.petsmart.com/" color="inherit" display="block">PetSmart</Link>
            <Link href="https://catladybox.com/shop/all/" color="inherit" display="block">CatLadyBox</Link>
          </Grid>
        </Grid>
        <Divider sx={{bgcolor: "white", my: 3}}></Divider>

        <Box sx={{width: "100%", textAlign: "center"}}>
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
            <Link href="https://www.youtube.com/" color="inherit" sx={{ pl: 1, pr: 1 }}>
                <YouTube />
            </Link>
       </Box>
        <Typography variant="body2" color="white" align="center" sx={{ pt: 4 }}>
            Copyright @ 2024. Designed by Isteppi
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;