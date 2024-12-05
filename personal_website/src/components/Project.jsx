import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

export default function Project({title, logo, tech, desc, git, live}){
    return (
        <Card
            sx={{
                height: 425,
                width: 325,
                margin: 5,
                backgroundColor: "background.default",
                border: "10px double #b4bb73"
            }}
        >
            <CardHeader
                title={
                    <Typography
                        color="primary.main"
                        align="center"
                        variant="h4"
                        sx={{
                            fontWeight: "bold"
                        }}
                    >
                        {title}
                    </Typography>
                }
            />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <CardMedia
                    component="img"
                    image={logo}
                    alt="Paella dish"
                    sx={{
                        height: 125,
                        width: 125,
                        justifyContent: "center"
                    }}
                />
            </Box>
            <CardContent sx={{color: "#461312"}}>
                <Typography variant="subtitle2" sx={{margin:1}}>Tech: {tech}</Typography>
                <Typography variant="body2" sx={{margin:1}}>{desc}</Typography>
                <Typography color="#b4bb73" variant="subtitle1" sx={{margin: 1}}>
                    {git && <a href={git} style={{color:'#b4bb73'}} target="_blank">GITHUB</a>   }
                    {live &&
                        <>
                         {' '}|{' '}
                        <a href={live} style={{color:'#b4bb73'}} target="_blank">LIVE</a>
                        </>
                    }
                </Typography>
            </CardContent>
        </Card>
    )
}