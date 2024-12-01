import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

export default function Project(){
    return (
        <Card
            sx={{
                height: 450,
                width: 350,
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
                        Good Flicks
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
                    image="GoodFlicks.png"
                    alt="Paella dish"
                    sx={{
                        height: 150,
                        width: 150,
                        justifyContent: "center"
                    }}
                />
            </Box>
            <CardContent sx={{color: "secondary", fontWeight: "bold"}}>
                A social media iOS application that allowed users to track the movies they’ve watched and contact friends
                for opinions on different movies. Programmed the application in Swift, integrated The Movie Database API to retrieve movie information, and used Firebase for backend services.
            </CardContent>
        </Card>
    )
}