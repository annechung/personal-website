import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ProjectCard from '../components/ProjectCard';

function Projects(props) {
  return (
    <div id="projects" className="section">
      <Container>
      <h2 className="section-header"><span className="underline">Projects</span></h2>
      <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12} sm={4}>
            <ProjectCard
              header="Ongoing"
              title="Community Fridge"
              githubLink="https://github.com/uwblueprint/community-fridge-kw"
              description="Scheduling platform for better management of food drop-offs and volunteer sign-ups."
              skills="Typescript, Express.js, PostgreSQL, Sequelize"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ProjectCard
              title="MMR"
              githubLink="https://github.com/SimonZhang0606/Coop_MMR"
              description="Coop review platform where UWaterloo students can rank jobs and view company details
              like average salary and ratings."
              skills="Javascript, React, Python, Flask, MySQL"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ProjectCard
              title="Parrot"
              githubLink="https://github.com/rachel133199/Parrot"
              description="Web app for practicing pronunciation. Scores user's pronunciation and recommends new words to practice 
              based on commonly mispronounced syllables."
              skills="React, Python, Flask"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ProjectCard
              title="Chess (OOP course project)"
              description="Command line chess game with check detection and computer players. Also playable through a graphical
              user interface."
              skills="C++"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ProjectCard
              title="Safe.net"
              githubLink="https://github.com/annechung/Safe.net"
              description="Parental control chrome extension which
               blocks entry of personal information until permission is granted for the site.
               Awarded 1st place hack at CitizenHacks."
              skills="Javascript, React, Firebase"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ProjectCard
              title="Waterloo Rush"
              githubLink="https://github.com/annechung/waterloo-rush-unity"
              description="Endless runner game inspired by the UWaterloo campus.
              Dodge geese, construction and failing grades to stay alive."
              skills="C#, Unity"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Projects