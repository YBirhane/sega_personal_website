import Project from '../components/Project';
import { Grid } from '@mui/material';
export default function ProjectsPage(){
    const projects = [{
                 title: "Good Flicks",
                 logo: "GoodFlicks.png",
                 tech: "Swift, Movie Database API, Firebase",
                 desc: "A social media iOS application that allowed users to track and rate the movies they’ve watched and share that with friends.",
                 git: "https://github.com/YBirhane",
                },
                 {
                  title: "SJS Popup+Map",
                  logo: "SJSLogo.png",
                  tech: "React, Google Maps API",
                  desc: "A popup feature to provide information to San Jose Strong website users, along with a map to assist with finding local businesses",
                  git: "https://github.com/YBirhane/sjstrong_map",
                 },
                 {
                   title: "AP CS Analysis",
                   logo: "statistics.png",
                   tech: "Python",
                   desc: "Created a Python script with pandas to analyze AP CS score data, extracting and aggregating demographic insights for a research paper on increasing diversity and inclusion within STEM fields.",
                   git: "https://github.com/YBirhane/APCSDataAnalyzer",
                },
                {
                   title: "Applied Computing Series",
                   logo: "google.png",
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