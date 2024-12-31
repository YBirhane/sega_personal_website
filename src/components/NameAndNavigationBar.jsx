import { Grid, Stack, Tab, Tabs, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import { useNavigate, useLocation } from "react-router";
import { useState, useEffect } from 'react';
export default function NameAndNavigationBar(){
    const [value, setValue] = useState('/');
    const navigate = useNavigate();
    const location = useLocation();

    const valuesAndNav = [
        {
            value: "/",
            label: "about me",
        },
        {
            value: "/projects",
            label: "projects",
        },
        {
            value: "/resume",
            label: "resume",
        },
        {
            value: "/contact",
            label: "contact me",
        }

    ]

    useEffect(() => {
        if (location.pathname === "/") {
            setValue("/");
        }
        if (location.pathname === "/projects") {
            setValue("/projects");
        }
    }, [location])
    function handleClick({target}, newValue){
        if (newValue ===  "/contact"){
             window.open("mailto:ytbirhane@gmail.com");
        } else {
            setValue(newValue);
            navigate(newValue);
        }

    }
    return (
        <Stack alignItems="center" direction="row" sx={{display: 'flex', width: '100%'}}>
            <Grid container>
                <Grid item xs={8} md={8} sx={{pl:1}}>
                    <Stack alignItems="center" direction="row" >
                        <FilterVintageIcon sx={{mt:2.5, ml:1, color: '#b4bb73'}} />
                        <Typography sx={{alignContent: 'center', pl: 1, pt:2, fontFamily: "Berkshire Swash"}} variant='h4' color="primary.main"> Sega Birhane</Typography>
                        <FilterVintageIcon sx={{mt:2.5, ml:1, color: '#b4bb73'}} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Tabs
                        sx={{
                            '& .MuiTabs-indicator': {
                                display: 'none', // This hides the default underline
                            },
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            mt:1,
                        }}
                        value={value}
                        onChange={handleClick}
                    >
                        {
                            valuesAndNav.map((item) =>
                                <Tab
                                    value={item.value}
                                    label={item.label}
                                />

                            )
                        }

                    </Tabs>
                </Grid>
            </Grid>
        </Stack>
    )
}