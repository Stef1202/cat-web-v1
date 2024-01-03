import React, {useEffect, useState} from 'react'
import { 
    Box, 
    Grid, 
    Toolbar, 
    Typography, 
    Button, 
    IconButton,
    Container,
    Divider,
    Input,
    Collapse,
    TextField,
 } from '@mui/material'
import Swal from 'sweetalert2'
import { styled } from '@mui/material/styles';
import Topbar from '../component/Topbar';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Masonry from '@mui/lab/Masonry';
import Footer from '../component/Footer';


const Catbreeds = [
  { img: "abyssinian-1.jpg", name: "Abyssinian", link: "https://www.catbreedslist.com/all-cat-breeds/abyssinian.html" },
  { img: "american-shorthair-1.jpg", name: "American Short Hair", link: "https://www.catbreedslist.com/all-cat-breeds/american-shorthair.html" },
  { img: "bengal-1.jpg", name: "Bengal", link: "https://www.catbreedslist.com/all-cat-breeds/bengal.html" },
  { img: "british-shorthair-1.jpg", name: "British Short Hair", link: "https://www.catbreedslist.com/all-cat-breeds/british-shorthair.html" },
  { img: "cornish-rex-1.jpg", name: "Cornish Rex", link: "https://www.catbreedslist.com/all-cat-breeds/cornish-rex.html" },
  { img: "devon-rex-1.jpg", name: "Devon Rex", link: "https://www.catbreedslist.com/all-cat-breeds/devon-rex.html" },
  { img: "exotic-shorthair-1.jpg", name: "Exotic Short Hair", link: "https://www.catbreedslist.com/all-cat-breeds/exotic-shorthair.html" },
  { img: "maine-coon-1.jpg", name: "Main Coone", link: "https://www.catbreedslist.com/all-cat-breeds/maine-coon.html" },
  { img: "norwegian-forest-cat-1.jpg", name: "Norwegian Forest Cat", link: "https://www.catbreedslist.com/all-cat-breeds/norwegian-forest-cat.html" },
  { img: "oriental-shorthair-1.jpg", name: "Oriental Short Hair", link: "https://www.catbreedslist.com/all-cat-breeds/oriental-shorthair.html" },
  { img: "persian-cat-1.jpg", name: "Persian", link: "https://www.catbreedslist.com/all-cat-breeds/persian-cat.html" },
  { img: "ragdoll-1.jpg", name: "Ragdoll", link: "https://www.catbreedslist.com/all-cat-breeds/ragdoll.html" },
  { img: "scottish-fold-1.jpg", name: "Scottish Fold", link: "https://www.catbreedslist.com/all-cat-breeds/scottish-fold.html" },
  { img: "siamese-1.jpg", name: "Siamese", link: "https://www.catbreedslist.com/all-cat-breeds/siamese.html" },
  { img: "sphynx-1.jpg", name: "Sphynx", link: "https://www.catbreedslist.com/all-cat-breeds/sphynx.html" },
]

const CatbreedsMore = [
  { img: "russian-blue-1.jpg", name: "Russian Blue", link: "https://www.catbreedslist.com/all-cat-breeds/russian-blue.html" },
  { img: "siberian-1.jpg", name: "Siberian", link: "https://www.catbreedslist.com/all-cat-breeds/siberian.html" },
  { img: "burmese-1.jpg", name: "Burmese", link:"https://www.catbreedslist.com/all-cat-breeds/burmese.html" },
  { img: "birman-1.jpg", name: "Birman", link: 'https://www.catbreedslist.com/all-cat-breeds/birman.html' },
  { img: "tonkinese-1.jpg", name: "Tonkinese", link: 'https://www.catbreedslist.com/all-cat-breeds/tonkinese.html' },
  { img: "ocicat-1.jpg", name: "Ocicat", link: "https://www.catbreedslist.com/all-cat-breeds/ocicat.html" },
  { img: "selkirk-rex-1.jpg", name: "Selkirk Rex", link: "https://www.catbreedslist.com/all-cat-breeds/selkirk-rex.html" },
  { img: "ragamuffin-cat-1.jpg", name: "Ragamuffin", link: "https://www.catbreedslist.com/all-cat-breeds/ragamuffin-cat.html" },  
  { img: "american-curl-1.jpg", name: "American Curl", link:"https://www.catbreedslist.com/all-cat-breeds/american-curl.html" },
  { img: "japanese-bobtail-1.jpg", name: "Japanese Bobtail", link:"https://www.catbreedslist.com/all-cat-breeds/japanese-bobtail.html" },
  { img: "manx-1.jpg", name: "Manx", link: "https://www.catbreedslist.com/all-cat-breeds/manx.html" },
  { img: "egyptian-mau-1.jpg", name: "Egyptian Mau", link: "https://www.catbreedslist.com/all-cat-breeds/egyptian-mau.html" },
  { img: "somali-1.jpg", name: "Somali", link: "https://www.catbreedslist.com/all-cat-breeds/somali.html" },
  { img: "balinese-1.jpg", name: "Balinese", link: "https://www.catbreedslist.com/all-cat-breeds/balinese.html" },
  { img: "singapura-1.jpg", name: "Singapura", link: "https://www.catbreedslist.com/all-cat-breeds/singapura.html" },
]

const Gallery = [
  'Rectangle 7.png',
  'Rectangle 8.png',
  'Rectangle 9.png',
  'Rectangle 14.png',
  'Rectangle 10.png',
  'Rectangle 13.png',
  'Rectangle 12.png',
  'Rectangle 11.png',
]


function Home() {
  const [query, setQuery] = useState("")
  const [open, setOpen] = React.useState(false);
  

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>

        {/* ---------------TOPBAR--------------- */}
        <Topbar />


        {/* ---------------BANNER--------------- */}
        <Grid container spacing={0}>
          <Grid item  lg={6} md={12} xs={12} >
            <Box sx={{ my: {lg: 40, md: 20, xs: 20}}}>
              <Typography component="h1" sx={{ textAlign: {lg: "right", md: "center", xs: "center"}, color: 'white', fontWeight: '400', fontSize: {lg: 100, xs: 60, md: 60}, fontFamily: "Changa One", wordWrap: "break-word", lineHeight: 0.8, pb: 2}}>
                Feline<br/>Elegance
              </Typography>
              <Typography sx={{ textAlign: {lg: "right", md: "center", xs: "center"}, color: 'white', fontWeight: '100', fontSize: 24, fontFamily: "Changa", wordWrap: "break-word", lineHeight: 1}}>
                Embrace Cat-Infused Sophistication:<br/> Elevate Your Space with Themes Inspired<br/> by Feline Elegance
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={6} sx={{textAlign: "center", display: {lg: "block", md: "none", xs: "none"}}}>
            <img  height="100%" src={require('../assets/bg/b7fd24b2384e84c69d5716a20e17fb5d.jpg')}/>
          </Grid>
        </Grid>


        {/* ---------------WHY CATS--------------- */}
        <Box component="section" bgcolor={"#0E3831"} sx={{p: 8}}>
          <Typography component="h1" sx={{ textAlign: "center", color: 'white', fontWeight: '800', fontSize: 48, fontFamily: "Century Gothic", textTransform: "uppercase" }}>
            Why Cats?
          </Typography>
          <Divider sx={{ bgcolor: "white", height: 3, mx: {md: 0, lg: 90}, mb: 5}} variant='middle' />
          <Typography component="h1" sx={{ textAlign: "center", mb: 5,color: 'white', fontWeight: '100', fontSize: 24, fontFamily: "Century Gothic", px: {md: 2, lg: 50} }}>
            Discover 'Why Cats': Unveil the magic behind the enigmatic charm, unique behaviors, and joy that cats bring into our lives.
          </Typography>
          <Grid container spacing={8} sx={{px: {md: 1, lg: 30}}}>
            <Grid item xs={12} md={12} lg={4}>
              <Box sx={{bgcolor: "#D3EDDC", px: 4, py: 6, borderRadius: 5}}>
                <Typography component="h1" sx={{ textAlign: "center", color: 'black', fontWeight: '600', fontSize: 16, fontFamily: "Inter", fontStyle: 'italic' }}>
                  Graceful Companions
                </Typography>
                <img alt="cat-pic" width="100%" src={require('../assets/images/3.png')}/>
                <Typography component="h1" sx={{ textAlign: "center", color: 'black', fontWeight: '200', fontSize: 14, fontFamily: "Inter" }}>
                  Cats embody grace and charm. Their sleek movements and enigmatic aura make them captivating, refined companions
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
              <Box sx={{bgcolor: "#D3EDDC", px: 4, py: 6, borderRadius: 5}}>
                <Typography component="h1" sx={{ textAlign: "center", color: 'black', fontWeight: '600', fontSize: 16, fontFamily: "Inter", fontStyle: 'italic' }}>
                  Effortless Poise
                </Typography>
                <img alt="cat-pic" width="100%" src={require('../assets/images/2.png')}/>
                <Typography component="h1" sx={{ textAlign: "center", color: 'black', fontWeight: '200', fontSize: 14, fontFamily: "Inter" }}>
                  Whether lounging in sunlight or gracefully navigating a room, cats move with innate poise, adding sophistication to every gesture
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={4} >
              <Box sx={{bgcolor: "#D3EDDC", px: 4, py: 6, borderRadius: 5}}>
                <Typography component="h1" sx={{ textAlign: "center", color: 'black', fontWeight: '600', fontSize: 16, fontFamily: "Inter", fontStyle: 'italic' }}>
                  Luxurious Coats
                </Typography>
                <img alt="cat-pic" width="100%" src={require('../assets/images/1.png')}/>
                <Typography component="h1" sx={{ textAlign: "center", color: 'black', fontWeight: '200', fontSize: 14, fontFamily: "Inter" }}>
                  Cloaked in opulent fur, cats showcase a commitment to regal appearances with exquisite patterns and colors
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>


        {/* ---------------CAT BREEDS--------------- */}
        <Box component="div" className='meow-bg' sx={{p: {lg: 8, md: 2, xs:2}, height:"100%", position: "relative"}}>
          <Typography component="h1" sx={{ textAlign: "center", color: 'white', fontWeight: '800', fontSize: 48, fontFamily: "Century Gothic", textTransform: "uppercase", position: "relative" }}>
            Cat breeds
          </Typography>
          <Divider sx={{ bgcolor: "white", height: 3, mx: {lg: 90, md: 2, xs: 2}, mb: 5, position: "relative"}} variant='middle' />
          <Typography component="h1" sx={{ textAlign: "center", mb: 5,color: 'white', fontWeight: '100', fontSize: 24, fontFamily: "Century Gothic", px:{lg: 50, md: 2, xs: 2} }}>
            Uncover Cat Breeds: Explore the unique traits and captivating history of various feline companions, from majestic Maine Coons to elegant Siamese
          </Typography>
          <Box sx={{bgcolor: "#0E3831", px: 3, position: "relative", mb: 5, py: 2, textAlign: "center", mx: {lg: 20, md: 2, xs: 2}}}>
            <Grid container spacing={0}>
              <Grid item xs={12} md={12} lg={12}>
                <input type='text' onChange={event => setQuery(event.target.value)} placeholder='Search...' style={{width: "100%", borderRadius: 30, backgroundColor: "white", margin: "auto", border: "none", fontSize: 24, color: "grey", padding: '5px 20px', display: 'inline'}}/>
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={{lg: 8, md: 2, xs: 2}} sx={{px: {lg: 20, md: 3, xs: 3}, position: "relative"}}>
            {
              Catbreeds.filter((res) => {
                return query === '' ? res : res.name.toString().toLowerCase().includes(query.toString().toLowerCase())
            }).map((data)=> {
                  return(
                    <Grid item lg={12/5} md={4} xs={12}>
                      <Box height={200} sx={{width: "100%", background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.73)), url("${require('../assets/cat-types/'+data.img)}")`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px 10px 0 0'}}>
                        <Typography component="h1" sx={{ textAlign: 'center', color: 'white', fontWeight: '100', fontSize: 20, fontFamily: "Century Gothic", fontStyle: 'italic'}}>
                          {data.name}
                        </Typography>
                      </Box>
                      <Box sx={{width: '100%', p: 2, bgcolor: "#D3EDDC"}}>
                        <a href={data.link}><Typography component="h1" sx={{  color: '#616161', fontWeight: '100', fontSize: 16, fontFamily: "Inter", }}>
                          More info →
                        </Typography></a>
                      </Box>
                    </Grid>
                  )
                  
              })
            }
          </Grid>
          <Button onClick={handleClick} sx={{color: 'white', width: "100%", textAlign: "center", mt: 5 }}> { open ? "" :  <>Show more <ExpandMore /></> } </Button>
          <Collapse in={open} timeout='auto' unmountOnExit>
          <Grid container spacing={{lg: 8, md: 2, xs: 2}} sx={{px: {lg: 20, md: 3, xs: 3}, position: "relative"}}>
            {
              CatbreedsMore.map((data)=> {
                  return(
                    <Grid item lg={12/5} md={4} xs={12}>
                      <Box height={200} sx={{width: "100%", background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.73)), url("${require('../assets/cat-types/'+data.img)}")`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px 10px 0 0'}}>
                        <Typography component="h1" sx={{ textAlign: 'center', color: 'white', fontWeight: '100', fontSize: 20, fontFamily: "Century Gothic", fontStyle: 'italic'}}>
                          {data.name}
                        </Typography>
                      </Box>
                      <Box sx={{width: '100%', p: 2, bgcolor: "#D3EDDC"}}>
                        <a href="#"><Typography component="h1" sx={{  color: '#616161', fontWeight: '100', fontSize: 16, fontFamily: "Inter", }}>
                          More info →
                        </Typography></a>
                      </Box>
                    </Grid>
                  )
              })
            }
            </Grid>
            </Collapse>
        </Box>


        {/* ---------------GALLERY--------------- */}
        <Box component="section" bgcolor={"#0E3831"} sx={{p: {lg: 8, md: 3, xs: 3}}}>
          <Typography component="h1" sx={{ textAlign: "center", color: 'white', fontWeight: '800', fontSize: 48, fontFamily: "Century Gothic", textTransform: "uppercase" }}>
            Gallery
          </Typography>
          <Divider sx={{ bgcolor: "white", height: 3,  mx: {lg: 90, md: 2, xs: 2}, mb: 5}} variant='middle' />
          <Typography component="h1" sx={{ textAlign: "center", mb: 5,color: 'white', fontWeight: '100', fontSize: 24, fontFamily: "Century Gothic", px:{lg: 50, md: 2, xs: 2}  }}>
            Dive into our Cat Gallery: A visual celebration of feline elegance, showcasing the beauty, charm, and diversity of our beloved cats. Each image tells a unique story of grace and playfulness
          </Typography>
          <Box sx={{p: 3, bgcolor: "black", mx: {lg: 10, md: 1, xs: 1}, justifyContent: "center", alignItems: 'center', display: "flex"}}>
          <Masonry columns={{lg: 3, md: 2, xs: 1}} spacing={{lg: 5, md: 2, xs: 2}}>
            {Gallery.map((item, index) => (
              <div key={index}>
                <img
                  srcSet={`${require('../assets/masonry images/'+item)}?w=162&auto=format&dpr=2 2x`}
                  src={`${require('../assets/masonry images/'+item)}?w=162&auto=format`}
                  loading="lazy"
                  style={{
                    borderRadius: 4,
                    display: 'block',
                    width: '100%',
                  }}
                />
              </div>
            ))}
          </Masonry>
          </Box>
        </Box>


         {/* ---------------FAQs--------------- */}
         <Box component="div" className='meow-bg' sx={{p: {lg: 8, md: 3, xs: 3}, height:"100%", position: "relative"}}>
          <Box bgcolor={"#0E3831"} sx={{ position: "relative", borderRadius: 5, m: 4, mx: {lg: 10, md: 0, xs: 0}}}>
              <Typography component="h1" sx={{ textAlign: "center", color: 'white', fontWeight: '800', fontSize: 48, fontFamily: "Century Gothic", textTransform: "none", position: "relative" }}>
                FAQs
              </Typography>
              <Divider sx={{ bgcolor: "white", height: 3, mx: {lg: 90, md: 2, xs: 2}, mb: 5, position: "relative"}} variant='middle' />
              <Typography component="h1" sx={{ textAlign: "center", mb: 5,color: 'white', fontWeight: '100', fontSize: 24, fontFamily: "Century Gothic", px:{lg: 50, md: 2, xs: 2} }}>
                FAQs: Your go-to resource for quick answers on cat care, behavior, and more. Navigate your feline journey with ease!
              </Typography>
              <Divider variant='fullWidth' sx={{bgcolor: "white", height: 3}} />
              <Box sx={{position: "relative", p: 5, px: {lg: 20, md: 5, xs: 5}}}>
                  <Box className="speech-bubble-blue" sx={{float: "right", mb: 3}} >
                    <Typography component="h1" sx={{ textAlign: "right",color: 'white', fontWeight: '600', fontSize: {lg: 24, md: 16, xs: 14}, fontFamily: "Century Gothic", p: 2, px: 5 }}>
                      How often should I feed my cat?
                    </Typography>
                  </Box>
                  <Box className="speech-bubble-white" sx={{float: "left", mb: 5}} >
                    <Typography component="h1" sx={{ textAlign: "left",color: 'black', fontWeight: '100', fontSize: {lg: 24, md: 16, xs: 14}, fontFamily: "Century Gothic", p: 2, px: 5 }}>
                      Cats typically thrive on a consistent feeding schedule. Most adult cats benefit from two meals per day, while kittens may require more frequent feeding
                    </Typography>
                  </Box>
                  <Box className="speech-bubble-blue" sx={{float: "right", mb: 5}} >
                    <Typography component="h1" sx={{ textAlign: "right",color: 'white', fontWeight: '600', fontSize: {lg: 24, md: 16, xs: 14}, fontFamily: "Century Gothic", p: 2, px: 5 }}>
                      How can I prevent my cat from scratching furniture?
                    </Typography>
                  </Box>
                  <Box className="speech-bubble-white" sx={{float: "left", mb: 5}} >
                    <Typography component="h1" sx={{ textAlign: "left",color: 'black', fontWeight: '100', fontSize: {lg: 24, md: 16, xs: 14}, fontFamily: "Century Gothic", p: 2, px: 5 }}>
                      Provide scratching posts or pads, use cat-friendly deterrents on furniture, and trim your cat's nails regularly to discourage unwanted scratching
                    </Typography>
                  </Box>
                  <Box className="speech-bubble-blue" sx={{float: "right", mb: 5}} >
                    <Typography component="h1" sx={{ textAlign: "right",color: 'white', fontWeight: '600', fontSize: {lg: 24, md: 16, xs: 14}, fontFamily: "Century Gothic", p: 2, px: 5 }}>
                      Do cats need to be bathed?
                    </Typography>
                  </Box>
                  <Box className="speech-bubble-white" sx={{float: "left", mb: 5}} >
                    <Typography component="h1" sx={{ textAlign: "left",color: 'black', fontWeight: '100', fontSize: {lg: 24, md: 16, xs: 14}, fontFamily: "Century Gothic", p: 2, px: 5 }}>
                      Generally, cats groom themselves well and don't require regular baths. However, if your cat gets into something sticky or dirty, a bath may be necessary using cat-safe shampoos
                    </Typography>
                  </Box>
                  <div style={{clear: "both"}}></div>
              </Box>
          </Box>
          <Box bgcolor={"#D3EDDC"} sx={{ position: "relative", borderRadius: 5, m: 4, mx: {lg: 10, md: 0, xs: 0}}}>
              <Typography component="h1" sx={{ textAlign: "center", color: 'black', fontWeight: '100', fontSize: {lg: 40, md: 24, xs: 24}, fontFamily: "Century Gothic", textTransform: "none", position: "relative" }}>
                Send Us a Question
              </Typography>
              <Divider sx={{ bgcolor: "black", height: 3, mb: 5, position: "relative"}}  />
              <Grid container spacing={2} sx={{px: {lg: 10, md: 2, xs: 2}}}>
                <Grid item lg={2} md={4} xs={4}>
                  <Typography component="h1" sx={{ textAlign: "right", mb: 5,color: 'black', fontWeight: '100', fontSize: {lg: 24, md: 16, xs: 14}, fontFamily: "Century Gothic"}}>
                    Email
                  </Typography>
                </Grid>
                <Grid item lg={10} md={8} xs={8}>
                  <TextField variant='outlined' sx={{bgcolor: "white", border: "1px solid black", borderRadius: 3, width: "100%"}}/>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{px: {lg: 10, md: 2, xs: 2}}}>
                <Grid item lg={2} md={4} xs={4}>
                  <Typography component="h1" sx={{ textAlign: "right", mb: 5,color: 'black', fontWeight: '100', fontSize: {lg: 24, md: 16, xs: 14}, fontFamily: "Century Gothic"}}>
                    Message
                  </Typography>
                </Grid>
                <Grid item lg={10} md={8} xs={8}>
                  <TextField variant='outlined' rows={3} multiline sx={{bgcolor: "white", border: "1px solid black", borderRadius: 3, width: "100%", mb: {lg: 2, md: 0, xs: 0}}}/>
                </Grid>
              </Grid>
              <Box sx={{width: "100%", textAlign: "right"}}>
                <Button sx={{bgcolor: "#265B52", color: 'white', borderRadius: 30, fontSize: 24, px: 3, m: 3, mr: {lg: 10, md: 2, xs: 2}, }}>Send</Button>
              </Box>
          </Box>
        </Box>


        {/* ---------------FOOTER--------------- */}
        <Footer/>

    </div>
  )
}

export default Home