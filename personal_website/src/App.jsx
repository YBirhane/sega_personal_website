import logo from './logo.svg';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Grid, Stack, Tab, Tabs, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import './App.css';


function App() {
    const theme = createTheme({
        palette: {
            primary: {
              main:  '#da8129',
              dark: '#ffffff',
              light: '#ffffff',
              contrastText: 'rgba(0,0,0,0.87)',
            },
            secondary: {
              main: '#FD9584',
            },
            background: {
              paper: '#ffffff',
              default: '#fff6ec',
            },
        },
        components: {
            MuiTab: {
                styleOverrides: {
                    root: {
                        color: '#da8129', // Customize text color
                        textTransform: 'lowercase',
                        fontFamily: [
                            '-apple-system',
                            'BlinkMacSystemFont',
                            '"Segoe UI"',
                            'Roboto',
                            '"Helvetica Neue"',
                            'Arial',
                            'sans-serif',
                            '"Apple Color Emoji"',
                            '"Segoe UI Emoji"',
                            '"Segoe UI Symbol"',
                        ].join(','),
                        '&.Mui-selected': {
                            color: '#da8129', // Customize selected tab text color
                            borderBottom: '2px solid transparent', // Base border
                            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="10"><path d="M0 5 C 10 0, 20 10, 30 5, 40 0, 50 10, 60 5, 70 0, 80 10, 90 5, 100 0" stroke="%23b4bb73" fill="transparent" stroke-width="2"/></svg>')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'bottom center',
                            backgroundSize: 'contain',
                        },
                    },
                },
            },
            MuiTypography: {
                styleOverrides: {
                    root: {
                        fontFamily: [
                            '-apple-system',
                            'BlinkMacSystemFont',
                            '"Segoe UI"',
                            'Roboto',
                            '"Helvetica Neue"',
                            'Arial',
                            'sans-serif',
                            '"Apple Color Emoji"',
                            '"Segoe UI Emoji"',
                            '"Segoe UI Symbol"',
                        ].join(',')
                    }
                }
            }
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Stack alignItems="center" direction="row" sx={{display: 'flex', width: '100%'}}>
                <Grid container>
                    <Grid item xs={8} sx={{pl:1}}>
                        <Stack alignItems="center" direction="row" >
                            <FilterVintageIcon sx={{mt:2.5, ml:1, color: '#b4bb73'}} />
                            <Typography sx={{alignContent: 'center', pl: 1, pt:2, fontFamily: "Berkshire Swash"}} variant='h4' color="primary.main"> Sega Birhane</Typography>
                            <FilterVintageIcon sx={{mt:2.5, ml:1, color: '#b4bb73'}} />
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Tabs
                            sx={{
                                '& .MuiTabs-indicator': {
                                    display: 'none', // This hides the default underline
                                },
                                justifyContent: 'flex-end',
                                alignItems: 'flex-end',
                                mt:1,
                            }}
                            value={0}
                        >
                            <Tab  label="About Me"/>
                            <Tab  label="projects"/>
                            <Tab  label="resume"/>
                            <Tab  label="contact me"/>
                        </Tabs>
                    </Grid>
                </Grid>
             </Stack>
             <Grid container sx={{mt:8}} spacing={0.5}>
                <Grid item sx={{display: 'flex', alignContent: 'center', justifyContent: 'left', ml:5, pr:0}} xs={4}>
                        <Box sx={{width: '375px', height: "500px", border: '15px solid #Cdd9C5' }}>
                            <img style={{border: '15px solid #D9CCE0'}} width="375" height="500" src="ProfilePic.JPG"/>
                        </Box>
                </Grid>
                <Grid item sx={{display: 'flex', alignContent: 'center', justifyContent: 'center'}} xs={7} >
                    <Stack spacing={2}>
                        <Typography
                            variant="h4"
                            sx={{fontWeight: 'bold', pl:0,pr:0 }}
                            align="center"
                            color="secondary"
                        >
                            Full stack developer creating beautiful products with technical rigor and user empathy.
                        </Typography>
                        <Typography
                            variant="h6"
                            color="primary"
                        >
                        Hello, I’m Yeabtsega Birhane—you can call me Sega. I’m currently a contract Software Engineer at <a href="https://www.movementhealthscience.com/" style={{color:'#b4bb73'}} target="_blank">Movement Health Science</a>.
                        <br />
                        <br />
                        I have over three years of experience as a Full Stack Engineer, working with technologies like React, Vue, CSS, JavaScript, Django, and Python. I graduated from <a href="https://www.hmc.edu/" style={{color:'#b4bb73'}} target="_blank">Harvey Mudd College</a> in 2020 with a degree in Computer Science and Math.
                        <br />
                        <br />
                        Feel free to check out my resume [here], my projects[here], and don’t hesitate to reach out via email with any questions or inquiries.

                        </Typography>
                    </Stack>
                </Grid>
             </Grid>
        </ThemeProvider>
  );
}

export default App;
