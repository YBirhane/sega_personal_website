import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

export default function Project({title, logo, tech, desc, git, live}){
    return (
        <Card
            sx={{
                height: 475,
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
                        variant="h5"
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
                    sx={{
                        height: 125,
                        width: 125,
                        objectFit: 'contain',
                        justifyContent: "center"
                    }}
                />
            </Box>
            <CardContent sx={{position:'relative', color: "#461312"}}>
                <Typography variant="subtitle2" sx={{margin:1, height: 50, overflow: 'hidden'}}>Tech: {tech}</Typography>
                <Typography variant="body2" sx={{margin:1, height: 130, overflow: 'hidden'}}>{desc}</Typography>
                <Typography color="#b4bb73" variant="subtitle1" sx={{position: 'absolute', margin:1, bottom: 2 }}>
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