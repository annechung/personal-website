import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link';

function About(props) {
  return (
    <div id="about" className="section">
      <Container>
        <h2 className="section-header"><span className="underline">About Me</span></h2>
        <Grid container direction="row" rowSpacing={2} columnSpacing={3}>
          <Grid item xs={12} md={4} align="center">
            <img className="profile-image" src="profile.jpg" alt="profile shot"></img>
          </Grid>
          <Grid item xs={12} md={8}>
            <p className="about-me-text">
              🎓 Computer Science at University of Waterloo (Class of 2023)<br></br>
              🏢 Incoming SWE Intern @ Meta <br></br>
              📍 Waterloo, ON <br></br>
            </p>
            <p>
              Hey there 👋 I'm a 4th year CS student passionate about building 
              applications that empower users and make a positive impact.
              I've previously interned at Wish and Heymarket, and I'll be at Salesforce 
              this fall working on new admin tooling features.
              I'm also spending 
              this term with <Link href="https://uwblueprint.org/" target="_blank" rel="noreferrer" className="in-text-link">UW Blueprint</Link> working 
              on building tech for a non-profit, Community Fridge.
            </p>
            <p>
              When I'm not working you can find me reading, skateboarding, cooking up a new recipe or 
              planning out my next adventure (see you soon Seattle 🥺). 
              I'm also an avid music listener and always looking for new artists and songs!
            </p>
            <p>
              <span className="weight-600">I'm currently looking for Summer 2022 SWE internships!</span>&nbsp;
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default About