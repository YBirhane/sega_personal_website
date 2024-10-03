import { Box, Grid, IconButton, Stack, Tab, Tabs, Typography } from '@mui/material';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
export default function HomePage(){
  return (
    <>
    <Grid container sx={{mt:6, ml:2}} spacing={1}>
        <Grid item sx={{display: 'flex', alignContent: 'center', justifyContent: 'left'}} lg={4} md={5} sm={8}>
                <Box sx={{width: '350px', height: "475px", border: '15px solid #Cdd9C5' }}>
                    <img style={{border: '15px solid #D9CCE0'}} width="350" height="475" src="ProfilePic.JPG"/>
                </Box>
        </Grid>
        <Grid item sx={{display: 'flex', alignContent: 'center', justifyContent: 'center', pr:5}} lg={8} md={7} sm={4}>
            <Stack spacing={2}>
                <Typography
                    variant="h4"
                    sx={{fontWeight: 'bold'}}
                    align="center"
                    color="secondary"
                >
                    Full stack developer creating beautiful products with technical rigor and user empathy.
                </Typography>
                <Typography
                    variant="h6"
                    color="primary.main"
                >
                Hello, I’m Yeabtsega Birhane—you can call me Sega. I’m currently a contract Software Engineer at <a href="https://www.movementhealthscience.com/" style={{color:'#b4bb73'}} target="_blank">Movement Health Science</a>.
                <br />
                <br />
                I have over three years of experience as a Full Stack Engineer, working with: React, Vue, CSS, JavaScript, Django, and Python. I graduated from <a href="https://www.hmc.edu/" style={{color:'#b4bb73'}} target="_blank">Harvey Mudd College</a> in 2020 with a degree in Computer Science and Math.
                <br />
                <br />
                Feel free to check out my resume [here], my projects[here], and don’t hesitate to reach out via email with any questions or inquiries.

                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', p:0, border:'1px solid #FD9584' , width: 'fit-content'}}>
                    <IconButton color="secondary" onClick={() => window.open('https://www.linkedin.com/in/yeabtsega-birhane/', "_blank")}>
                        <LinkedInIcon  />
                    </IconButton>
                    <IconButton color="secondary" onClick={() => window.open('https://github.com/YBirhane', "_blank")}>
                        <GitHubIcon />
                    </IconButton>
                    <IconButton color="secondary" onClick={() => window.open("mailto:ytbirhane@gmail.com", "_blank")}>
                        <MailIcon />
                    </IconButton>
                </Box>
            </Stack>
        </Grid>
    </Grid>
    </>
  )
}