import Project from '../components/Project';
import { Grid } from '@mui/material';
import SJSLogo from '../assets/SJSLogo.png';
import GoodFlicksLogo from '../assets/GoodFlicks.png';
import APCSLogo from '../assets/statistics.png';
import GoogleLogo from '../assets/google.png';

export default function ProjectsPage(){
    const projects = [{
                 title: "Good Flicks",
                 logo: GoodFlicksLogo,
                 tech: "Swift, Movie Database API, Firebase",
                 desc: "A social media iOS application that allows users to track and rate the movies they’ve watched and share their ratings with friends.",
                 git: "https://github.com/YBirhane/GoodFlicks",
                },
                 {
                  title: "SJS Popup+Map",
                  logo: SJSLogo,
                  tech: "React, Google Maps API",
                  desc: "A popup feature to provide various information to San Jose Strong website users, along with a map to assist with finding local businesses",
                  git: "https://github.com/YBirhane/sjstrong_map",
                 },
                 {
                   title: "AP CS Analysis",
                   logo: APCSLogo,
                   tech: "Python, pandas",
                   desc: "A Python script with pandas library to analyze AP CS score data, extracting and aggregating demographic insights for a research paper on increasing diversity and inclusion within STEM fields.",
                   git: "https://github.com/YBirhane/APCSDataAnalyzer",
                },
                {
                   title: "Applied Computing Series",
                   logo: GoogleLogo,
                   tech: "SQL, data science",
                   desc: "Helped to refine Google’s Applied Computing 101 curriculum + textbook which teaches data science to undergraduates.",
                   git: "https://github.com/google/applied-computing-series",
                }];
    return (
        <Grid container>
       {
        projects.map((project) =>
            (<Grid xs={12} sm={6} md={4}>
                <Project
                    key={project.title}
                    title={project.title}
                    logo={project.logo}
                    tech={project.tech}
                    desc={project.desc}
                    git={project.git}
                  />
             </Grid>
            )

        )
       }
       </Grid>

    )
}