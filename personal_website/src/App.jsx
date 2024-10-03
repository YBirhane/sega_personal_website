import logo from './logo.svg';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Box, Divider, Grid, IconButton, Stack, Tab, Tabs, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';

import { styled } from '@mui/system';
import HomePage from './pages/HomePage'
import NameAndNavigationBar from './components/NameAndNavigationBar'

function WavyDivider() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '30px',  // Increased height to accommodate taller waves
        overflow: 'hidden',
        lineHeight: 0,
        marginTop: '30px',
        marginBottom: '-6px',
      }}
    >
      <svg
        viewBox="0 0 1200 50"  // Adjusted viewBox for taller peaks
        preserveAspectRatio="none"
        style={{
          width: '100%',
          height: '100%',
          fill: 'none',         // No fill for the wave
          stroke: '#b4bb73',    // The color of the wave
          strokeWidth: 2,       // Keep the stroke thin like MUI Divider
        }}
      >
        <path
          d="M0,25 C30,0 60,50 90,25 C120,0 150,50 180,25 C210,0 240,50 270,25 C300,0 330,50 360,25 C390,0 420,50 450,25 C480,0 510,50 540,25 C570,0 600,50 630,25 C660,0 690,50 720,25 C750,0 780,50 810,25 C840,0 870,50 900,25 C930,0 960,50 990,25 C1020,0 1050,50 1080,25 C1110,0 1140,50 1170,25 C1200,0 1230,50 1260,25"
        />
      </svg>
    </Box>
  );
}




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
            third: {
              main: '#b4bb73'
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
            },
            MuiDivider: {
                styleOverrides: {
                    root: {
                        color: '#da8129'
                    }
                }
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
                <Box sx={{flexGrow:1}}>
                    <NameAndNavigationBar />
                    <HomePage />
                 </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                    <WavyDivider sx={{width: '100%'}}/>
                    <Stack direction="row">
                        <Box sx={{pl:1, width: "100%", pb:'0px'}}>
                                {/* Put your left-side content here */}
                                <Typography color="primary" variant="subtitle2" sx={{fontStyle:'italic'}}>Created by <a href="https://github.com/YBirhane" style={{color:'#b4bb73'}} target="_blank">Yeabtsega Birhane</a> with <a href="https://mui.com/material-ui/getting-started/" style={{color:'#b4bb73'}} target="_blank">MUI React Library</a> </Typography>
                        </Box>
                        <Box sx={{display: 'flex'}}>
                            <IconButton sx={{paddingTop:0}} color="third" onClick={() => window.open('https://www.linkedin.com/in/yeabtsega-birhane/', "_blank")}>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton sx={{paddingTop:0}} color="third" onClick={() => window.open('https://github.com/YBirhane', "_blank")}>
                                <GitHubIcon />
                            </IconButton>
                            <IconButton sx={{paddingTop:0}} color="third" onClick={() => window.open("mailto:ytbirhane@gmail.com", "_blank")}>
                                <MailIcon />
                            </IconButton>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </ThemeProvider>
  );
}

export default App;
