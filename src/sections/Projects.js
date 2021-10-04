import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ProjectCard from '../components/ProjectCard';

function Projects(props) {
  return (
    <div id="projects" className="section">
      <Container>
      <h2 className="section-header"><span className="underline">Projects</span></h2>
      <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              header="Ongoing"
              title="Community Fridge"
              githubLink="https://github.com/uwblueprint/community-fridge-kw"
              description="Scheduling platform for managing food drop-offs and volunteers."
              skills="Typescript, Express.js, PostgreSQL"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              title="Co-op MMR"
              githubLink="https://github.com/SimonZhang0606/Coop_MMR"
              description="Coop review platform for UWaterloo students. Assigns each company an MMR value."
              skills="React, Python, Flask, MySQL"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              title="Parrot"
              githubLink="https://github.com/rachel133199/Parrot"
              description="Web app for practicing pronunciation. Scores user's pronunciation and recommends other words to practice."
              skills="React, Python, Flask"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              title="Chess"
              description="Command line chess game with check detection and computer players. CS246 final course project."
              skills="C++"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              title="Safe.net"
              githubLink="https://github.com/annechung/Safe.net"
              description="Parental control chrome extension + app. Awarded 1st place hack at Citizenhacks."
              skills="Javascript, React, Firebase"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
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