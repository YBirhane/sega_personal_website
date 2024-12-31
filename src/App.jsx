import logo from './logo.svg';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Box, Divider, Grid, IconButton, Stack, Tab, Tabs, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { Outlet } from 'react-router-dom';


import { styled } from '@mui/system';
import HomePage from './pages/HomePage'
import NameAndNavigationBar from './components/NameAndNavigationBar'
import BottomBar from './components/BottomBar'





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
                    <Outlet />
                 </Box>
                <BottomBar />
            </Box>
        </ThemeProvider>
  );
}

export default App;
