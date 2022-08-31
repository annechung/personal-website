import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ProjectCard from "../components/ProjectCard";

function Projects(props) {
  return (
    <div id="projects" className="section">
      <Container>
        <h2 className="section-header">
          <span className="underline">projects</span>
        </h2>
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              title="focus on nature"
              githubLink="https://github.com/uwblueprint/focus-on-nature"
              description="Camp management and registration platform."
              skills="Typescript, Express.js, MongoDB"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              title="community fridge"
              githubLink="https://github.com/uwblueprint/community-fridge-kw"
              description="Scheduling platform for managing food drop-offs and volunteers."
              skills="Typescript, Express.js, PostgreSQL"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              title="safe.net"
              githubLink="https://github.com/annechung/Safe.net"
              description="Parental control chrome extension + app. Awarded 1st place hack at Citizenhacks."
              skills="Javascript, React, Firebase"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Projects;
