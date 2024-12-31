import { Box } from '@mui/material';
import Resume from '../assets/Resume_Birhane_2024.pdf';

export default function ResumePage(){
    return (
        <Box style={{width: '100%', height: "100%", margin:0, padding:0, overflow: 'hidden'}}>
            <iframe src={Resume} width='100%'  height="100%" />
        </Box>
    )
}