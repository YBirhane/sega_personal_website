import { Grid, Stack, Tab, Tabs, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';

export default function NameAndNavigationBar(){
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
    )
}